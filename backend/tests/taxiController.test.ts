import * as taxiController from "../src/controllers/taxiController";

import TaxiPick from "../src/models/taxiPick";
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

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Taxi Controller - saveTaxiPicks", () => {
  it("saves taxi picks successfully", async () => {
    const req = mockRequest({
      picks: [
        {
          team_id: 1,
          player_id: 10,
          slot: 0,
        },
        {
          team_id: 1,
          player_id: 11,
          slot: 1,
        },
      ],
      teamIds: [1],
    });

    const res = mockResponse();

    jest
      .spyOn(TaxiPick, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(TaxiPick, "bulkCreate")
      .mockResolvedValue([] as any);

    await taxiController.saveTaxiPicks(req, res);

    expect(TaxiPick.destroy).toHaveBeenCalledWith({
      where: { team_id: [1] },
    });

    expect(TaxiPick.bulkCreate).toHaveBeenCalledWith([
      {
        team_id: 1,
        player_id: 10,
        slot: 0,
      },
      {
        team_id: 1,
        player_id: 11,
        slot: 1,
      },
    ]);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
    });
  });

  it("returns 400 for invalid input", async () => {
    const req = mockRequest({
      picks: "not-an-array",
      teamIds: [],
    });

    const res = mockResponse();

    await taxiController.saveTaxiPicks(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(res.json).toHaveBeenCalledWith({
      error: "picks and teamIds must be arrays",
    });
  });

  it("handles saveTaxiPicks errors", async () => {
    const req = mockRequest({
      picks: [],
      teamIds: [1],
    });

    const res = mockResponse();

    jest
      .spyOn(TaxiPick, "destroy")
      .mockRejectedValue(new Error("DB failure"));

    await taxiController.saveTaxiPicks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Failed to save taxi picks",
      })
    );
  });
});

describe("Taxi Controller - getTeamTaxiPicks", () => {
  it("returns taxi picks for a team", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const fakePicks = [
      {
        id: 1,
        team_id: 1,
      },
      {
        id: 2,
        team_id: 1,
      },
    ];

    jest
      .spyOn(TaxiPick, "findAll")
      .mockResolvedValue(fakePicks as any);

    await taxiController.getTeamTaxiPicks(req, res);

    expect(TaxiPick.findAll).toHaveBeenCalledWith({
      where: { team_id: "1" },
      include: [{ model: Player, as: "player" }],
      order: [["slot", "ASC"]],
    });

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakePicks);
  });

  it("handles getTeamTaxiPicks errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(TaxiPick, "findAll")
      .mockRejectedValue(new Error("DB failure"));

    await taxiController.getTeamTaxiPicks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Failed to fetch taxi picks",
      })
    );
  });
});
