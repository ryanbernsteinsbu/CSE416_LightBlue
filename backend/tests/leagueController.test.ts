import * as leagueController from "../src/controllers/leagueController";

import League from "../src/models/league";
import DraftSettings from "../src/models/draftSettings";
import ScoringSettings from "../src/models/scoringSettings";
import RosterSettings from "../src/models/rosterSettings";
import PlayerSettings from "../src/models/playerSettings";
import Team from "../src/models/team";
import DraftPick from "../src/models/draftPick";
import MinorTable from "../src/models/minorTable";
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

describe("League Controller - createLeague", () => {
  it("creates a league successfully", async () => {
    const req = mockRequest({
      title: "Test League",
      season: 2026,
      user_id: 1,
      draftSettings: {
        numTeams: 2,
        budget: 260,
      },
      scoringSettings: {},
      rosterSettings: {},
      playerSettings: {},
    });

    const res = mockResponse();

    const fakeLeague = {
      id: 1,
      title: "Test League",
    };

    jest.spyOn(League, "create").mockResolvedValue(fakeLeague as any);

    jest
      .spyOn(ScoringSettings, "create")
      .mockResolvedValue({} as any);

    jest
      .spyOn(PlayerSettings, "create")
      .mockResolvedValue({} as any);

    jest
      .spyOn(RosterSettings, "create")
      .mockResolvedValue({} as any);

    jest
      .spyOn(DraftSettings, "create")
      .mockResolvedValue({} as any);

    jest.spyOn(Team, "create").mockResolvedValue({} as any);

    jest.spyOn(League, "findByPk").mockResolvedValue(fakeLeague as any);

    await leagueController.createLeague(req, res);

    expect(League.create).toHaveBeenCalled();

    expect(ScoringSettings.create).toHaveBeenCalled();

    expect(PlayerSettings.create).toHaveBeenCalled();

    expect(RosterSettings.create).toHaveBeenCalled();

    expect(DraftSettings.create).toHaveBeenCalled();

    expect(Team.create).toHaveBeenCalledTimes(2);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(fakeLeague);
  });

  it("handles createLeague errors", async () => {
    const req = mockRequest({});
    const res = mockResponse();

    jest
      .spyOn(League, "create")
      .mockRejectedValue(new Error("DB failure"));

    await leagueController.createLeague(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("League Controller - getLeague", () => {
  it("returns a league", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const fakeLeague = {
      id: 1,
      title: "League",
    };

    jest
      .spyOn(League, "findByPk")
      .mockResolvedValue(fakeLeague as any);

    await leagueController.getLeague(req, res);

    expect(League.findByPk).toHaveBeenCalledWith(
      1,
      expect.any(Object)
    );

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakeLeague);
  });

  it("handles missing league", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest.spyOn(League, "findByPk").mockResolvedValue(null);

    await leagueController.getLeague(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("League Controller - getUserLeagues", () => {
  it("returns user leagues", async () => {
    const req = mockRequest({}, { user_id: "1" });

    const res = mockResponse();

    const fakeLeagues = [{ id: 1 }, { id: 2 }];

    jest
      .spyOn(League, "findAll")
      .mockResolvedValue(fakeLeagues as any);

    await leagueController.getUserLeagues(req, res);

    expect(League.findAll).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakeLeagues);
  });
});

describe("League Controller - updateLeague", () => {
  it("updates a league", async () => {
    const req = mockRequest(
      { title: "Updated League" },
      { id: "1" }
    );

    const res = mockResponse();

    const mockUpdate = jest.fn();

    jest.spyOn(League, "findByPk").mockResolvedValue({
      id: 1,
      update: mockUpdate,
    } as any);

    await leagueController.updateLeague(req, res);

    expect(mockUpdate).toHaveBeenCalledWith({
      title: "Updated League",
    });

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("handles update errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(League, "findByPk")
      .mockRejectedValue(new Error("Update failed"));

    await leagueController.updateLeague(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("League Controller - deleteLeague", () => {
  it("deletes a league and related data", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const mockDestroy = jest.fn();

    const fakeLeague = {
      id: 1,
      destroy: mockDestroy,
    };

    jest
      .spyOn(League, "findByPk")
      .mockResolvedValue(fakeLeague as any);

    jest.spyOn(Team, "findAll").mockResolvedValue(
      [
        { id: 10 },
        { id: 11 },
      ] as any
    );

    jest.spyOn(MinorTable, "findAll").mockResolvedValue(
      [{ id: 100 }] as any
    );

    jest
      .spyOn(DraftPick, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(MinorLeaguePick, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(MinorTable, "destroy")
      .mockResolvedValue(1 as any);

    jest.spyOn(Team, "destroy").mockResolvedValue(1 as any);

    jest
      .spyOn(ScoringSettings, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(PlayerSettings, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(RosterSettings, "destroy")
      .mockResolvedValue(1 as any);

    jest
      .spyOn(DraftSettings, "destroy")
      .mockResolvedValue(1 as any);

    await leagueController.deleteLeague(req, res);

    expect(DraftPick.destroy).toHaveBeenCalled();

    expect(Team.destroy).toHaveBeenCalled();

    expect(mockDestroy).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      message: "League deleted successfully",
    });
  });

  it("handles delete errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(League, "findByPk")
      .mockRejectedValue(new Error("Delete failed"));

    await leagueController.deleteLeague(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
