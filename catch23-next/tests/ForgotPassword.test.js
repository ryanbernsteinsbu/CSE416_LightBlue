import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ForgotPassword from "../src/components/ForgotPassword";
import { requestPasswordReset } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  requestPasswordReset: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
  requestPasswordReset.mockResolvedValue({});
});

test("renders email input and send button", () => {
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByText("Send Reset Link")).toBeInTheDocument();
});

test("renders Back to Sign In button", () => {
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  expect(screen.getByText("Back to Sign In")).toBeInTheDocument();
});

test("clicking Back to Sign In calls onShowLogin", () => {
  const onShowLogin = jest.fn();
  render(<ForgotPassword onShowLogin={onShowLogin} />);
  fireEvent.click(screen.getByText("Back to Sign In"));
  expect(onShowLogin).toHaveBeenCalledTimes(1);
});

test("shows error when submitting empty email", async () => {
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => {
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument();
  });
});

test("shows error for invalid email format", async () => {
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "notanemail" } });
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => {
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});

test("shows success screen after valid email submission", async () => {
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@example.com" } });
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => {
    expect(screen.getByText(/Check your inbox/i)).toBeInTheDocument();
  });
});

test("shows success screen even when API call fails (no email leak)", async () => {
  requestPasswordReset.mockRejectedValue(new Error("Server error"));
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@example.com" } });
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => {
    expect(screen.getByText(/Check your inbox/i)).toBeInTheDocument();
  });
});

test("Back to Sign In button appears in success state and calls onShowLogin", async () => {
  const onShowLogin = jest.fn();
  render(<ForgotPassword onShowLogin={onShowLogin} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@example.com" } });
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => screen.getByText(/Check your inbox/i));
  fireEvent.click(screen.getByText("Back to Sign In"));
  expect(onShowLogin).toHaveBeenCalledTimes(1);
});

test("disables button while loading", async () => {
  requestPasswordReset.mockImplementation(() => new Promise(() => {})); // never resolves
  render(<ForgotPassword onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@example.com" } });
  fireEvent.click(screen.getByText("Send Reset Link"));
  await waitFor(() => {
    expect(screen.getByText("Sending...")).toBeDisabled();
  });
});