import { render, screen, fireEvent } from "@testing-library/react";
import CreateLeagueSettings from "../src/components/CreateLeagueSettings";
import {
  TABS,
  INITIAL_PLAYER_SETTINGS,
  INITIAL_ROSTER_SETTINGS,
  INITIAL_SCORING_SETTINGS,
  INITIAL_DRAFT_SETTINGS,
} from "../src/components/CreateLeagueHelpers";

const defaultProps = {
  activeTab: "draft",
  setActiveTab: jest.fn(),
  leagueName: "Test League",
  playerSettings: INITIAL_PLAYER_SETTINGS,
  setPlayerSettings: jest.fn(),
  rosterSettings: INITIAL_ROSTER_SETTINGS,
  setRosterSettings: jest.fn(),
  scoringSettings: INITIAL_SCORING_SETTINGS,
  setScoringSettings: jest.fn(),
  draftSettings: INITIAL_DRAFT_SETTINGS,
  setDraftSettings: jest.fn(),
  onBack: jest.fn(),
  onSave: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders all tab buttons from TABS", () => {
  render(<CreateLeagueSettings {...defaultProps} />);

  TABS.forEach((t) => {
    expect(screen.getByRole("button", { name: t.label })).toBeInTheDocument();
  });
})

test("renders Settings header and league name as subtitle", () => {
  render(<CreateLeagueSettings {...defaultProps} />);
  expect(screen.getByText("Settings")).toBeInTheDocument();
  expect(screen.getByText("Test League")).toBeInTheDocument();
});

test("clicking a tab calls setActiveTab with its key", () => {
  const setActiveTab = jest.fn();

  render(<CreateLeagueSettings {...defaultProps} setActiveTab={setActiveTab} />);

  fireEvent.click(screen.getByRole("button", { name: "Players" }));

  expect(setActiveTab).toHaveBeenCalledWith("players");
});

test("active tab button has 'active' class", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="draft" />);

  const draftBtn = screen.getByRole("button", { name: "Draft" });

  expect(draftBtn.className).toMatch(/active/);
});

test("inactive tab buttons do not have 'active' class", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="draft" />);

  const playersBtn = screen.getByRole("button", { name: "Players" });

  expect(playersBtn.className).not.toMatch(/\bactive\b/);
});

test("renders draft panel content on draft tab", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="draft" />);
  expect(screen.getByText("Budget")).toBeInTheDocument();
  expect(screen.getByText("Number of Teams")).toBeInTheDocument();
});

test("renders roster panel content on roster tab", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="roster" />);
  expect(screen.getByText(/Number of Catchers/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of Outfielders/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of Pitchers/i)).toBeInTheDocument();
});

test("renders players panel content on players tab", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="players" />);
  // expect(screen.getByText(/Ohtani Rule/i)).toBeInTheDocument();
  expect(screen.getByText(/Division/i)).toBeInTheDocument();
});

test("renders scoring panel content on scoring tab", () => {
  render(<CreateLeagueSettings {...defaultProps} activeTab="scoring" />);
  expect(screen.getByText(/Home Run Weight/i)).toBeInTheDocument();
  expect(screen.getByText(/ERA Weight/i)).toBeInTheDocument();
  expect(screen.getByText(/Stat Windows/i)).toBeInTheDocument();
});

test("renders Back and Save buttons", () => {
  render(<CreateLeagueSettings {...defaultProps} />);
  expect(screen.getByText(/Back/i)).toBeInTheDocument();
  expect(screen.getByText("Save")).toBeInTheDocument();
});

test("clicking Back calls onBack", () => {
  const onBack = jest.fn();
  render(<CreateLeagueSettings {...defaultProps} onBack={onBack} />);
  fireEvent.click(screen.getByText(/Back/i));
  expect(onBack).toHaveBeenCalledTimes(1);
});

test("clicking Save calls onSave", () => {
  const onSave = jest.fn();
  render(<CreateLeagueSettings {...defaultProps} onSave={onSave} />);
  fireEvent.click(screen.getByText("Save"));
  expect(onSave).toHaveBeenCalledTimes(1);
});

test("changing budget input calls setDraftSettings", () => {
  const setDraftSettings = jest.fn();
  render(<CreateLeagueSettings {...defaultProps} activeTab="draft" setDraftSettings={setDraftSettings} />);
  const budgetInput = screen.getAllByRole("spinbutton")[0];
  fireEvent.change(budgetInput, { target: { value: "300" } });
  expect(setDraftSettings).toHaveBeenCalledTimes(1);
});

test("changing a roster input calls setRosterSettings", () => {
  const setRosterSettings = jest.fn();
  render(<CreateLeagueSettings {...defaultProps} activeTab="roster" setRosterSettings={setRosterSettings} />);
  const inputs = screen.getAllByRole("spinbutton");
  fireEvent.change(inputs[0], { target: { value: "3" } });
  expect(setRosterSettings).toHaveBeenCalledTimes(1);
});
