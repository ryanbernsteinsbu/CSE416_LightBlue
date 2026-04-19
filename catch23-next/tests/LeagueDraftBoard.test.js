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

// --- Mocks ---

jest.mock("../src/lib/api", () => ({
  createTeam: jest.fn(),
  getLeagueTeams: jest.fn(),
  deleteTeam: jest.fn(),
  getAllPlayers: jest.fn(),
  saveDraftPicks: jest.fn(),
  getTeamDraftPicks: jest.fn(),
}));

jest.mock("../src/components/ConfirmDeleteModal", () => {
  return function MockConfirmDeleteModal({ isOpen, leagueName, onCancel, onConfirm }) {
    if (!isOpen) return null;
    return (
      <div data-testid="confirm-delete-modal">
        <span>{leagueName}</span>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    );
  };
});

jest.mock("../src/components/PositionPlayersModal", () => ({
  PositionPlayersModal: function MockPositionPlayersModal({ isOpen, onClose, position }) {
    if (!isOpen) return null;
    return (
      <div data-testid="position-players-modal">
        <span>{position}</span>
        <button onClick={onClose}>Close</button>
      </div>
    );
  },
  playerMatchesRowPosition: jest.fn(() => true),
}));

// --- Test Data ---

const mockLeague = {
  id: 1,
  title: "Test League",
  format: "Auction",
  season: "2024",
  rosterSettings: {
    numCatchers: 1,
    numFirstBase: 1,
    numSecondBase: 1,
    numThirdBase: 1,
    numShortstop: 1,
    numCornerInfield: 0,
    numMiddleInfield: 0,
    numOutfield: 1,
    numUtility: 0,
    numPitchers: 1,
  },
  draftSettings: {
    budget: 260,
  },
};

const mockTeam = { id: 1, name: "Team 1" };

const mockPlayers = [
  { id: 101, firstName: "Mike", lastName: "Trout", playablePositions: ["OF"] },
  { id: 102, firstName: "Mookie", lastName: "Betts", playablePositions: ["OF"] },
];

const mockOnBack = jest.fn();

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => "123") },
    writable: true,
  });

  // Mock crypto.randomUUID which jsdom may not support
  Object.defineProperty(global, "crypto", {
    value: { randomUUID: () => "mock-uuid-1234" },
    writable: true,
  });

  jest.clearAllMocks();

  getLeagueTeams.mockResolvedValue({ data: [] });
  getAllPlayers.mockResolvedValue({ data: mockPlayers });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  createTeam.mockResolvedValue({ data: { id: 99, name: "Team 1" } });
  deleteTeam.mockResolvedValue({});
  saveDraftPicks.mockResolvedValue({});
});

// --- Render Tests ---

test("renders league title and meta info", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(screen.getByText("Test League")).toBeInTheDocument();
    expect(screen.getByText(/Auction/)).toBeInTheDocument();
    expect(screen.getByText(/2024 SEASON/)).toBeInTheDocument();
  });
});

test("renders empty state when no teams exist", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(screen.getByText("No teams yet")).toBeInTheDocument();
  });
});

test("renders Back button", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);
  expect(screen.getByText("← Back")).toBeInTheDocument();
});

test("clicking Back button calls onBack", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);
  fireEvent.click(screen.getByText("← Back"));
  expect(mockOnBack).toHaveBeenCalled();
});

// --- Load Teams Tests ---

test("loads and displays existing teams on mount", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(screen.getByText("Team 1")).toBeInTheDocument();
  });
});

test("calls getLeagueTeams with correct league id on mount", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(getLeagueTeams).toHaveBeenCalledWith(mockLeague.id);
  });
});

test("calls getAllPlayers on mount", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(getAllPlayers).toHaveBeenCalled();
  });
});

test("shows team budget remaining when budget is set", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(screen.getByText(/\$260 left/)).toBeInTheDocument();
  });
});

// --- Add Team Tests ---

test("clicking Add Team creates a new team", async () => {
  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => {
    expect(screen.getByText("No teams yet")).toBeInTheDocument();
  });

  fireEvent.click(screen.getAllByText("+ Add Team")[0]);

  await waitFor(() => {
    expect(createTeam).toHaveBeenCalled();
  });
});

// --- Delete Team Tests ---

test("clicking × on a team opens the confirm delete modal", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("Team 1"));

  fireEvent.click(screen.getByTitle("Remove team"));

  expect(screen.getByTestId("confirm-delete-modal")).toBeInTheDocument();
});

test("cancelling delete modal closes it without deleting", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("Team 1"));
  fireEvent.click(screen.getByTitle("Remove team"));
  fireEvent.click(screen.getByText("Cancel"));

  expect(screen.queryByTestId("confirm-delete-modal")).not.toBeInTheDocument();
  expect(deleteTeam).not.toHaveBeenCalled();
});

test("confirming delete calls deleteTeam and removes team", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("Team 1"));
  fireEvent.click(screen.getByTitle("Remove team"));
  fireEvent.click(screen.getByText("Confirm"));

  await waitFor(() => {
    expect(deleteTeam).toHaveBeenCalledWith(mockTeam.id);
    expect(screen.queryByText("Team 1")).not.toBeInTheDocument();
  });
});

// --- Save Draft Tests ---

test("clicking Save Draft calls saveDraftPicks", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("💾 Save Draft"));

  fireEvent.click(screen.getByText("💾 Save Draft"));

  await waitFor(() => {
    expect(saveDraftPicks).toHaveBeenCalled();
  });
});

test("shows save banner after successful save", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("💾 Save Draft"));
  fireEvent.click(screen.getByText("💾 Save Draft"));

  await waitFor(() => {
    expect(screen.getByText(/Draft saved/)).toBeInTheDocument();
  });
});

// --- Position Modal Tests ---

test("clicking a position cell opens the position players modal", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("Team 1"));

  fireEvent.click(screen.getByText("C"));

  expect(screen.getByTestId("position-players-modal")).toBeInTheDocument();
});

test("closing the position players modal hides it", async () => {
  getLeagueTeams.mockResolvedValue({ data: [mockTeam] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });

  render(<LeagueDraftBoard league={mockLeague} onBack={mockOnBack} />);

  await waitFor(() => screen.getByText("Team 1"));
  fireEvent.click(screen.getByText("C"));
  fireEvent.click(screen.getByText("Close"));

  expect(screen.queryByTestId("position-players-modal")).not.toBeInTheDocument();
});