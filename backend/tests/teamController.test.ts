import * as teamController from "../src/controllers/teamController";

import Team from "../src/models/team";
import DraftPick from "../src/models/draftPick";
import MinorTable from "../src/models/minorTable";
import League from "../src/models/league";
import MinorLeaguePick from "../src/models/minorLeaguePick";

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

describe("Team Controller - createTeam", () => {
  it("creates a team successfully", async () => {
    const req = mockRequest({
      name: "Test Team",
      budget: 260,
      league_id: 1,
    });

    const res = mockResponse();

    const fakeTeam = {
      id: 10,
      name: "Test Team",
      budget: 260,
      league_id: 1,
    };

    jest.spyOn(Team, "create").mockResolvedValue(fakeTeam as any);

    jest.spyOn(League, "findByPk").mockResolvedValue({
      id: 1,
      rosterSettings: {
        numMinor: 15,
      },
    } as any);

    jest.spyOn(MinorTable, "create").mockResolvedValue({} as any);

    await teamController.createTeam(req, res);

    expect(Team.create).toHaveBeenCalledWith({
      name: "Test Team",
      budget: 260,
      league_id: 1,
    });

    expect(League.findByPk).toHaveBeenCalledWith(1);

    expect(MinorTable.create).toHaveBeenCalledWith({
      team_id: 10,
      numPlayers: 15,
    });

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(fakeTeam);
  });

  it("uses default numMinor when roster settings missing", async () => {
    const req = mockRequest({
      name: "Test Team",
      budget: 260,
      league_id: 1,
    });

    const res = mockResponse();

    jest.spyOn(Team, "create").mockResolvedValue({
      id: 10,
    } as any);

    jest.spyOn(League, "findByPk").mockResolvedValue({
      id: 1,
    } as any);

    jest.spyOn(MinorTable, "create").mockResolvedValue({} as any);

    await teamController.createTeam(req, res);

    expect(MinorTable.create).toHaveBeenCalledWith({
      team_id: 10,
      numPlayers: 10,
    });
  });

  it("handles createTeam errors", async () => {
    const req = mockRequest({
      name: "Bad Team",
    });

    const res = mockResponse();

    jest
      .spyOn(Team, "create")
      .mockRejectedValue(new Error("DB failure"));

    await teamController.createTeam(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("Team Controller - getTeam", () => {
  it("returns a team", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const fakeTeam = {
      id: 1,
      name: "Team 1",
    };

    jest
      .spyOn(Team, "findByPk")
      .mockResolvedValue(fakeTeam as any);

    await teamController.getTeam(req, res);

    expect(Team.findByPk).toHaveBeenCalledWith(
      1,
      {
        include: [
          { association: "league" },
          { association: "players" },
        ],
      }
    );

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakeTeam);
  });

  it("handles missing team", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest.spyOn(Team, "findByPk").mockResolvedValue(null);

    await teamController.getTeam(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("Team Controller - getLeagueTeams", () => {
  it("returns all teams in a league", async () => {
    const req = mockRequest({}, { league_id: "1" });

    const res = mockResponse();

    const fakeTeams = [
      { id: 1 },
      { id: 2 },
    ];

    jest
      .spyOn(Team, "findAll")
      .mockResolvedValue(fakeTeams as any);

    await teamController.getLeagueTeams(req, res);

    expect(Team.findAll).toHaveBeenCalledWith({
      where: { league_id: "1" },
    });

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakeTeams);
  });

  it("handles getLeagueTeams errors", async () => {
    const req = mockRequest({}, { league_id: "1" });

    const res = mockResponse();

    jest
      .spyOn(Team, "findAll")
      .mockRejectedValue(new Error("DB failure"));

    await teamController.getLeagueTeams(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("Team Controller - updateTeam", () => {
  it("updates a team", async () => {
    const req = mockRequest(
      { name: "Updated Team" },
      { id: "1" }
    );

    const res = mockResponse();

    const mockUpdate = jest.fn();

    jest.spyOn(Team, "findByPk")
      .mockResolvedValueOnce({
        id: 1,
        update: mockUpdate,
      } as any)
      .mockResolvedValueOnce({
        id: 1,
        name: "Updated Team",
      } as any);

    await teamController.updateTeam(req, res);

    expect(mockUpdate).toHaveBeenCalledWith({
      name: "Updated Team",
    });

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("handles updateTeam errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(Team, "findByPk")
      .mockRejectedValue(new Error("Update failed"));

    await teamController.updateTeam(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("Team Controller - deleteTeam", () => {
  it("deletes a team and related records", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const mockDestroy = jest.fn();

    const fakeMinorTable = {
      id: 100,
      destroy: jest.fn(),
    };

    jest.spyOn(Team, "findByPk").mockResolvedValue({
      id: 1,
      destroy: mockDestroy,
    } as any);

    jest
      .spyOn(DraftPick, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(MinorTable, "findOne")
      .mockResolvedValue(fakeMinorTable as any);

    jest
      .spyOn(MinorLeaguePick, "destroy")
      .mockResolvedValue(1 as any);

    await teamController.deleteTeam(req, res);

    expect(DraftPick.destroy).toHaveBeenCalledWith({
      where: { team_id: 1 },
    });

    expect(MinorLeaguePick.destroy).toHaveBeenCalledWith({
      where: { table_id: 100 },
    });

    expect(fakeMinorTable.destroy).toHaveBeenCalled();

    expect(mockDestroy).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      message: "Team deleted successfully",
    });
  });

  it("handles deleteTeam errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(Team, "findByPk")
      .mockRejectedValue(new Error("Delete failed"));

    await teamController.deleteTeam(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
