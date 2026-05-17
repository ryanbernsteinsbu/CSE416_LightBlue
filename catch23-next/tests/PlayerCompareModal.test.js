import { render, screen, fireEvent } from "@testing-library/react";
import { PlayerCompareModal } from "../src/components/PlayerCompareModal";

const mockPlayers = [
  {
    id: 1,
    firstName: "Aaron",
    lastName: "Judge",
    team: "NYY",
    pos: "OF",
    depth: "1",
    stats: { HR: 58, RBI: 144, AVG: 0.267, ERA: 0, WHIP: 0 },
  },
  {
    id: 2,
    firstName: "Shohei",
    lastName: "Ohtani",
    team: "LAD",
    pos: "DH",
    depth: "1",
    stats: { HR: 44, RBI: 95, AVG: 0.304, ERA: 3.14, WHIP: 1.06 },
  },
];

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders empty state when no players are selected", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={[]} onRemove={jest.fn()} onClose={jest.fn()} mode={null} />
  );
  expect(screen.getByText(/Start comparing/i)).toBeInTheDocument();
});

test("renders player cards when players are provided", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={mockPlayers} onRemove={jest.fn()} onClose={jest.fn()} mode={null} />
  );
  expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
  expect(screen.getByText("Shohei Ohtani")).toBeInTheDocument();
});

test("renders COMPARE header", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={[]} onRemove={jest.fn()} onClose={jest.fn()} mode={null} />
  );
  expect(screen.getByText("COMPARE")).toBeInTheDocument();
});

test("renders count badge with selected player count", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={mockPlayers} onRemove={jest.fn()} onClose={jest.fn()} mode={null} />
  );
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("does not render count badge when no players selected", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={[]} onRemove={jest.fn()} onClose={jest.fn()} mode={null} />
  );
  expect(screen.queryByText(/^[0-9]+$/)).not.toBeInTheDocument();
});

test("clicking remove button on a card calls onRemove with player id", () => {
  const onRemove = jest.fn();

  render(
    <PlayerCompareModal
      isOpen={true}
      selected={mockPlayers}
      onRemove={onRemove}
      onClose={jest.fn()}
      mode={null}
    />
  );

  const cardRemoveButtons = document.querySelectorAll(".cmp-card-remove");

  fireEvent.click(cardRemoveButtons[0]);

  expect(onRemove).toHaveBeenCalledWith(1);
});

test("clicking close (✕) header button calls onClose", () => {
  const onClose = jest.fn();

  render(
    <PlayerCompareModal
      isOpen={true}
      selected={[]}
      onRemove={jest.fn()}
      onClose={onClose}
      mode={null}
    />
  );

  const closeBtn = document.querySelector(".cmp-close");

  fireEvent.click(closeBtn);

  expect(onClose).toHaveBeenCalledTimes(1);
});

test("hides HITTING section in pitching mode", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={[mockPlayers[0]]} onRemove={jest.fn()} onClose={jest.fn()} mode="pitching" />
  );
  expect(screen.queryByText("HITTING")).not.toBeInTheDocument();
  expect(screen.getByText("PITCHING")).toBeInTheDocument();
});

test("hides PITCHING section in hitting mode", () => {
  render(
    <PlayerCompareModal isOpen={true} selected={[mockPlayers[0]]} onRemove={jest.fn()} onClose={jest.fn()} mode="hitting" />
  );
  expect(screen.getByText("HITTING")).toBeInTheDocument();
  expect(screen.queryByText("PITCHING")).not.toBeInTheDocument();
});