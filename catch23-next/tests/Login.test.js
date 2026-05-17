import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../src/components/Login";
import { loginUser } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  loginUser: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders email and password inputs", () => {
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});

test("renders Sign in and Register buttons", () => {
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  expect(screen.getByText("Sign in")).toBeInTheDocument();
  expect(screen.getByText("Register")).toBeInTheDocument();
});

test("renders Forgot password link", () => {
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  expect(screen.getByText(/Forgot password/i)).toBeInTheDocument();
});

test("clicking Register calls onShowRegister", () => {
  const onShowRegister = jest.fn();
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={onShowRegister} onShowForgotPassword={jest.fn()} />);
  fireEvent.click(screen.getByText("Register"));
  expect(onShowRegister).toHaveBeenCalledTimes(1);
});

test("clicking Forgot password calls onShowForgotPassword", () => {
  const onShowForgotPassword = jest.fn();
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={onShowForgotPassword} />);
  fireEvent.click(screen.getByText(/Forgot password/i));
  expect(onShowForgotPassword).toHaveBeenCalledTimes(1);
});

test("shows error when submitting empty email", async () => {
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  fireEvent.click(screen.getByText("Sign in"));
  await waitFor(() => {
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument();
  });
});

test("shows error when submitting empty password", async () => {
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@test.com" } });
  fireEvent.click(screen.getByText("Sign in"));
  await waitFor(() => {
    expect(screen.getByText(/enter your password/i)).toBeInTheDocument();
  });
});

test("calls loginUser with email and password on submit", async () => {
  loginUser.mockResolvedValue({ data: { token: "abc" } });
  const onLoginSuccess = jest.fn();
  render(<Login onLoginSuccess={onLoginSuccess} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@test.com" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Sign in"));
  await waitFor(() => {
    expect(loginUser).toHaveBeenCalledWith("user@test.com", "password123");
    expect(onLoginSuccess).toHaveBeenCalledWith({ token: "abc" });
  });
});

test("shows error on invalid credentials", async () => {
  loginUser.mockRejectedValue({ response: { data: { message: "Invalid user credentials" } } });
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "bad@test.com" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "wrong" } });
  fireEvent.click(screen.getByText("Sign in"));
  await waitFor(() => {
    expect(screen.getByText(/Invalid email or password/i)).toBeInTheDocument();
  });
});

test("shows generic error for unexpected API failure", async () => {
  loginUser.mockRejectedValue({ response: { data: { message: "Server down" } } });
  render(<Login onLoginSuccess={jest.fn()} onShowRegister={jest.fn()} onShowForgotPassword={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@test.com" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "pass1234" } });
  fireEvent.click(screen.getByText("Sign in"));
  await waitFor(() => {
    expect(screen.getByText(/error has occurred/i)).toBeInTheDocument();
  });
});