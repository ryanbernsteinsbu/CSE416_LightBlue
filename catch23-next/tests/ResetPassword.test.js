import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ResetPassword from "../src/components/ResetPassword";
import { resetPassword } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  resetPassword: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
  resetPassword.mockResolvedValue({});
});

test("renders invalid link message when token is missing", () => {
  render(<ResetPassword token={null} onShowLogin={jest.fn()} />);
  expect(screen.getByText(/Invalid reset link/i)).toBeInTheDocument();
});

test("Back to Sign In button works on missing token screen", () => {
  const onShowLogin = jest.fn();
  render(<ResetPassword token={null} onShowLogin={onShowLogin} />);
  fireEvent.click(screen.getByText("Back to Sign In"));
  expect(onShowLogin).toHaveBeenCalledTimes(1);
});

test("renders reset password form when token is provided", () => {
  render(<ResetPassword token="valid-token-abc" onShowLogin={jest.fn()} />);
  expect(screen.getByPlaceholderText("New Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Confirm New Password")).toBeInTheDocument();
});

test("shows error when new password is empty", async () => {
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/enter a new password/i)).toBeInTheDocument();
  });
});

test("shows error when confirm password is empty", async () => {
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "MyNewPass1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/confirm your new password/i)).toBeInTheDocument();
  });
});

test("shows error when passwords do not match", async () => {
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "Password1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "Password2!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });
});

test("shows error when password is too short", async () => {
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "short" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "short" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
  });
});

test("shows success screen after successful password reset", async () => {
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/Password updated/i)).toBeInTheDocument();
  });
});

test("Sign In button on success screen calls onShowLogin", async () => {
  const onShowLogin = jest.fn();
  render(<ResetPassword token="valid-token" onShowLogin={onShowLogin} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => screen.getByText(/Password updated/i));
  fireEvent.click(screen.getByText("Sign In"));
  expect(onShowLogin).toHaveBeenCalledTimes(1);
});

test("shows expired token error from backend", async () => {
  resetPassword.mockRejectedValue({ response: { data: { error: "Token expired" } } });
  render(<ResetPassword token="expired-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/expired/i)).toBeInTheDocument();
  });
});

test("shows invalid token error from backend", async () => {
  resetPassword.mockRejectedValue({ response: { data: { error: "Invalid token" } } });
  render(<ResetPassword token="bad-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByText(/invalid/i)).toBeInTheDocument();
  });
});

test("disables inputs and buttons while loading", async () => {
  resetPassword.mockImplementation(() => new Promise(() => {})); // never resolves
  render(<ResetPassword token="valid-token" onShowLogin={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm New Password"), { target: { value: "NewPassword1!" } });
  fireEvent.click(screen.getByText("Reset Password"));
  await waitFor(() => {
    expect(screen.getByPlaceholderText("New Password")).toBeDisabled();
    expect(screen.getByText("Updating...")).toBeDisabled();
  });
});