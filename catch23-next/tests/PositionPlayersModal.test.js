import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PositionPlayersModal, playerMatchesRowPosition } from "../src/components/PositionPlayersModal";
import { getRankedPlayers, getDynamicRankedPlayers } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getRankedPlayers: jest.fn(),
  getDynamicRankedPlayers: jest.fn(),
}));

const mockPlayers = [
  { id: 1, firstName: "Mike", lastName: "Trout", mlbPlayerId: 545361, realTeam: "LAA", playablePositions: ["OUTFIELD"], isHitter: true },
  { id: 2, firstName: "Shohei", lastName: "Ohtani", mlbPlayerId: 660271, realTeam: "LAD", playablePositions: ["OUTFIELD", "PITCHER"], isHitter: true },
];

const rankData = [
  { mlbPlayerId: 545361, rank: 2, cost: 45 },
  { mlbPlayerId: 660271, rank: 1, cost: 55 },
];

beforeEach(() => {
  jest.clearAllMocks();
  getRankedPlayers.mockResolvedValue({ data: rankData });
  getDynamicRankedPlayers.mockResolvedValue({ data: rankData });
});

// ── Component render tests ────────────────────────────────────────────────────

test("renders nothing when isOpen is false", () => {
  const { container } = render(
    <PositionPlayersModal isOpen={false} onClose={jest.fn()} position="OF" players={[]} draftedIds={new Set()} />
  );
  expect(container.firstChild).toBeNull();
});

test("renders TOP AVAILABLE header when open", async () => {
  render(
    <PositionPlayersModal isOpen={true} onClose={jest.fn()} position="OF" players={mockPlayers} draftedIds={new Set()} />
  );
  await waitFor(() => {
    expect(screen.getByText("TOP AVAILABLE")).toBeInTheDocument();
  });
});

test("renders OUTFIELDERS label for OF position", async () => {
  render(
    <PositionPlayersModal isOpen={true} onClose={jest.fn()} position="OF" players={mockPlayers} draftedIds={new Set()} />
  );
  await waitFor(() => {
    expect(screen.getByText("OUTFIELDERS")).toBeInTheDocument();
  });
});

test("renders CATCHERS label for C position", async () => {
  render(
    <PositionPlayersModal isOpen={true} onClose={jest.fn()} position="C" players={[]} draftedIds={new Set()} />
  );
  await waitFor(() => {
    expect(screen.getByText("CATCHERS")).toBeInTheDocument();
  });
});

test("renders PITCHERS label for P position", async () => {
  render(
    <PositionPlayersModal isOpen={true} onClose={jest.fn()} position="P" players={[]} draftedIds={new Set()} />
  );
  await waitFor(() => {
    expect(screen.getByText("PITCHERS")).toBeInTheDocument();
  });
});

test("renders empty state when no players provided", async () => {
  render(
    <PositionPlayersModal isOpen={true} onClose={jest.fn()} position="OF" players={[]} draftedIds={new Set()} />
  );
  await waitFor(() => {
    expect(screen.getByText(/No available players/i)).toBeInTheDocument();
  });
});

test("clicking close button calls onClose", async () => {
  const onClose = jest.fn();
  render(
    <PositionPlayersModal isOpen={true} onClose={onClose} position="OF" players={mockPlayers} draftedIds={new Set()} />
  );
  await waitFor(() => screen.getByText("✕"));
  fireEvent.click(screen.getByText("✕"));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("clicking backdrop calls onClose", async () => {
  const onClose = jest.fn();
  const { container } = render(
    <PositionPlayersModal isOpen={true} onClose={onClose} position="OF" players={mockPlayers} draftedIds={new Set()} />
  );
  const backdrop = container.querySelector(".ppm-backdrop");
  fireEvent.click(backdrop);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("renders ranked players by dynamic ranking when league is provided", async () => {
  const league = { id: 1, draftSettings: { budget: 260 } };
  render(
    <PositionPlayersModal
      isOpen={true}
      onClose={jest.fn()}
      position="OF"
      players={mockPlayers}
      draftedIds={new Set()}
      league={league}
    />
  );
  await waitFor(() => {
    expect(getDynamicRankedPlayers).toHaveBeenCalledWith(league);
  });
});

// ── playerMatchesRowPosition unit tests ───────────────────────────────────────

describe("playerMatchesRowPosition", () => {
  const player = (positions, isHitter = true) => ({ playablePositions: positions, isHitter });

  test("C matches CATCHER", () => {
    expect(playerMatchesRowPosition(player(["CATCHER"]), "C")).toBe(true);
  });
  test("C does not match OUTFIELD", () => {
    expect(playerMatchesRowPosition(player(["OUTFIELD"]), "C")).toBe(false);
  });
  test("1B matches FIRST", () => {
    expect(playerMatchesRowPosition(player(["FIRST"]), "1B")).toBe(true);
  });
  test("2B matches SECOND", () => {
    expect(playerMatchesRowPosition(player(["SECOND"]), "2B")).toBe(true);
  });
  test("3B matches THIRD", () => {
    expect(playerMatchesRowPosition(player(["THIRD"]), "3B")).toBe(true);
  });
  test("SS matches SHORTSTOP", () => {
    expect(playerMatchesRowPosition(player(["SHORTSTOP"]), "SS")).toBe(true);
  });
  test("OF matches OUTFIELD", () => {
    expect(playerMatchesRowPosition(player(["OUTFIELD"]), "OF")).toBe(true);
  });
  test("P matches PITCHER", () => {
    expect(playerMatchesRowPosition(player(["PITCHER"]), "P")).toBe(true);
  });
  test("U matches hitter (isHitter=true)", () => {
    expect(playerMatchesRowPosition(player([], true), "U")).toBe(true);
  });
  test("U does not match pitcher (isHitter=false)", () => {
    expect(playerMatchesRowPosition(player(["PITCHER"], false), "U")).toBe(false);
  });
  test("CI matches FIRST", () => {
    expect(playerMatchesRowPosition(player(["FIRST"]), "CI")).toBe(true);
  });
  test("CI matches THIRD", () => {
    expect(playerMatchesRowPosition(player(["THIRD"]), "CI")).toBe(true);
  });
  test("CI does not match OUTFIELD", () => {
    expect(playerMatchesRowPosition(player(["OUTFIELD"]), "CI")).toBe(false);
  });
  test("MI matches SECOND", () => {
    expect(playerMatchesRowPosition(player(["SECOND"]), "MI")).toBe(true);
  });
  test("MI matches SHORTSTOP", () => {
    expect(playerMatchesRowPosition(player(["SHORTSTOP"]), "MI")).toBe(true);
  });
  test("MI does not match FIRST", () => {
    expect(playerMatchesRowPosition(player(["FIRST"]), "MI")).toBe(false);
  });
  test("unknown row position returns false", () => {
    expect(playerMatchesRowPosition(player(["CATCHER"]), "XYZ")).toBe(false);
  });
  test("returns false for empty positions array", () => {
    expect(playerMatchesRowPosition(player([]), "1B")).toBe(false);
  });
});