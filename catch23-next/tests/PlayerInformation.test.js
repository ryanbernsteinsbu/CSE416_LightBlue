import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PlayerInformation from "../src/components/PlayerInformation";
import { queryPlayers } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  queryPlayers: jest.fn(),
  getAllPlayers: jest.fn(),
}));

jest.mock("../src/components/PlayerProfileModal", () => ({
  PlayerProfileModal: ({ isOpen, player, onClose }) =>
    isOpen ? (
      <div data-testid="player-profile-modal">
        <span>{player?.username}</span>
        <button onClick={onClose}>Close Profile</button>
      </div>
    ) : null,
}));

jest.mock("../src/components/PlayerCompareModal", () => ({
  PlayerCompareModal: ({ isOpen }) =>
    isOpen ? <div data-testid="compare-modal">Compare Modal</div> : null,
}));

const mockPlayers = [
  {
    id: 1,
    firstName: "Aaron",
    lastName: "Judge",
    realTeam: "NYY",
    playablePositions: ["OUTFIELD"],
    age: 31,
    depth: "1",
    lastYearStats: { HR: 58, RBI: 144, SB: 10, AVG: 0.267, R: 96 },
  },
  {
    id: 2,
    firstName: "Mookie",
    lastName: "Betts",
    realTeam: "LAD",
    playablePositions: ["OUTFIELD"],
    age: 31,
    depth: "1",
    lastYearStats: { HR: 23, RBI: 75, SB: 14, AVG: 0.307, R: 91 },
  },
];

beforeEach(() => {
  jest.clearAllMocks();
  queryPlayers.mockResolvedValue({
    data: { players: mockPlayers, total: 2 },
  });
});

test("renders Player Information heading", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Player Information")).toBeInTheDocument();
  });
});

test("renders player names after loading", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
    expect(screen.getByText("Mookie Betts")).toBeInTheDocument();
  });
});

test("renders loading state before data arrives", () => {
  queryPlayers.mockImplementation(() => new Promise(() => {}));
  render(<PlayerInformation />);
  expect(screen.getByText(/Loading players/i)).toBeInTheDocument();
});

test("shows No results when players array is empty", async () => {
  queryPlayers.mockResolvedValue({ data: { players: [], total: 0 } });
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText(/No results/i)).toBeInTheDocument();
  });
});

test("opens player profile modal on player name click", async () => {
  render(<PlayerInformation />);
  await waitFor(() => screen.getByText("Aaron Judge"));
  fireEvent.click(screen.getByText("Aaron Judge"));
  await waitFor(() => {
    expect(screen.getByTestId("player-profile-modal")).toBeInTheDocument();
  });
});

test("renders filter inputs for Player, Team, and Position", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByPlaceholderText("Player")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Team")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Position")).toBeInTheDocument();
  });
});

test("calls queryPlayers when filter changes", async () => {
  render(<PlayerInformation />);
  await waitFor(() => screen.getByPlaceholderText("Player"));
  fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "judge" } });
  await waitFor(() => {
    expect(queryPlayers).toHaveBeenCalledWith(
      "judge",
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything()
    );
  });
});

test("Clear button resets filters", async () => {
  render(<PlayerInformation />);
  await waitFor(() => screen.getByPlaceholderText("Player"));
  fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "judge" } });
  fireEvent.click(screen.getByText("Clear"));
  expect(screen.getByPlaceholderText("Player").value).toBe("");
});

test("renders Hitting and Pitching tab buttons", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Hitting")).toBeInTheDocument();
    expect(screen.getByText("Pitching")).toBeInTheDocument();
  });
});

test("renders Minors tab button", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Minors")).toBeInTheDocument();
  });
});

test("renders Compare tab button", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Compare")).toBeInTheDocument();
  });
});

test("opens compare modal when Compare tab is clicked", async () => {
  render(<PlayerInformation />);
  await waitFor(() => screen.getByText("Compare"));
  fireEvent.click(screen.getByText("Compare"));
  await waitFor(() => {
    expect(screen.getByTestId("compare-modal")).toBeInTheDocument();
  });
});

test("renders pagination info with player count", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText(/of/i)).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

test("renders Rows selector with options", async () => {
  render(<PlayerInformation />);
  await waitFor(() => {
    expect(screen.getByText("Rows")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});