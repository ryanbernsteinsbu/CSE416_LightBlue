import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import LeagueDraftBoard from "@/components/LeagueDraftBoard";

import {
  createTeam,
  getLeagueTeams,
  deleteTeam,
  getAllPlayers,
  saveDraftPicks,
  getTeamDraftPicks,
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  createTeam: jest.fn(),
  getLeagueTeam: jest.fn(),
  deleteTeam: jest.fn(),
  getAllPlayers: jest.fn(),
  saveDraftPicks: jest.fn(),
  getTeamDraftPicks: jest.fn(),
}));

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "123"),
    },
    writable: true,
  });
  jest.clearAllMocks();
});