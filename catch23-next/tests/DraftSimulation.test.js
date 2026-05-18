import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DraftSimulation from "../src/components/DraftSimulation";
import { getLeagueTeams, getAllPlayers, getTeamDraftPicks } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getLeagueTeams: jest.fn(),
  getAllPlayers: jest.fn(),
  getTeamDraftPicks: jest.fn(),
}));

jest.mock("../src/components/PositionPlayersModal", () => ({
  PositionPlayersModal: () => null,
  playerMatchesRowPosition: jest.fn(() => true),
}));

jest.mock("../src/components/PlayerProfileModal", () => ({
  PlayerProfileModal: () => null,
}));

const league = {
  id: 1,
  title: "Sim League",
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
  getLeagueTeams.mockResolvedValue({ data: [{ id: 10, name: "Team Alpha" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  getAllPlayers.mockResolvedValue({ data: [] });

  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => null), setItem: jest.fn() },
    writable: true,
  });
});

test("renders DRAFT SIMULATION MODE banner", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("DRAFT SIMULATION MODE")).toBeInTheDocument();
  });
});

test("renders the league title in the header", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Sim League")).toBeInTheDocument();
  });
});

test("clicking Back calls onBack", async () => {
  const onBack = jest.fn();
  render(<DraftSimulation league={league} onBack={onBack} onModeChange={jest.fn()} />);
  await waitFor(() => screen.getByText("← Back"));
  fireEvent.click(screen.getByText("← Back"));
  expect(onBack).toHaveBeenCalledTimes(1);
});

test("renders Save Simulation button", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByRole("button", { name: /Save Simulation/i })).toBeInTheDocument();
  });
});

test("Undo button is disabled initially", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByRole("button", { name: /Undo/i })).toBeDisabled();
  });
});

test("Redo button is disabled initially", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByRole("button", { name: /Redo/i })).toBeDisabled();
  });
});

test("renders Remaining stat label in header", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Remaining")).toBeInTheDocument();
  });
});

test("renders Open stat label in header", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Open")).toBeInTheDocument();
  });
});

// "Targets" appears in both the header stat label AND the sidebar section title —
// use getAllByText to handle both and assert at least one is present.
test("renders Targets stat label", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getAllByText(/Targets/i).length).toBeGreaterThan(0);
  });
});

test("renders Simulation Summary sidebar header", async () => {
  render(<DraftSimulation league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/Simulation Summary/i)).toBeInTheDocument();
  });
});

