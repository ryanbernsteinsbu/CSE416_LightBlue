import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateLeagueModal from "../src/components/CreateLeagueModal";
import { createLeague } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  createLeague: jest.fn(),
}));

jest.mock("../src/components/CreateLeagueStepOne", () => ({ leagueName, setLeagueName, canGoNext, onNext }) => (
  <div>
    <span>Step One</span>
    <input
      data-testid="league-name-input"
      value={leagueName}
      onChange={(e) => setLeagueName(e.target.value)}
    />
    <button onClick={onNext} disabled={!canGoNext}>Next →</button>
  </div>
));

jest.mock("../src/components/CreateLeagueSettings", () => ({ leagueName, onBack, onSave }) => (
  <div>
    <span>Settings Step</span>
    <span data-testid="settings-league-name">{leagueName}</span>
    <button onClick={onBack}>← Back</button>
    <button onClick={onSave}>Save</button>
  </div>
));

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders nothing when isOpen is false", () => {
  const { container } = render(
    <CreateLeagueModal isOpen={false} onClose={jest.fn()} onSave={jest.fn()} />
  );
  expect(container.firstChild).toBeNull();
});

test("renders Step One when isOpen is true", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  expect(screen.getByText("Step One")).toBeInTheDocument();
});

test("Next button is disabled when league name is empty", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  expect(screen.getByText("Next →")).toBeDisabled();
});

test("Next button is enabled after typing a league name", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  fireEvent.change(screen.getByTestId("league-name-input"), { target: { value: "My League" } });
  expect(screen.getByText("Next →")).not.toBeDisabled();
});

test("advances to step 2 after clicking Next", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  fireEvent.change(screen.getByTestId("league-name-input"), { target: { value: "My League" } });
  fireEvent.click(screen.getByText("Next →"));
  expect(screen.getByText("Settings Step")).toBeInTheDocument();
  expect(screen.queryByText("Step One")).not.toBeInTheDocument();
});

test("league name is passed to settings step", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  fireEvent.change(screen.getByTestId("league-name-input"), { target: { value: "Championship" } });
  fireEvent.click(screen.getByText("Next →"));
  expect(screen.getByTestId("settings-league-name").textContent).toBe("Championship");
});

test("Back button returns to step 1", () => {
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={jest.fn()} />);
  fireEvent.change(screen.getByTestId("league-name-input"), { target: { value: "My League" } });
  fireEvent.click(screen.getByText("Next →"));
  fireEvent.click(screen.getByText("← Back"));
  expect(screen.getByText("Step One")).toBeInTheDocument();
});

test("clicking close button calls onClose", () => {
  const onClose = jest.fn();
  render(<CreateLeagueModal isOpen={true} onClose={onClose} onSave={jest.fn()} />);
  fireEvent.click(screen.getByLabelText("Close"));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("clicking backdrop calls onClose", () => {
  const onClose = jest.fn();
  const { container } = render(
    <CreateLeagueModal isOpen={true} onClose={onClose} onSave={jest.fn()} />
  );
  const backdrop = container.querySelector(".clm-backdrop");
  fireEvent.click(backdrop);
  expect(onClose).toHaveBeenCalled();
});

test("Save calls createLeague and onSave on success", async () => {
  createLeague.mockResolvedValue({ data: { id: 42, title: "My League" } });
  const onSave = jest.fn();
  render(<CreateLeagueModal isOpen={true} onClose={jest.fn()} onSave={onSave} />);
  fireEvent.change(screen.getByTestId("league-name-input"), { target: { value: "My League" } });
  fireEvent.click(screen.getByText("Next →"));
  fireEvent.click(screen.getByText("Save"));
  await waitFor(() => {
    expect(createLeague).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});