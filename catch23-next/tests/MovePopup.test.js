import { render, screen, fireEvent } from "@testing-library/react";
import { MovePopup } from "../src/components/Movepopup";

jest.mock("../src/components/PositionPlayersModal", () => ({
  playerMatchesRowPosition: jest.fn(() => true),
}));

const POSITIONS = ["C", "1B", "OF", "P"];

const teams = [
  {
    id: 1,
    name: "Team Alpha",
    rows: [
      { player: "John Smith", player_id: 10, price: "30", season: "2025" },
      { player: "Mike Jones", player_id: 11, price: "20", season: "2025" },
      { player: "", player_id: null, price: "", season: "" },
      { player: "", player_id: null, price: "", season: "" },
    ],
  },
  {
    id: 2,
    name: "Team Beta",
    rows: [
      { player: "", player_id: null, price: "", season: "" },
      { player: "", player_id: null, price: "", season: "" },
      { player: "", player_id: null, price: "", season: "" },
      { player: "", player_id: null, price: "", season: "" },
    ],
  },
];

const movePopup = {
  fromTeamId: 1,
  fromRowIndex: 0,
  player: "John Smith",
  player_id: 10,
  season: "2025",
  price: "30",
  playerObj: { playablePositions: ["CATCHER"] },
};

const remainingBudgets = { 1: 210, 2: 260 };

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders the player name in the title", () => {
  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={jest.fn()}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );
  expect(screen.getByText("John Smith")).toBeInTheDocument();
});

test("renders Destination Team selector with team names", () => {
  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={jest.fn()}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );
  expect(screen.getByText(/Team Alpha/)).toBeInTheDocument();
  expect(screen.getByText(/Team Beta/)).toBeInTheDocument();
});

test("marks source team as same team in selector", () => {
  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={jest.fn()}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );
  expect(screen.getByText(/same team/i)).toBeInTheDocument();
});

test("clicking Cancel calls onClose", () => {
  const onClose = jest.fn();
  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={onClose}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );
  fireEvent.click(screen.getByText("Cancel"));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("clicking Move calls onConfirm with destination team and row", () => {
  const onConfirm = jest.fn();

  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={onConfirm}
      onClose={jest.fn()}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: /Move/i }));

  expect(onConfirm).toHaveBeenCalledTimes(1);
  expect(onConfirm).toHaveBeenCalledWith(2, 0);
});

test("shows over-budget warning when move exceeds remaining budget", () => {
  const tightBudgets = { 1: 210, 2: 5 }; // Team Beta only has $5 left
  render(
    <MovePopup
      movePopup={{ ...movePopup, price: "30" }} // $30 > $5
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={jest.fn()}
      remainingBudgets={tightBudgets}
      budget={260}
    />
  );
  expect(screen.getByText(/over budget/i)).toBeInTheDocument();
});

test("Move button is disabled when no compatible slots exist", () => {
  const { playerMatchesRowPosition } = require("../src/components/PositionPlayersModal");
  playerMatchesRowPosition.mockReturnValue(false);

  render(
    <MovePopup
      movePopup={movePopup}
      teams={teams}
      POSITIONS={POSITIONS}
      onConfirm={jest.fn()}
      onClose={jest.fn()}
      remainingBudgets={remainingBudgets}
      budget={260}
    />
  );

  expect(screen.getByRole("button", { name: /Move/i })).toBeDisabled();
});
