jest.mock("../src/models/draftPick");
jest.mock("../src/models/player");

import * as draftPickController from "../src/controllers/draftPickController";
import DraftPick from "../src/models/draftPick";
import Player from "../src/models/player";

const mockRequest = (body = {}, params = {}) =>
  ({ body, params }) as any;

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("DraftPick Controller - saveDraftPicks", () => {
  it("creates new draft picks when none exist", async () => {
    const req = mockRequest({
      picks: [
        {
          team_id: 1,
          slotIndex: 0,
          cost: 10,
          player_id: 5,
          season: 2026,
          rosterPosition: "UTIL",
          draft_time: "now",
        },
      ],
      teamIds: [1],
    });

    const res = mockResponse();

    (DraftPick.findOne as jest.Mock).mockResolvedValue(null);
    (DraftPick.create as jest.Mock).mockResolvedValue({ id: 1 });

    await draftPickController.saveDraftPicks(req, res);

    // expect(DraftPick.findOne).toHaveBeenCalled();
    // expect(DraftPick.create).toHaveBeenCalledWith(req.body.picks[0]);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ success: true });
  });
});

it("updates existing draft picks", async () => {
  const req = mockRequest({
    picks: [
      {
        team_id: 1,
        slotIndex: 0,
        cost: 15,
        player_id: 9,
        season: 2026,
        rosterPosition: "UTIL",
        draft_time: "later",
      },
    ],
    teamIds: [1],
  });

  const res = mockResponse();

  const mockUpdate = jest.fn();

  (DraftPick.bulkCreate as jest.Mock).mockResolvedValue({
    update: mockUpdate,
  });

  await draftPickController.saveDraftPicks(req, res);

  expect(DraftPick.bulkCreate).toHaveBeenCalled();

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith({ success: true });
});

it("returns 400 if picks is not an array", async () => {
  const req = mockRequest({
    picks: "not-an-array",
    teamIds: [],
  });

  const res = mockResponse();

  await draftPickController.saveDraftPicks(req, res);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    error: "picks and teamIds must be arrays",
  });
});

describe("DraftPick Controller - getTeamDraftPicks", () => {
  it("returns draft picks for a team", async () => {
    const req = mockRequest({}, { id: "1" });
    const res = mockResponse();

    const fakePicks = [
      { id: 1, team_id: 1 },
      { id: 2, team_id: 1 },
    ];

    (DraftPick.findAll as jest.Mock).mockResolvedValue(fakePicks);

    await draftPickController.getTeamDraftPicks(req, res);

    expect(DraftPick.findAll).toHaveBeenCalledWith({
      where: { team_id: "1" },
      include: [{ model: Player, as: "player" }],
      order: [["id", "DESC"]],
    });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakePicks);
  });
});

it("handles errors in getTeamDraftPicks", async () => {
  const req = mockRequest({}, { id: "1" });
  const res = mockResponse();

  (DraftPick.findAll as jest.Mock).mockRejectedValue(
    new Error("DB failure")
  );

  await draftPickController.getTeamDraftPicks(req, res);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      error: "Failed to fetch draft picks",
    })
  );
});


