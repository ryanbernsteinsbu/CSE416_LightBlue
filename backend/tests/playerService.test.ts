jest.mock("../src/repositories/playerRepository");

import * as playerService from "../src/services/playerService";
import * as playerRepository from "../src/repositories/playerRepository";

import Player from "../src/models/player";

const mockPlayers = [
  {
    id: 1,
    firstName: "Mike",
    lastName: "Trout",
  },
];

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Player Service - createPlayer", () => {
  it("creates a player if mlb id does not exist", async () => {
    (playerRepository.findPlayerByMlbId as jest.Mock)
      .mockResolvedValue(null);

    (playerRepository.createPlayer as jest.Mock)
      .mockResolvedValue(mockPlayers[0]);

    const result = await playerService.createPlayer(
      "123",
      25,
      "Mike",
      "Trout",
      true,
      ["OF"] as any,
      {},
      {},
      {},
      "ACTIVE" as any,
      3,
      "LAA",
      "AL",
      "1"
    );

    expect(playerRepository.findPlayerByMlbId)
      .toHaveBeenCalledWith("123");

    expect(playerRepository.createPlayer)
      .toHaveBeenCalled();

    expect(result).toEqual(mockPlayers[0]);
  });

  it("throws if player already exists", async () => {
    (playerRepository.findPlayerByMlbId as jest.Mock)
      .mockResolvedValue(mockPlayers[0]);

    await expect(
      playerService.createPlayer(
        "123",
        25,
        "Mike",
        "Trout",
        true,
        ["OF"] as any,
        {},
        {},
        {},
        "ACTIVE" as any,
        3,
        "LAA",
        "AL",
        "1"
      )
    ).rejects.toThrow("Player already exists");
  });
});

describe("Player Service - getPlayerById", () => {
  it("returns a player", async () => {
    (playerRepository.findPlayerById as jest.Mock)
      .mockResolvedValue(mockPlayers[0]);

    const result = await playerService.getPlayerById(1);

    expect(playerRepository.findPlayerById)
      .toHaveBeenCalledWith(1);

    expect(result).toEqual(mockPlayers[0]);
  });

  it("throws when player not found", async () => {
    (playerRepository.findPlayerById as jest.Mock)
      .mockResolvedValue(null);

    await expect(
      playerService.getPlayerById(1)
    ).rejects.toThrow("Player not found");
  });
});

describe("Player Service - getAllPlayers", () => {
  it("returns all players", async () => {
    (playerRepository.findAllPlayers as jest.Mock)
      .mockResolvedValue(mockPlayers);

    const result = await playerService.getAllPlayers();

    expect(playerRepository.findAllPlayers)
      .toHaveBeenCalled();

    expect(result).toEqual(mockPlayers);
  });

  it("throws if no players found", async () => {
    (playerRepository.findAllPlayers as jest.Mock)
      .mockResolvedValue(null);

    await expect(
      playerService.getAllPlayers()
    ).rejects.toThrow("No players found");
  });
});

describe("Player Service - updatePlayer", () => {
  it("updates a player", async () => {
    (playerRepository.updatePlayer as jest.Mock)
      .mockResolvedValue(mockPlayers[0]);

    const result = await playerService.updatePlayer(
      1,
      { age: 30 } as any
    );

    expect(playerRepository.updatePlayer)
      .toHaveBeenCalledWith(1, { age: 30 });

    expect(result).toEqual(mockPlayers[0]);
  });
});

describe("Player Service - deletePlayer", () => {
  it("deletes a player", async () => {
    (playerRepository.deletePlayer as jest.Mock)
      .mockResolvedValue(true);

    const result = await playerService.deletePlayer(1);

    expect(playerRepository.deletePlayer)
      .toHaveBeenCalledWith(1);

    expect(result).toBe(true);
  });
});
