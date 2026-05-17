import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PreDraftBoard from "../src/components/PreDraftBoard";
import {
  getLeagueTeams,
  getAllPlayers,
  getTeamDraftPicks,
  getTeamTaxiPicks,
  createTeam,
  deleteTeam,
  saveDraftPicks,
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getLeagueTeams: jest.fn(),
  getAllPlayers: jest.fn(),
  getTeamDraftPicks: jest.fn(),
  getTeamTaxiPicks: jest.fn(),
  createTeam: jest.fn(),
  deleteTeam: jest.fn(),
  saveDraftPicks: jest.fn(),
}));

jest.mock("../src/components/ConfirmDeleteModal", () => ({ isOpen, onConfirm, onCancel, leagueName }) =>
  isOpen ? (
    <div>
      <span data-testid="delete-modal">{leagueName}</span>
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

jest.mock("../src/components/MovePopup", () => ({
  MovePopup: ({ onClose }) => (
    <div data-testid="move-popup">
      <button onClick={onClose}>Close Move</button>
    </div>
  ),
}));

const league = {
  id: 1,
  title: "Pre Draft League",
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
  getTeamTaxiPicks.mockResolvedValue({ data: [] });
  saveDraftPicks.mockResolvedValue({});
});

test("renders PRE-DRAFT MODE banner", async () => {
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/PRE-DRAFT MODE/i)).toBeInTheDocument();
  });
});

test("renders the league title", async () => {
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Pre Draft League")).toBeInTheDocument();
  });
});

test("renders empty state when no teams", async () => {
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/No teams yet/i)).toBeInTheDocument();
  });
});

test("clicking Back calls onBack", async () => {
  const onBack = jest.fn();
  render(<PreDraftBoard league={league} onBack={onBack} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByText("← Back"));
  fireEvent.click(screen.getByText("← Back"));
  expect(onBack).toHaveBeenCalledTimes(1);
});

test("clicking Add Team calls createTeam", async () => {
  createTeam.mockResolvedValue({ data: { id: 10, name: "Team 1" } });

  render(
    <PreDraftBoard
      league={league}
      onBack={jest.fn()}
      onModeChange={jest.fn()}
      onLeagueUpdate={jest.fn()}
    />
  );

  const addButtons = await screen.findAllByRole("button", { name: "+ Add Team" });
  fireEvent.click(addButtons[0]);

  await waitFor(() => {
    expect(createTeam).toHaveBeenCalledWith("Team 1", league.id);
  });
});

test("renders team name after team is loaded from API", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "The Sluggers" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("The Sluggers")).toBeInTheDocument();
  });
});

test("renders position rows in the table", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("C")).toBeInTheDocument();
    expect(screen.getByText("1B")).toBeInTheDocument();
    expect(screen.getByText("P")).toBeInTheDocument();
  });
});

test("renders budget display when team is loaded", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/left/i)).toBeInTheDocument();
  });
});

test("delete button opens confirm modal with team name", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(
    <PreDraftBoard
      league={league}
      onBack={jest.fn()}
      onModeChange={jest.fn()}
      onLeagueUpdate={jest.fn()}
    />
  );

  await waitFor(() => screen.getByTitle("Remove team"));
  fireEvent.click(screen.getByTitle("Remove team"));

  await waitFor(() => {
    const modal = screen.getByTestId("delete-modal");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent("Team A");
  });
});

test("confirming delete calls deleteTeam", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  deleteTeam.mockResolvedValue({});
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByTitle("Remove team"));
  fireEvent.click(screen.getByTitle("Remove team"));
  await waitFor(() => screen.getByText("Delete"));
  fireEvent.click(screen.getByText("Delete"));
  await waitFor(() => {
    expect(deleteTeam).toHaveBeenCalledWith(5);
  });
});

test("Undo button is disabled initially", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByText(/Undo/));
  expect(screen.getByText(/Undo/).closest("button")).toBeDisabled();
});

test("Redo button is disabled initially", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByText(/Redo/));
  expect(screen.getByText(/Redo/).closest("button")).toBeDisabled();
});

test("clicking Save Draft calls saveDraftPicks", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  render(<PreDraftBoard league={league} onBack={jest.fn()} onModeChange={jest.fn()} onLeagueUpdate={jest.fn()} />);
  await waitFor(() => screen.getByText(/Save Draft/i));
  fireEvent.click(screen.getByText(/Save Draft/i));
  await waitFor(() => {
    expect(saveDraftPicks).toHaveBeenCalledTimes(1);
  });
});