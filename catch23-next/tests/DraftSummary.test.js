import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DraftSummary from "../src/components/DraftSummary";
import { getLeagueTeams, getTeamDraftPicks, getTeamTaxiPicks } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
    getLeagueTeams: jest.fn(),
    getTeamDraftPicks: jest.fn(),
    getTeamTaxiPicks: jest.fn(),
}));

const league = {
    id: 1,
    title: "Finals League",
    format: "Auction",
    season: "2025",
    status: "DRAFTED",
    draftSettings: { budget: 260 },
    rosterSettings: {
        numCatchers: 1,
        numFirstBase: 1,
        numSecondBase: 0,
        numThirdBase: 0,
        numShortstop: 0,
        numCornerInfield: 0,
        numMiddleInfield: 0,
        numOutfield: 1,
        numUtility: 0,
        numPitchers: 1,
        numTaxi: 0,
    },
};

beforeEach(() => {
    jest.clearAllMocks();

    getLeagueTeams.mockResolvedValue({
        data: [
            { id: 1, name: "Team Alpha" },
            { id: 2, name: "Team Beta" },
        ],
    });

    getTeamDraftPicks.mockImplementation((teamId) => {
        if (teamId === 1) {
            return Promise.resolve({
                data: [
                    {
                        slotIndex: 0,
                        rosterPosition: "CATCHER",
                        player: { firstName: "John", lastName: "Smith" },
                        player_id: 101,
                        season: "2025",
                        cost: "35",
                        draft_time: "1:00 PM",
                    },
                ],
            });
        }

        return Promise.resolve({ data: [] });
    });

    getTeamTaxiPicks.mockResolvedValue({ data: [] });
});

test("shows loading state initially", () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders DRAFT COMPLETE banner after loading", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getByText(/DRAFT COMPLETE/i)).toBeInTheDocument();
    });
});

test("renders the league title in the header", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getByText("Finals League")).toBeInTheDocument();
    });
});

test("renders team cards for each loaded team", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);

    await waitFor(() => {
        const alphaMatches = screen.getAllByText("Team Alpha");
        const betaMatches = screen.getAllByText("Team Beta");

        expect(alphaMatches.some(el => el.className.includes("ds-team-card-name"))).toBe(true);
        expect(betaMatches.some(el => el.className.includes("ds-team-card-name"))).toBe(true);
    });
});

test("renders player name in a team card", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getAllByText("John Smith").length).toBeGreaterThan(0);
    });
});

test("clicking Home button calls onBack", async () => {
    const onBack = jest.fn();
    render(<DraftSummary league={league} onBack={onBack} onModeChange={jest.fn()} />);
    await waitFor(() => screen.getByText("← Home"));
    fireEvent.click(screen.getByText("← Home"));
    expect(onBack).toHaveBeenCalledTimes(1);
});

test("renders Teams stat in header", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getByText("Teams")).toBeInTheDocument();
    });
});

test("renders Edit in Pre-Draft mode button", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getByText(/Edit in Pre-Draft/i)).toBeInTheDocument();
    });
});

test("clicking Edit in Pre-Draft calls onModeChange with predraft", async () => {
    const onModeChange = jest.fn();
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={onModeChange} />);
    await waitFor(() => screen.getByText(/Edit in Pre-Draft/i));
    fireEvent.click(screen.getByText(/Edit in Pre-Draft/i));
    expect(onModeChange).toHaveBeenCalledWith("predraft");
});

test("renders Draft Order Timeline when there are draft-time picks", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getByText(/Draft Order Timeline/i)).toBeInTheDocument();
    });
});

test("renders price for the top pick", async () => {
    render(<DraftSummary league={league} onBack={jest.fn()} onModeChange={jest.fn()} />);
    await waitFor(() => {
        expect(screen.getAllByText(/\$35/).length).toBeGreaterThan(0);
    });
});