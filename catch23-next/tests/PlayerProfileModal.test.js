import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { PlayerProfileModal } from "../src/components/PlayerProfileModal";
import { getUser, updatePlayerNotes } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getUser: jest.fn(),
  updatePlayerNotes: jest.fn(),
}));

const mockPlayer = {
  id: 42,
  mlbID: 660271,
  username: "Aaron Judge",
  team: "NYY",
  role: "OUTFIELD",
  depth: "1",
  stats: {
    PA: 696, AB: 581, R: 96, H: 155, HR: 58, RBI: 144,
    BB: 111, K: 175, SB: 10, CS: 2, AVG: 0.267, OBP: 0.373,
    G: 0, GS: 0, W: 0, SV: 0, IP: 0, ER: 0, SO: 0, ERA: 0, WHIP: 0, BF: 0, PO: 0,
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  getUser.mockResolvedValue({ data: { playerNotes: [] } });
  updatePlayerNotes.mockResolvedValue({});
  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => "123") },
    writable: true,
  });
});

test("renders nothing when isOpen is false", () => {
  const { container } = render(
    <PlayerProfileModal isOpen={false} onClose={jest.fn()} player={mockPlayer} />
  );
  expect(container.firstChild).toBeNull();
});

test("renders player name when open", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
});

test("renders player team and role", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText(/NYY/)).toBeInTheDocument();
  expect(screen.getByText(/OUTFIELD/)).toBeInTheDocument();
});

test("renders player depth when provided", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText(/Depth/i)).toBeInTheDocument();
});

test("renders HITTING section", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText("HITTING")).toBeInTheDocument();
});

test("renders PITCHING section", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText("PITCHING")).toBeInTheDocument();
});

test("renders SCOUT NOTES section", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByText("SCOUT NOTES")).toBeInTheDocument();
});

test("textarea is disabled when player has no id", () => {
  const playerNoId = { ...mockPlayer, id: null };
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={playerNoId} />);
  expect(screen.getByPlaceholderText(/scouting notes/i)).toBeDisabled();
});

test("textarea is enabled when player has an id", () => {
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  expect(screen.getByPlaceholderText(/scouting notes/i)).not.toBeDisabled();
});

test("loads existing note from API when opened", async () => {
  getUser.mockResolvedValue({
    data: { playerNotes: [{ playerId: 42, note: "Great power hitter" }] },
  });
  render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);
  await waitFor(() => {
    expect(screen.getByDisplayValue("Great power hitter")).toBeInTheDocument();
  });
});

test("clicking close button calls onClose", () => {
  const onClose = jest.fn();
  render(<PlayerProfileModal isOpen={true} onClose={onClose} player={mockPlayer} />);
  fireEvent.click(screen.getByText("✕"));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("clicking backdrop calls onClose", () => {
  const onClose = jest.fn();
  const { container } = render(
    <PlayerProfileModal isOpen={true} onClose={onClose} player={mockPlayer} />
  );
  const backdrop = container.querySelector(".pprof-backdrop");
  fireEvent.click(backdrop);
  expect(onClose).toHaveBeenCalledTimes(1);
});