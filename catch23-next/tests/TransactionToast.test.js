import { render, screen, fireEvent, act } from "@testing-library/react";
import TransactionToast from "../src/components/TransactionToast";

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

const mockToast = {
  _id: "txn-001",
  person: { fullName: "Aaron Judge" },
  description: "Placed on 10-Day IL",
  fromTeam: { name: "NYY" },
  toTeam: { name: "IL" },
  date: "2025-05-01",
  typeCode: "IL",
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("renders player name", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText("Aaron Judge")).toBeInTheDocument();
});

test("renders description", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText("Placed on 10-Day IL")).toBeInTheDocument();
});

test("renders team transfer line", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText("NYY → IL")).toBeInTheDocument();
});

test("renders date", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText("2025-05-01")).toBeInTheDocument();
});

test("renders MLB Transaction badge", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText("MLB Transaction")).toBeInTheDocument();
});

test("renders View Wire button", () => {
  render(<TransactionToast toast={mockToast} onDismiss={jest.fn()} />);
  expect(screen.getByText(/View Wire/i)).toBeInTheDocument();
});

test("clicking × calls onDismiss with toast id", () => {
  const onDismiss = jest.fn();
  render(<TransactionToast toast={mockToast} onDismiss={onDismiss} />);
  fireEvent.click(screen.getByText("×"));
  expect(onDismiss).toHaveBeenCalledWith("txn-001");
});

test("auto-dismisses after 6 seconds", () => {
  const onDismiss = jest.fn();
  render(<TransactionToast toast={mockToast} onDismiss={onDismiss} />);
  act(() => {
    jest.advanceTimersByTime(6000);
  });
  expect(onDismiss).toHaveBeenCalledWith("txn-001");
});

test("does not dismiss before 6 seconds", () => {
  const onDismiss = jest.fn();
  render(<TransactionToast toast={mockToast} onDismiss={onDismiss} />);
  act(() => {
    jest.advanceTimersByTime(5999);
  });
  expect(onDismiss).not.toHaveBeenCalled();
});

test("clicking View Wire calls onDismiss and navigates to /transactions", () => {
  const onDismiss = jest.fn();
  render(<TransactionToast toast={mockToast} onDismiss={onDismiss} />);
  fireEvent.click(screen.getByText(/View Wire/i));
  expect(onDismiss).toHaveBeenCalledWith("txn-001");
  expect(mockPush).toHaveBeenCalledWith("/transactions");
});

test("renders 'Unknown Player' when person fullName is absent", () => {
  const toast = { ...mockToast, person: null };
  render(<TransactionToast toast={toast} onDismiss={jest.fn()} />);
  expect(screen.getByText("Unknown Player")).toBeInTheDocument();
});

test("renders only toTeam when fromTeam is absent", () => {
  const toast = { ...mockToast, fromTeam: null };
  render(<TransactionToast toast={toast} onDismiss={jest.fn()} />);
  expect(screen.getByText("IL")).toBeInTheDocument();
  expect(screen.queryByText("NYY → IL")).not.toBeInTheDocument();
});

test("renders typeCode when description is absent", () => {
  const toast = { ...mockToast, description: undefined, typeCode: "TRADE" };
  render(<TransactionToast toast={toast} onDismiss={jest.fn()} />);
  expect(screen.getByText("TRADE")).toBeInTheDocument();
});