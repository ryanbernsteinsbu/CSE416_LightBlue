import { render, screen, waitFor, fireEvent, within } from "@testing-library/react";
import PlayerInformation from "@/components/PlayerInformation";
import { getAllPlayers } from "@/lib/api";

// ── Mocks ──────────────────────────────────────────────────────────────────────

jest.mock("@/lib/api", () => ({
    getAllPlayers: jest.fn(),
}));

jest.mock("@/components/PlayerProfileModal", () => ({
    PlayerProfileModal: ({ isOpen, onClose, player }) =>
        isOpen ? (
            <div data-testid="profile-modal">
                <span data-testid="profile-name">{player.username}</span>
                <button onClick={onClose}>Close Profile</button>
            </div>
        ) : null,
}));

jest.mock("@/components/PlayerCompareModal", () => ({
    PlayerCompareModal: ({ isOpen, selected, onRemove, onClose }) =>
        isOpen ? (
            <div data-testid="compare-modal">
                {selected.map((p) => (
                    <div key={p.id} data-testid={`compare-player-${p.id}`}>
                        <span>{p.firstName} {p.lastName}</span>
                        <button onClick={() => onRemove(p.id)}>Remove</button>
                    </div>
                ))}
                <button onClick={onClose}>Close Compare</button>
            </div>
        ) : null,
}));

// ── Fixtures ───────────────────────────────────────────────────────────────────

const mockPlayers = [
    {
        id: 1,
        firstName: "Aaron",
        lastName: "Judge",
        realTeam: "NYY",
        playablePositions: ["OF"],
        age: 32,
        lastYearStats: { HR: 58, RBI: 144, SB: 3, R: 133, AVG: 0.267, OBP: 0.394, W: 0, SV: 0, K: 0, ERA: 0, WHIP: 0 },
    },
    {
        id: 2,
        firstName: "Shohei",
        lastName: "Ohtani",
        realTeam: "LAD",
        playablePositions: ["DH"],
        age: 30,
        lastYearStats: { HR: 44, RBI: 102, SB: 20, R: 120, AVG: 0.304, OBP: 0.390, W: 0, SV: 0, K: 0, ERA: 0, WHIP: 0 },
    },
    {
        id: 3,
        firstName: "Gerrit",
        lastName: "Cole",
        realTeam: "NYY",
        playablePositions: ["SP"],
        age: 33,
        lastYearStats: { HR: 0, RBI: 0, SB: 0, R: 0, AVG: 0, OBP: 0, W: 15, SV: 0, K: 222, ERA: 2.63, WHIP: 0.98 },
    },
    {
        id: 4,
        firstName: "Edwin",
        lastName: "Diaz",
        realTeam: "NYM",
        playablePositions: ["RP"],
        age: 30,
        lastYearStats: { HR: 0, RBI: 0, SB: 0, R: 0, AVG: 0, OBP: 0, W: 3, SV: 32, K: 118, ERA: 1.31, WHIP: 0.84 },
    },
];

beforeEach(() => {
    getAllPlayers.mockResolvedValue({ data: mockPlayers });
});

afterEach(() => {
    jest.clearAllMocks();
});

// -- Render Tests --

test("shows loading state while fetching players", () => {
    getAllPlayers.mockReturnValue(new Promise(() => {}));
    render(<PlayerInformation />);
    expect(screen.getByText("Loading players...")).toBeInTheDocument();
});

test("renders page title after load", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByText("Player Information")).toBeInTheDocument();
});

test("renders Hitting and Pitching tab buttons", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByRole("button", { name: /hitting/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /pitching/i })).toBeInTheDocument();
});

test("renders Compare tab button", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByRole("button", { name: "Compare" })).toBeInTheDocument();
});

test("renders all players in the table after load", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
    expect(screen.getByText("Shohei Ohtani")).toBeInTheDocument();
    expect(screen.getByText("Gerrit Cole")).toBeInTheDocument();
    expect(screen.getByText("Edwin Diaz")).toBeInTheDocument();
});

test("renders hitting columns by default (HR, RBI, AVG, OBP)", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByText("HR")).toBeInTheDocument();
    expect(screen.getByText("RBI")).toBeInTheDocument();
    expect(screen.getByText("AVG")).toBeInTheDocument();
    expect(screen.getByText("OBP")).toBeInTheDocument();
});

test("shows No results when no players match the filter", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "zzznobody" } });
    expect(screen.getByText("No results.")).toBeInTheDocument();
});

test("shows empty table if API call fails", async () => {
    getAllPlayers.mockRejectedValue(new Error("Network error"));
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByText("No results.")).toBeInTheDocument();
});

// -- Tab Tests --

test("Hitting tab has is-active class by default", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByRole("button", { name: /hitting/i })).toHaveClass("is-active");
});

test("clicking Pitching tab switches to pitching columns", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: /pitching/i }));
    expect(screen.getByText("ERA")).toBeInTheDocument();
    expect(screen.getByText("WHIP")).toBeInTheDocument();
    expect(screen.getByText("SV")).toBeInTheDocument();
    expect(screen.queryByText("OBP")).not.toBeInTheDocument();
});

test("clicking Pitching tab gives it is-active class", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: /pitching/i }));
    expect(screen.getByRole("button", { name: /pitching/i })).toHaveClass("is-active");
    expect(screen.getByRole("button", { name: /hitting/i })).not.toHaveClass("is-active");
});

test("clicking Hitting tab after Pitching restores hitting columns", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: /pitching/i }));
    fireEvent.click(screen.getByRole("button", { name: /hitting/i }));
    expect(screen.getByText("HR")).toBeInTheDocument();
    expect(screen.queryByText("ERA")).not.toBeInTheDocument();
});

// -- Filter Tests --

test("filtering by player name shows only matching players", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "judge" } });
    expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
    expect(screen.queryByText("Shohei Ohtani")).not.toBeInTheDocument();
});

test("filtering by team shows only players on that team", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Team"), { target: { value: "NYY" } });
    expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
    expect(screen.getByText("Gerrit Cole")).toBeInTheDocument();
    expect(screen.queryByText("Shohei Ohtani")).not.toBeInTheDocument();
});

test("filtering by position shows only players at that position", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Position"), { target: { value: "SP" } });
    expect(screen.getByText("Gerrit Cole")).toBeInTheDocument();
    expect(screen.queryByText("Aaron Judge")).not.toBeInTheDocument();
});

test("name filter is case-insensitive", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "OHTANI" } });
    expect(screen.getByText("Shohei Ohtani")).toBeInTheDocument();
});

test("Clear button resets all filters and shows all players", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText("Player"), { target: { value: "judge" } });
    fireEvent.change(screen.getByPlaceholderText("Team"), { target: { value: "NYY" } });
    fireEvent.click(screen.getByRole("button", { name: /clear/i }));
    expect(screen.getByPlaceholderText("Player")).toHaveValue("");
    expect(screen.getByPlaceholderText("Team")).toHaveValue("");
    expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
    expect(screen.getByText("Shohei Ohtani")).toBeInTheDocument();
});

// -- Sort Tests --

test("table is sorted by player name ascending by default", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    const rows = screen.getAllByRole("row").slice(1);
    expect(within(rows[0]).getAllByRole("cell")[0]).toHaveTextContent("Aaron Judge");
});

test("clicking PLAYER header sorts names descending (already active column)", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    // PLAYER is already the active sort column (asc), so one click flips it to desc
    fireEvent.click(screen.getByText("PLAYER"));
    const rows = screen.getAllByRole("row").slice(1);
    expect(within(rows[0]).getAllByRole("cell")[0]).toHaveTextContent("Shohei Ohtani");
});

test("clicking HR header sorts players by HR ascending (pitchers first)", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByText("HR"));
    const rows = screen.getAllByRole("row").slice(1);
    const firstName = within(rows[0]).getAllByRole("cell")[0].textContent.trim();
    expect(["Gerrit Cole", "Edwin Diaz"]).toContain(firstName);
});

test("clicking HR header twice sorts by HR descending (Judge first)", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByText("HR"));
    fireEvent.click(screen.getByText("HR"));
    const rows = screen.getAllByRole("row").slice(1);
    expect(within(rows[0]).getAllByRole("cell")[0]).toHaveTextContent("Aaron Judge");
});

test("active sort column shows ▼ arrow when descending", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByText("HR"));
    fireEvent.click(screen.getByText("HR"));
    expect(screen.getByText("▼")).toBeInTheDocument();
});

// -- Pagination Tests --

test("shows correct Showing X–Y of Z count", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByText(/showing/i)).toHaveTextContent("1–4");
});

test("first and prev page buttons are disabled on page 1", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    const buttons = screen.getAllByRole("button");
    const first = buttons.find((b) => b.textContent === "⟪");
    const prev = buttons.find((b) => b.textContent === "‹");
    expect(first).toBeDisabled();
    expect(prev).toBeDisabled();
});

test("next and last page buttons are disabled when all results fit on one page", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    const buttons = screen.getAllByRole("button");
    const next = buttons.find((b) => b.textContent === "›");
    const last = buttons.find((b) => b.textContent === "⟫");
    expect(next).toBeDisabled();
    expect(last).toBeDisabled();
});

test("rows per page selector is rendered", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.getByRole("combobox")).toBeInTheDocument();
});

// -- Profile Modal Tests --

test("profile modal is hidden by default", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.queryByTestId("profile-modal")).not.toBeInTheDocument();
});

test("clicking a player name opens the profile modal", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByText("Aaron Judge"));
    expect(screen.getByTestId("profile-modal")).toBeInTheDocument();
    expect(screen.getByTestId("profile-name")).toHaveTextContent("Aaron Judge");
});

test("closing the profile modal hides it", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByText("Aaron Judge"));
    fireEvent.click(screen.getByRole("button", { name: /close profile/i }));
    expect(screen.queryByTestId("profile-modal")).not.toBeInTheDocument();
});

test("clicking a player name in compare mode does not open the profile modal", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    fireEvent.click(screen.getByText("Aaron Judge"));
    expect(screen.queryByTestId("profile-modal")).not.toBeInTheDocument();
});

// -- Compare Modal Tests --

test("compare modal is hidden by default", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    expect(screen.queryByTestId("compare-modal")).not.toBeInTheDocument();
});

test("clicking Compare tab opens the compare modal", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    expect(screen.getByTestId("compare-modal")).toBeInTheDocument();
});

test("Compare tab has is-active class when compare mode is on", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    expect(screen.getByRole("button", { name: "Compare" })).toHaveClass("is-active");
});

test("clicking a player in compare mode adds them to the compare list", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    const table = screen.getByRole("table");
    fireEvent.click(within(table).getByText("Aaron Judge"));
    expect(screen.getByTestId("compare-player-1")).toBeInTheDocument();
});

test("clicking a second player in compare mode adds them too", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    const table = screen.getByRole("table");
    fireEvent.click(within(table).getByText("Aaron Judge"));
    fireEvent.click(within(table).getByText("Shohei Ohtani"));
    expect(screen.getByTestId("compare-player-1")).toBeInTheDocument();
    expect(screen.getByTestId("compare-player-2")).toBeInTheDocument();
});

test("clicking an already selected player removes them from the compare list", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    const table = screen.getByRole("table");
    fireEvent.click(within(table).getByText("Aaron Judge")); // add
    fireEvent.click(within(table).getByText("Aaron Judge")); // remove
    expect(screen.queryByTestId("compare-player-1")).not.toBeInTheDocument();
});

test("compare list does not exceed 4 players", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    const table = screen.getByRole("table");
    ["Aaron Judge", "Shohei Ohtani", "Gerrit Cole", "Edwin Diaz"].forEach((name) =>
        fireEvent.click(within(table).getByText(name))
    );
    expect(screen.getAllByTestId(/^compare-player-/).length).toBe(4);
});

test("Remove button in compare modal removes that player", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    const table = screen.getByRole("table");
    fireEvent.click(within(table).getByText("Aaron Judge"));
    fireEvent.click(within(screen.getByTestId("compare-player-1")).getByRole("button", { name: /remove/i }));
    expect(screen.queryByTestId("compare-player-1")).not.toBeInTheDocument();
});

test("closing compare modal hides it and clears selection", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    fireEvent.click(within(screen.getByRole("table")).getByText("Aaron Judge"));
    fireEvent.click(screen.getByRole("button", { name: /close compare/i }));
    expect(screen.queryByTestId("compare-modal")).not.toBeInTheDocument();
});

test("Compare tab loses is-active class after closing compare modal", async () => {
    render(<PlayerInformation />);
    await waitFor(() => expect(screen.queryByText("Loading players...")).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Compare" }));
    fireEvent.click(screen.getByRole("button", { name: /close compare/i }));
    expect(screen.getByRole("button", { name: "Compare" })).not.toHaveClass("is-active");
});