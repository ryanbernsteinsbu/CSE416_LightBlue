jest.mock("../src/services/playerService");

import * as playerService from "../src/services/playerService";
import * as playerController from "../src/controllers/playerController";

const mockRequest = (body = {}, params = {}) => ({
  body,
  params,
}) as any;

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("Player Controller - create", () => {
  it("should create a player and return 201", async () => {
    const req = mockRequest({
      mlbPlayerId: 123,
      age: 25,
      firstName: "Mike",
      lastName: "Trout",
      isHitter: true,
      playablePositions: ["OF"],
      lastYearStats: {},
      threeYearAvg: {},
      projectedStats: {},
      status: "ACTIVE",
      seasonsLeft: 3,
      realTeam: "LAA",
      realLeague: "AL",
      depth: 1,
    });

    const res = mockResponse();

    const fakePlayer = {
      mlbPlayerId: "123",
      age: 25,
      firstName: "Mike",
      lastName: "Trout",
      isHitter: true,
      realTeam: "LAA",
      realLeague: "AL",
      depth: 1,
      seasonsLeft: 3,
      status: "ACTIVE",
      playablePositions: ["OF"],
      lastYearStats: {},
      threeYearAvg: {},
      projectedStats: {},
    };

    (playerService.createPlayer as jest.Mock).mockResolvedValue(fakePlayer);

    await playerController.create(req, res);

    expect(playerService.createPlayer).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(fakePlayer);
  });
});

describe("Player Controller - getPlayer", () => {
  it("returns player by id", async () => {
    const req = mockRequest({}, { id: "1" });
    const res = mockResponse();

    const fakePlayer = { id: 1, name: "Test" };

    (playerService.getPlayerById as jest.Mock).mockResolvedValue(fakePlayer);

    await playerController.getPlayer(req, res);

    expect(playerService.getPlayerById).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakePlayer);
  });
});

it("returns 404 when service throws", async () => {
  const req = mockRequest({}, { id: "1" });
  const res = mockResponse();

  (playerService.getPlayerById as jest.Mock).mockRejectedValue(
    new Error("Not found")
  );

  await playerController.getPlayer(req, res);

  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({
    error: "Not found",
  });
});


