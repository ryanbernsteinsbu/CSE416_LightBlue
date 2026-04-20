import { render, screen, fireEvent, act } from "@testing-library/react";
import { PlayerProfileModal } from "@/components/PlayerProfileModal";

test("renders nothing when isOpen is false", () => {
    render(<PlayerProfileModal isOpen={false} onClose={jest.fn()} player={null} />);

    expect(screen.queryByText("PLAYER PROFILE")).not.toBeInTheDocument();
})

test("renders the modal when isOpen is true", () => {
    render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={null} />);
    expect(screen.getByText("PLAYER PROFILE")).toBeInTheDocument();
})

const mockPlayer = {
    username: "Shohei Ohtani",
    team: "Dodgers",
    role: "SP",
    stats: {
        HR: 44, RBI: 102, SB: 20, R: 98, AVG: ".310", OBP: ".390",
        W: 10, SV: 0, K: 167, ERA: "3.14", WHIP: "1.05",
    },
};

test("displays player name, team and role", () => {
    render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);

    expect(screen.getByText("Shohei Ohtani")).toBeInTheDocument();
    expect(screen.getByText("Dodgers · SP")).toBeInTheDocument();
});

test("displays hitting and pitching stats", () => {
    render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={mockPlayer} />);

    expect(screen.getByText("HR (Home Runs)")).toBeInTheDocument();
    expect(screen.getByText("44")).toBeInTheDocument();
    expect(screen.getByText("ERA (Earned Run Average)")).toBeInTheDocument();
    expect(screen.getByText("3.14")).toBeInTheDocument();
});

test("shows temp text when player is null", () => {
    render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={null}/> );

    expect(screen.getByText("PLAYER")).toBeInTheDocument();
});

test("shows dash for missing stat values", () => {
    const playerGaps = {
        username: "Test Guy",
        role: "2B",
        stats: { HR: null, RBI: undefined, SB: 5 },
    };

    render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={playerGaps}/> );

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getAllByText("—").length).toBeGreaterThan(0);
});

test("calls onClose when x is clicked", () => {
    const onClose = jest.fn();
    render(<PlayerProfileModal isOpen={true} onClose={onClose} player={null}/> );

    fireEvent.click(screen.getByText("✕"));

    expect(onClose).toHaveBeenCalledTimes(1);
});

test("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    const {container} = render(<PlayerProfileModal isOpen={true} onClose={onClose} player={null} />);

    const backdrop = container.querySelector(".pprof-backdrop");
    fireEvent.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
});

test("adds pprof-visible class after modal opens", async () => {
    jest.useFakeTimers();
    const {container} = render(<PlayerProfileModal isOpen={true} onClose={jest.fn()} player={null} />);

    const panel = container.querySelector(".pprof-panel");
    expect(panel).not.toHaveClass("pprof-visible");

    act(() => jest.advanceTimersByTime(10));
    expect(panel).toHaveClass("pprof-visible");
    jest.useRealTimers();
});
