import * as minorController from "../src/controllers/minorController";

import MinorTable from "../src/models/minorTable";
import MinorLeaguePick from "../src/models/minorLeaguePick";
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

describe("Minor League Controller - getTable", () => {
  it("returns a minor league table", async () => {
    const req = mockRequest({}, { teamId: "1" });

    const res = mockResponse();

    const fakeTable = {
      id: 1,
      team_id: 1,
      players: [],
    };

    jest
      .spyOn(MinorTable, "findOne")
      .mockResolvedValue(fakeTable as any);

    await minorController.getTable(req, res);

    expect(MinorTable.findOne).toHaveBeenCalledWith({
      where: { team_id: "1" },
      include: [
        {
          model: MinorLeaguePick,
          as: "players",
          include: [{ model: Player, as: "player" }],
        },
      ],
      order: [
        [
          { model: MinorLeaguePick, as: "players" },
          "slotIndex",
          "ASC",
        ],
      ],
    });

    expect(res.json).toHaveBeenCalledWith(fakeTable);
  });

  it("returns 404 if no table exists", async () => {
    const req = mockRequest({}, { teamId: "1" });

    const res = mockResponse();

    jest.spyOn(MinorTable, "findOne").mockResolvedValue(null);

    await minorController.getTable(req, res);

    expect(res.status).toHaveBeenCalledWith(404);

    expect(res.json).toHaveBeenCalledWith({
      error: "No minor league table found",
    });
  });

  it("handles getTable errors", async () => {
    const req = mockRequest({}, { teamId: "1" });

    const res = mockResponse();

    jest
      .spyOn(MinorTable, "findOne")
      .mockRejectedValue(new Error("DB failure"));

    await minorController.getTable(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith({
      error: "Failed to fetch minor league table",
    });
  });
});

describe("Minor League Controller - savepicks", () => {
  it("replaces and saves picks", async () => {
    const req = mockRequest(
      {
        picks: [
          {
            player_id: 10,
            slotIndex: 0,
          },
          {
            player_id: 11,
            slotIndex: 1,
          },
        ],
      },
      { tableId: "5" }
    );

    const res = mockResponse();

    jest
      .spyOn(MinorLeaguePick, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(MinorLeaguePick, "bulkCreate")
      .mockResolvedValue([] as any);

    await minorController.savepicks(req, res);

    expect(MinorLeaguePick.destroy).toHaveBeenCalledWith({
      where: { table_id: "5" },
    });

    expect(MinorLeaguePick.bulkCreate).toHaveBeenCalledWith([
      {
        player_id: 10,
        slotIndex: 0,
        table_id: "5",
      },
      {
        player_id: 11,
        slotIndex: 1,
        table_id: "5",
      },
    ]);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
    });
  });

  it("handles savepicks errors", async () => {
    const req = mockRequest(
      {
        picks: [],
      },
      { tableId: "5" }
    );

    const res = mockResponse();

    jest
      .spyOn(MinorLeaguePick, "destroy")
      .mockRejectedValue(new Error("DB failure"));

    await minorController.savepicks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith({
      error: "Failed to save picks",
    });
  });
});
