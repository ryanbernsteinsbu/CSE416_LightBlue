import { render, screen, fireEvent } from "@testing-library/react";
import AuthScreen from "../src/components/AuthScreen";

jest.mock("../src/components/Login", () => ({ onLoginSuccess, onShowRegister, onShowForgotPassword }) => (
  <div>
    <span>Login Form</span>
    <button onClick={onShowRegister}>Go Register</button>
    <button onClick={onShowForgotPassword}>Forgot Password</button>
  </div>
));

jest.mock("../src/components/Register", () => ({ onCreateUserClick, onShowLogin }) => (
  <div>
    <span>Register Form</span>
    <button onClick={onShowLogin}>Back to Login from Register</button>
    <button onClick={onCreateUserClick}>Done Registering</button>
  </div>
));

jest.mock("../src/components/ForgotPassword", () => ({ onShowLogin }) => (
  <div>
    <span>Forgot Password Form</span>
    <button onClick={onShowLogin}>Back to Login from Forgot</button>
  </div>
));

jest.mock("../src/components/Modal", () => ({ isOpen, children }) =>
  isOpen ? <div data-testid="modal">{children}</div> : null
);

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders CATCH 23 title", () => {
  render(<AuthScreen authView="login" setAuthView={jest.fn()} onLoginSuccess={jest.fn()} />);
  expect(screen.getByText("CATCH 23")).toBeInTheDocument();
});

test("renders Login when authView is login", () => {
  render(<AuthScreen authView="login" setAuthView={jest.fn()} onLoginSuccess={jest.fn()} />);
  expect(screen.getByText("Login Form")).toBeInTheDocument();
  expect(screen.queryByText("Register Form")).not.toBeInTheDocument();
  expect(screen.queryByText("Forgot Password Form")).not.toBeInTheDocument();
});

test("renders Register when authView is register", () => {
  render(<AuthScreen authView="register" setAuthView={jest.fn()} onLoginSuccess={jest.fn()} />);
  expect(screen.getByText("Register Form")).toBeInTheDocument();
  expect(screen.queryByText("Login Form")).not.toBeInTheDocument();
});

test("renders ForgotPassword when authView is forgot", () => {
  render(<AuthScreen authView="forgot" setAuthView={jest.fn()} onLoginSuccess={jest.fn()} />);
  expect(screen.getByText("Forgot Password Form")).toBeInTheDocument();
  expect(screen.queryByText("Login Form")).not.toBeInTheDocument();
});

test("calls setAuthView('register') when Go Register is clicked from login", () => {
  const setAuthView = jest.fn();
  render(<AuthScreen authView="login" setAuthView={setAuthView} onLoginSuccess={jest.fn()} />);
  fireEvent.click(screen.getByText("Go Register"));
  expect(setAuthView).toHaveBeenCalledWith("register");
});

test("calls setAuthView('forgot') when Forgot Password is clicked from login", () => {
  const setAuthView = jest.fn();
  render(<AuthScreen authView="login" setAuthView={setAuthView} onLoginSuccess={jest.fn()} />);
  fireEvent.click(screen.getByText("Forgot Password"));
  expect(setAuthView).toHaveBeenCalledWith("forgot");
});

test("calls setAuthView('login') from register view Back to Login", () => {
  const setAuthView = jest.fn();
  render(<AuthScreen authView="register" setAuthView={setAuthView} onLoginSuccess={jest.fn()} />);
  fireEvent.click(screen.getByText("Back to Login from Register"));
  expect(setAuthView).toHaveBeenCalledWith("login");
});

test("calls setAuthView('login') from forgot view Back to Login", () => {
  const setAuthView = jest.fn();
  render(<AuthScreen authView="forgot" setAuthView={setAuthView} onLoginSuccess={jest.fn()} />);
  fireEvent.click(screen.getByText("Back to Login from Forgot"));
  expect(setAuthView).toHaveBeenCalledWith("login");
});

test("modal is always open regardless of authView", () => {
  render(<AuthScreen authView="login" setAuthView={jest.fn()} onLoginSuccess={jest.fn()} />);
  expect(screen.getByTestId("modal")).toBeInTheDocument();
});