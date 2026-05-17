import { render, screen, fireEvent } from "@testing-library/react";
import LeagueDraftController from "../src/components/LeagueDraftController";

jest.mock("../src/components/PreDraftBoard", () => ({ league, onBack, onModeChange }) => (
  <div>
    <span>PreDraftBoard</span>
    <button onClick={onBack}>Back from PreDraft</button>
    <button onClick={() => onModeChange("simulation")}>Go Simulation</button>
    <button onClick={() => onModeChange("live")}>Go Live</button>
    <button onClick={() => onModeChange("taxi")}>Go Taxi</button>
    <button onClick={() => onModeChange("minor")}>Go Minor</button>
    <button onClick={() => onModeChange("summary")}>Go Summary</button>
  </div>
));

jest.mock("../src/components/DraftSimulation", () => ({ onBack, onModeChange }) => (
  <div>
    <span>DraftSimulation</span>
    <button onClick={onBack}>Back from Simulation</button>
  </div>
));

jest.mock("../src/components/LiveDraft", () => ({ onBack, onModeChange }) => (
  <div>
    <span>LiveDraft</span>
    <button onClick={onBack}>Back from Live</button>
  </div>
));

jest.mock("../src/components/DraftSummary", () => ({ onBack, onModeChange }) => (
  <div>
    <span>DraftSummary</span>
    <button onClick={onBack}>Back from Summary</button>
  </div>
));

jest.mock("../src/components/TaxiDraft", () => ({ onBack, onModeChange }) => (
  <div>
    <span>TaxiDraft</span>
    <button onClick={onBack}>Back from Taxi</button>
  </div>
));

jest.mock("../src/components/MinorLeague", () => ({ onBack, onModeChange }) => (
  <div>
    <span>MinorLeagueDraft</span>
    <button onClick={onBack}>Back from Minor</button>
  </div>
));

const activeLeague = { id: 1, title: "Test League", status: "ACTIVE" };
const draftedLeague = { id: 2, title: "Done League", status: "DRAFTED" };

beforeEach(() => {
  jest.clearAllMocks();
});

test("defaults to predraft for ACTIVE league with no initialMode", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode={null} />);
  expect(screen.getByText("PreDraftBoard")).toBeInTheDocument();
});

test("defaults to summary for DRAFTED league with no initialMode", () => {
  render(<LeagueDraftController league={draftedLeague} onBack={jest.fn()} initialMode={null} />);
  expect(screen.getByText("DraftSummary")).toBeInTheDocument();
});

test("initialMode 'summary' overrides status-based default", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="summary" />);
  expect(screen.getByText("DraftSummary")).toBeInTheDocument();
});

test("initialMode 'live' renders LiveDraft", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="live" />);
  expect(screen.getByText("LiveDraft")).toBeInTheDocument();
});

test("initialMode 'simulation' renders DraftSimulation", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="simulation" />);
  expect(screen.getByText("DraftSimulation")).toBeInTheDocument();
});

test("initialMode 'taxi' renders TaxiDraft", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="taxi" />);
  expect(screen.getByText("TaxiDraft")).toBeInTheDocument();
});

test("initialMode 'minor' renders MinorLeagueDraft", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="minor" />);
  expect(screen.getByText("MinorLeagueDraft")).toBeInTheDocument();
});

test("initialMode 'predraft' renders PreDraftBoard", () => {
  render(<LeagueDraftController league={draftedLeague} onBack={jest.fn()} initialMode="predraft" />);
  expect(screen.getByText("PreDraftBoard")).toBeInTheDocument();
});

test("mode switch: predraft → simulation via onModeChange", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode={null} />);
  fireEvent.click(screen.getByText("Go Simulation"));
  expect(screen.getByText("DraftSimulation")).toBeInTheDocument();
});

test("mode switch: predraft → live via onModeChange", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode={null} />);
  fireEvent.click(screen.getByText("Go Live"));
  expect(screen.getByText("LiveDraft")).toBeInTheDocument();
});

test("mode switch: predraft → taxi via onModeChange", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode={null} />);
  fireEvent.click(screen.getByText("Go Taxi"));
  expect(screen.getByText("TaxiDraft")).toBeInTheDocument();
});

test("mode switch: predraft → minor via onModeChange", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode={null} />);
  fireEvent.click(screen.getByText("Go Minor"));
  expect(screen.getByText("MinorLeagueDraft")).toBeInTheDocument();
});

test("simulation Back returns to predraft", () => {
  render(<LeagueDraftController league={activeLeague} onBack={jest.fn()} initialMode="simulation" />);
  fireEvent.click(screen.getByText("Back from Simulation"));
  expect(screen.getByText("PreDraftBoard")).toBeInTheDocument();
});

test("calls global onBack when predraft Back is clicked", () => {
  const onBack = jest.fn();
  render(<LeagueDraftController league={activeLeague} onBack={onBack} initialMode={null} />);
  fireEvent.click(screen.getByText("Back from PreDraft"));
  expect(onBack).toHaveBeenCalledTimes(1);
});