import { render, screen } from "@testing-library/react";
import TransactionProvider from "../src/components/TransactionProvider";

// Mock the hook that drives the toasts
jest.mock("../src/hooks/useTransactions", () => ({
  useTransactions: jest.fn(),
}));

// Mock TransactionToast so we can control what it renders
jest.mock("../src/components/TransactionToast", () => ({ toast, onDismiss }) => (
  <div data-testid={`toast-${toast._id}`}>
    <span>{toast._id}</span>
    <button onClick={() => onDismiss(toast._id)}>Dismiss</button>
  </div>
));

import { useTransactions } from "../src/hooks/useTransactions";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders children", () => {
  useTransactions.mockReturnValue({ toasts: [], dismissToast: jest.fn() });
  render(
    <TransactionProvider>
      <div>Child Content</div>
    </TransactionProvider>
  );
  expect(screen.getByText("Child Content")).toBeInTheDocument();
});

test("renders nothing when toasts array is empty", () => {
  useTransactions.mockReturnValue({ toasts: [], dismissToast: jest.fn() });
  const { container } = render(
    <TransactionProvider>
      <span>App</span>
    </TransactionProvider>
  );
  expect(container.querySelectorAll("[data-testid^='toast-']")).toHaveLength(0);
});

test("renders a toast for each item in toasts array", () => {
  useTransactions.mockReturnValue({
    toasts: [
      { _id: "t1", person: { fullName: "Player A" }, description: "Traded", date: "2025-05-01" },
      { _id: "t2", person: { fullName: "Player B" }, description: "Signed", date: "2025-05-02" },
    ],
    dismissToast: jest.fn(),
  });

  render(
    <TransactionProvider>
      <span>App</span>
    </TransactionProvider>
  );

  expect(screen.getByTestId("toast-t1")).toBeInTheDocument();
  expect(screen.getByTestId("toast-t2")).toBeInTheDocument();
});

test("passes dismissToast to each toast component", () => {
  const dismissToast = jest.fn();
  useTransactions.mockReturnValue({
    toasts: [{ _id: "t1", person: { fullName: "Player A" }, description: "Traded", date: "2025-05-01" }],
    dismissToast,
  });

  render(
    <TransactionProvider>
      <span>App</span>
    </TransactionProvider>
  );

  screen.getByText("Dismiss").click();
  expect(dismissToast).toHaveBeenCalledWith("t1");
});