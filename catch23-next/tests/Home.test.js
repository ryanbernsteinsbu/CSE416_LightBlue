import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "../src/components/Home";

import {
  getUserLeagues,
  getLeagueTeams,
  deleteLeague
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getUserLeagues: jest.fn(),
  getLeagueTeams: jest.fn(),
  deleteLeague: jest.fn(),
}));

jest.mock("../src/components/LeagueDraftController", () => () => (
  <div>Mock Draft Controller</div>
));

jest.mock("../src/components/ConfirmDeleteModal", () => ({ isOpen, onConfirm, onCancel, leagueName }) =>
  isOpen ? (
    <div>
      <span>{leagueName}</span>
      <button onClick={onConfirm}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  ) : null
);

jest.mock("../src/components/CreateLeagueModal", () => ({ isOpen }) =>
  isOpen ? <div>Create League</div> : null
);

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "123"),
    },
    writable: true,
  });
  jest.clearAllMocks();
});

test("renders empty state when no leagues exist", async () => {
  getUserLeagues.mockResolvedValue({ data: [] });

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByText("No leagues yet.")).toBeInTheDocument();
  });
});

test("renders league cards", async () => {
  getUserLeagues.mockResolvedValue({
    data: [
      { id: 1, title: "Jackie Wackie", teamCount: 2, season: "2025", seasonNum: 3 },
    ],
  });

  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<Home />);

  expect(await screen.findByText("Jackie Wackie")).toBeInTheDocument();
  const seasonElements = screen.getAllByText(/2025/i);
  expect(seasonElements).toHaveLength(2);
  expect(screen.getByText("Season 3")).toBeInTheDocument();
});

test("opens create league modal when + button is clicked", async () => {
  getUserLeagues.mockResolvedValue({ data: [] });
  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<Home />);

  const createButton = screen.getByText("+");

  fireEvent.click(createButton);

  await waitFor(() => {
    expect(screen.getByText(/create league/i)).toBeInTheDocument();
  });
});

test("clicking a league card calls setActiveLeague", async () => {
  getUserLeagues.mockResolvedValue({
    data: [{ id: 1, title: "League A" }],
  });
  getLeagueTeams.mockResolvedValue({ data: [] });

  const setActiveLeague = jest.fn();
  render(<Home setActiveLeague={setActiveLeague} />);

  const leagueTitle = await screen.findByText("League A");
  fireEvent.click(leagueTitle);
  expect(setActiveLeague).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
});

test("renders draft controller when activeLeague is set", () => {
  render(<Home activeLeague={{ id: 1, title: "League A" }} setActiveLeague={jest.fn()} />);

  expect(screen.getByText("Mock Draft Controller")).toBeInTheDocument();
});

test("renders empty state when no user_id in localStorage", async () => {
  window.localStorage.getItem.mockReturnValue(null);
  render(<Home setActiveLeague={jest.fn()} />);
  await waitFor(() => {
    expect(screen.getByText("No leagues yet.")).toBeInTheDocument();
  });
});

test("clicking delete button opens confirm modal", async () => {
  getUserLeagues.mockResolvedValue({
    data: [{ id: 1, title: "League A" }],
  });
  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<Home setActiveLeague={jest.fn()} />);

  expect(screen.queryByText("Confirm")).not.toBeInTheDocument();

  const deleteBtn = await screen.findByLabelText("Remove league");
  fireEvent.click(deleteBtn);

  expect(await screen.findByText("Delete")).toBeInTheDocument();
  expect(screen.getByText("Cancel")).toBeInTheDocument();
});

test("confirming delete removes league from UI", async () => {
  getUserLeagues.mockResolvedValue({
    data: [{ id: 1, title: "League A" }],
  });

  getLeagueTeams.mockResolvedValue({ data: [] });
  deleteLeague.mockResolvedValue({});

  render(<Home />);

  const deleteBtn = await screen.findByLabelText("Remove league");
  fireEvent.click(deleteBtn);

  const confirmBtn = await screen.findByText(/Delete/i);
  fireEvent.click(confirmBtn);

  await waitFor(() => {
    expect(screen.queryByText("League A")).not.toBeInTheDocument();
  });
});