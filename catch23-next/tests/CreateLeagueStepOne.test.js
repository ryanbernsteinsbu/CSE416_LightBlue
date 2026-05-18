import { render, screen, fireEvent } from "@testing-library/react";
import CreateLeagueStepOne from "../src/components/CreateLeagueStepOne";

const defaultProps = {
  leagueName: "",
  setLeagueName: jest.fn(),
  logoFile: null,
  logoPreview: "",
  onLogoChange: jest.fn(),
  setLogoFile: jest.fn(),
  setLogoPreview: jest.fn(),
  canGoNext: false,
  onNext: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders Create League title", () => {
  render(<CreateLeagueStepOne {...defaultProps} />);
  expect(screen.getByText("Create League")).toBeInTheDocument();
});

test("renders league name input with placeholder", () => {
  render(<CreateLeagueStepOne {...defaultProps} />);
  expect(screen.getByPlaceholderText("League Name")).toBeInTheDocument();
});

test("Next button is disabled when canGoNext is false", () => {
  render(<CreateLeagueStepOne {...defaultProps} canGoNext={false} />);
  expect(screen.getByText("Next →")).toBeDisabled();
});

test("Next button is enabled when canGoNext is true", () => {
  render(<CreateLeagueStepOne {...defaultProps} canGoNext={true} />);
  expect(screen.getByText("Next →")).not.toBeDisabled();
});

test("typing in the name input calls setLeagueName", () => {
  const setLeagueName = jest.fn();
  render(<CreateLeagueStepOne {...defaultProps} setLeagueName={setLeagueName} />);
  fireEvent.change(screen.getByPlaceholderText("League Name"), { target: { value: "My League" } });
  expect(setLeagueName).toHaveBeenCalledWith("My League");
});

test("clicking Next calls onNext when enabled", () => {
  const onNext = jest.fn();
  render(<CreateLeagueStepOne {...defaultProps} canGoNext={true} onNext={onNext} />);
  fireEvent.click(screen.getByText("Next →"));
  expect(onNext).toHaveBeenCalledTimes(1);
});

test("does not call onNext when button is disabled", () => {
  const onNext = jest.fn();
  render(<CreateLeagueStepOne {...defaultProps} canGoNext={false} onNext={onNext} />);
  fireEvent.click(screen.getByText("Next →"));
  expect(onNext).not.toHaveBeenCalled();
});