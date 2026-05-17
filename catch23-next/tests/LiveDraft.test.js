import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LiveDraft from "../src/components/LiveDraft";
import {
  getLeagueTeams,
  getAllPlayers,
  getTeamDraftPicks,
  createTeam,
  saveDraftPicks,
  updateLeague,
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getLeagueTeams: jest.fn(),
  getAllPlayers: jest.fn(),
  getTeamDraftPicks: jest.fn(),
  createTeam: jest.fn(),
  deleteTeam: jest.fn(),
  saveDraftPicks: jest.fn(),
  updateLeague: jest.fn(),
}));

jest.mock("../src/components/ConfirmDeleteModal", () => ({ isOpen, onConfirm, onCancel, leagueName }) =>
  isOpen ? (
    <div>
      <span>{leagueName}</span>
      <button onClick={onConfirm}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  ) : null
);

jest.mock("../src/components/PositionPlayersModal", () => ({
  PositionPlayersModal: () => null,
  playerMatchesRowPosition: jest.fn(() => true),
}));

jest.mock("../src/components/PlayerProfileModal", () => ({
  PlayerProfileModal: () => null,
}));

const league = {
  id: 1,
  title: "Live League",
  format: "Auction",
  season: "2025",
  status: "ACTIVE",
  draftSettings: { budget: 260 },
  playerSettings: { division: "MIXED" },
  rosterSettings: {
    numCatchers: 1,
    numFirstBase: 1,
    numSecondBase: 0,
    numThirdBase: 0,
    numShortstop: 0,
    numCornerInfield: 0,
    numMiddleInfield: 0,
    numOutfield: 1,
    numUtility: 0,
    numPitchers: 1,
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  getLeagueTeams.mockResolvedValue({ data: [] });
  getAllPlayers.mockResolvedValue({ data: [] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  saveDraftPicks.mockResolvedValue({});
  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => null), setItem: jest.fn() },
    writable: true,
  });
});

test("renders LIVE DRAFT MODE banner", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/LIVE DRAFT MODE/i)).toBeInTheDocument();
  });
});

test("renders empty state when no teams exist", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/No teams yet/i)).toBeInTheDocument();
  });
});

test("renders Add Team button", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getByRole("button", { name: "+ Add Team" })).toBeInTheDocument();
  });
});

test("clicking Add Team calls createTeam", async () => {
  createTeam.mockResolvedValue({ data: { id: 99, name: "Team 1" } });
  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);

  const addButton = await screen.findByRole("button", { name: "+ Add Team" });
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(createTeam).toHaveBeenCalledWith("Team 1", league.id);
  });
});

test("renders league title in header", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Live League")).toBeInTheDocument();
  });
});

test("clicking Back calls onBack", async () => {
  const onBack = jest.fn();
  render(<LiveDraft league={league} onBack={onBack} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByText("← Back"));
  fireEvent.click(screen.getByText("← Back"));
  expect(onBack).toHaveBeenCalledTimes(1);
});

test("renders Draft Log sidebar", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/Draft Log/i)).toBeInTheDocument();
  });
});

test("renders empty picks message in Draft Log initially", async () => {
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/No picks yet/i)).toBeInTheDocument();
  });
});

test("renders team name when teams are loaded from API", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "The Ballers" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("The Ballers")).toBeInTheDocument();
  });
});

test("mode buttons appear when teams are loaded", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LiveDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getByRole("button", { name: "Pre-Draft" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Simulation" })).toBeInTheDocument();
  });
});