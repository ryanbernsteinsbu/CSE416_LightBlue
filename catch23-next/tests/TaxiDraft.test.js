import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaxiDraft from "../src/components/TaxiDraft";
import {
  getLeagueTeams,
  getAllPlayers,
  getTeamTaxiPicks,
  getTeamDraftPicks,
  createTeam,
  deleteTeam,
  saveTaxiPicks,
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getLeagueTeams: jest.fn(),
  getAllPlayers: jest.fn(),
  getTeamTaxiPicks: jest.fn(),
  getTeamDraftPicks: jest.fn(),
  createTeam: jest.fn(),
  deleteTeam: jest.fn(),
  saveTaxiPicks: jest.fn(),
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

jest.mock("../src/components/PlayerProfileModal", () => ({
  PlayerProfileModal: () => null,
}));

const league = {
  id: 1,
  title: "Taxi League",
  format: "Auction",
  season: "2025",
  status: "ACTIVE",
  draftSettings: { budget: 260 },
  rosterSettings: { numTaxi: 3 },
};

const draftedLeague = { ...league, status: "DRAFTED" };

beforeEach(() => {
  jest.clearAllMocks();
  getLeagueTeams.mockResolvedValue({ data: [] });
  getAllPlayers.mockResolvedValue({ data: [] });
  getTeamTaxiPicks.mockResolvedValue({ data: [] });
  getTeamDraftPicks.mockResolvedValue({ data: [] });
  saveTaxiPicks.mockResolvedValue({});
});

test("renders TAXI DRAFT MODE banner for active league", async () => {
  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/TAXI DRAFT MODE/i)).toBeInTheDocument();
  });
});

test("renders COMPLETE YOUR TAXI DRAFT banner for drafted league", async () => {
  render(<TaxiDraft league={draftedLeague} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/COMPLETE YOUR TAXI DRAFT/i)).toBeInTheDocument();
  });
});

test("renders empty state when no teams", async () => {
  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/No teams yet/i)).toBeInTheDocument();
  });
});

test("renders Add Team button for active league", async () => {
  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getAllByRole("button", { name: "+ Add Team" }).length).toBeGreaterThan(0);
  });
});

test("renders team name when loaded from API", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Taxi Team Alpha" }] });
  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("Taxi Team Alpha")).toBeInTheDocument();
  });
});

test("renders slot numbers for numTaxi rows", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });

  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  await waitFor(() => {
    expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3").length).toBeGreaterThan(0);
  });
});

test("clicking Add Team calls createTeam", async () => {
  createTeam.mockResolvedValue({ data: { id: 20, name: "Team 1" } });

  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

  const addButtons = await screen.findAllByRole("button", { name: "+ Add Team" });
  fireEvent.click(addButtons[0]);

  await waitFor(() => {
    expect(createTeam).toHaveBeenCalledWith("Team 1", league.id);
  });
});

test("clicking Save calls saveTaxiPicks", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  render(<TaxiDraft league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => screen.getByText("💾 Save"));
  fireEvent.click(screen.getByText("💾 Save"));
  await waitFor(() => {
    expect(saveTaxiPicks).toHaveBeenCalledTimes(1);
  });
});

test("Complete Taxi Draft button is visible for drafted league", async () => {
  getLeagueTeams.mockResolvedValue({ data: [{ id: 5, name: "Team A" }] });
  render(<TaxiDraft league={draftedLeague} onBack={jest.fn()} onModeChange={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText(/Complete Taxi Draft/i)).toBeInTheDocument();
  });
});

test("does not show toolbar Add Team button for drafted league", async () => {
  const { container } = render(
    <TaxiDraft league={draftedLeague} onBack={jest.fn()} onModeChange={jest.fn()} />
  );

  await waitFor(() => {
    const toolbarAddButton = container.querySelector(".db-toolbar-left .db-tool-btn.db-tool-primary");
    expect(toolbarAddButton).not.toBeInTheDocument();
  });
});