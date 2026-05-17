import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../src/components/Register";
import { registerUser } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  registerUser: jest.fn(),
}));

const fillForm = ({ email = "", displayName = "", password = "", confirm = "" } = {}) => {
  if (email) fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: email } });
  if (displayName) fireEvent.change(screen.getByPlaceholderText("Display Name"), { target: { value: displayName } });
  if (password) fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: password } });
  if (confirm) fireEvent.change(screen.getByPlaceholderText("Re-Type password"), { target: { value: confirm } });
};

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders all form inputs", () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Display Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Re-Type password")).toBeInTheDocument();
});

test("renders Register and Sign In buttons", () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  expect(screen.getByText("Register")).toBeInTheDocument();
  expect(screen.getByText("Sign In")).toBeInTheDocument();
});

test("clicking Sign In calls onShowLogin", () => {
  const onShowLogin = jest.fn();
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={onShowLogin} />);
  fireEvent.click(screen.getByText("Sign In"));
  expect(onShowLogin).toHaveBeenCalledTimes(1);
});

test("shows error when email is empty", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});

test("shows error when display name is empty", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@test.com" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/Display Name is required/i)).toBeInTheDocument();
  });
});

test("shows error when password is empty", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@test.com", displayName: "John" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });
});

test("shows error when passwords do not match", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@test.com", displayName: "John", password: "Password1!", confirm: "Password2!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });
});

test("shows error when password is less than 8 characters", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@test.com", displayName: "John", password: "short", confirm: "short" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
  });
});

test("shows error for invalid email format", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "notvalid", displayName: "John", password: "Password1!", confirm: "Password1!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});

test("shows error when password contains display name", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@test.com", displayName: "JohnDoe", password: "JohnDoeRocks1", confirm: "JohnDoeRocks1" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/cannot contain your display name/i)).toBeInTheDocument();
  });
});

test("shows error when password contains email prefix", async () => {
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "myemail@test.com", displayName: "John", password: "myemailRocks1!", confirm: "myemailRocks1!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/cannot contain your email/i)).toBeInTheDocument();
  });
});

test("calls registerUser with valid form data", async () => {
  registerUser.mockResolvedValue({ data: { id: 1 } });
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@example.com", displayName: "JohnDoe", password: "SuperPass1!", confirm: "SuperPass1!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(registerUser).toHaveBeenCalledWith("test@example.com", "JohnDoe", "SuperPass1!");
  });
});

test("shows success banner after successful registration", async () => {
  registerUser.mockResolvedValue({ data: { id: 1 } });
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@example.com", displayName: "JohnDoe", password: "SuperPass1!", confirm: "SuperPass1!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/Account successfully created/i)).toBeInTheDocument();
  });
});

test("shows error for duplicate email from backend", async () => {
  registerUser.mockRejectedValue({
    response: { data: { error: { message: "Email is connected to existing account" } } },
  });
  render(<Register onCreateUserClick={jest.fn()} onShowLogin={jest.fn()} />);
  fillForm({ email: "test@example.com", displayName: "JohnDoe", password: "SuperPass1!", confirm: "SuperPass1!" });
  fireEvent.click(screen.getByText("Register"));
  await waitFor(() => {
    expect(screen.getByText(/already an account/i)).toBeInTheDocument();
  });
});