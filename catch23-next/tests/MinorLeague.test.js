import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MinorLeague from "../src/components/MinorLeague";
import { getLeagueTeams, getAllPlayers, createTeam, deleteTeam } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getLeagueTeams: jest.fn(),
  getAllPlayers: jest.fn(),
  createTeam: jest.fn(),
  deleteTeam: jest.fn(),
}));

// getMinorTable is fetched directly via fetch inside the component
global.fetch = jest.fn();

jest.mock("../src/components/ConfirmDeleteModal", () => ({ isOpen, onConfirm, onCancel, leagueName }) =>
  isOpen ? (
    <div>
      <span>{leagueName}</span>
      <button onClick={onConfirm}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  ) : null
);

const league = {
  id: 1,
  title: "Minor League",
  name: "Minor League",
  format: "Auction",
  season: "2025",
  status: "ACTIVE",
  rosterSettings: { numMinor: 5 },
};

beforeEach(() => {
  jest.clearAllMocks();
  getLeagueTeams.mockResolvedValue({ data: [] });
  getAllPlayers.mockResolvedValue({ data: [] });
  global.fetch.mockResolvedValue({
    ok: true,
    json: async () => ({ id: 99, numPlayers: 5, team_id: 1, players: [] }),
  });
});

test("renders MINOR LEAGUE DRAFT MODE banner", async () => {
  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/MINOR LEAGUE DRAFT MODE/i)).toBeInTheDocument();
  });
});

test("renders empty state when no teams", async () => {
  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/No teams yet/i)).toBeInTheDocument();
  });
});

test("renders Add Team button", async () => {
  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getAllByRole("button", { name: "+ Add Team" }).length).toBeGreaterThan(0);
  });
});

test("renders team when loaded from API", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 10, name: "Farm Team" }] });

  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getByText("Farm Team")).toBeInTheDocument();
  });
});

test("renders row numbers for each slot", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 10, name: "Farm Team" }] });

  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    expect(screen.getAllByText("5").length).toBeGreaterThan(0);
  });
});

test("Add Team button calls createTeam", async () => {
  createTeam.mockResolvedValue({ data: { id: 55, name: "Team 1" } });

  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  const addButtons = await screen.findAllByRole("button", { name: "+ Add Team" });
  fireEvent.click(addButtons[0]);

  await waitFor(() => {
    expect(createTeam).toHaveBeenCalledWith("Team 1", league.id);
  });
});

test("renders Save Draft button after team is loaded", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 10, name: "Farm Team" }] });

  render(<MinorLeague league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getByRole("button", { name: /Save Draft/i })).toBeInTheDocument();
  });
});