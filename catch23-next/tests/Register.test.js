import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Register from "@/components/Register";

import {
  registerUser
} from "../src/lib/api";


jest.mock("../src/lib/api", () => ({
  registerUser: jest.fn(),
}));

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "123"),
    },
    writable: true,
  });
  jest.clearAllMocks();
});

// -- Helpers --

const mockProps = {
  onCreateUserClick: jest.fn(),
  onShowLogin: jest.fn(),
};

const fillForm = ({
  email = "sunshine@gmail.com",
  displayName = "Evelyn Sunshine",
  password = "SecurePass1!",
  confirmPassword = "SecurePass1!",
} = {}) => {
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: email } });
  fireEvent.change(screen.getByPlaceholderText("Display Name"), { target: { value: displayName } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: password } });
  fireEvent.change(screen.getByPlaceholderText("Re-Type password"), { target: { value: confirmPassword } });
};

const submitForm = () => fireEvent.click(screen.getByText("Register"));

// -- Render Tests --

test("renders all form fields and buttons", () => {
  render(<Register {...mockProps} />);

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Display Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Re-Type password")).toBeInTheDocument();
  expect(screen.getByText("Register")).toBeInTheDocument();
  expect(screen.getByText("Sign In")).toBeInTheDocument();
});

// -- Validation Tests --

test("shows error when email is empty", async () => {
  render(<Register {...mockProps} />);
  fillForm({ email: "" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});

test("shows error when display name is empty", async () => {
  render(<Register {...mockProps} />);
  fillForm({ displayName: "" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Display Name is required/i)).toBeInTheDocument();
  });
});

test("shows error when password is empty", async () => {
  render(<Register {...mockProps} />);
  fillForm({ password: "", confirmPassword: "" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });
});

test("shows error when confirm password is empty", async () => {
  render(<Register {...mockProps} />);
  fillForm({ confirmPassword: "" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Re-type Password is required/i)).toBeInTheDocument();
  });
});

test("shows error when passwords do not match", async () => {
  render(<Register {...mockProps} />);
  fillForm({ password: "Password1!", confirmPassword: "Password2!" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });
});

test("shows error for invalid email format", async () => {
  render(<Register {...mockProps} />);
  fillForm({ email: "not-an-email" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
  });
});

test("shows error when password contains display name", async () => {
  render(<Register {...mockProps} />);
  fillForm({ displayName: "JohnDoe", password: "johndoe123!", confirmPassword: "johndoe123!" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Password cannot contain your display name/i)).toBeInTheDocument();
  });
});

test("shows error when password contains email username", async () => {
  render(<Register {...mockProps} />);
  fillForm({ email: "johnsmith@example.com", password: "johnsmith123!", confirmPassword: "johnsmith123!" });
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Password cannot contain your email/i)).toBeInTheDocument();
  });
});

// -- Succesful Registration --

test("shows success banner and calls onCreateUserClick after successful registration", async () => {
  registerUser.mockResolvedValue({ data: { id: 1 } });

  render(<Register {...mockProps} />);
  fillForm();
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Account successfully created/i)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(mockProps.onCreateUserClick).toHaveBeenCalled();
  }, { timeout: 3000 });
});

test("clears form fields after successful registration", async () => {
  registerUser.mockResolvedValue({ data: { id: 1 } });

  render(<Register {...mockProps} />);
  fillForm();
  submitForm();

  await waitFor(() => {
    expect(screen.getByPlaceholderText("Email").value).toBe("");
    expect(screen.getByPlaceholderText("Display Name").value).toBe("");
  });
});

test("calls registerUser with correct arguments", async () => {
  registerUser.mockResolvedValue({ data: { id: 1 } });

  render(<Register {...mockProps} />);
  fillForm({ email: "test@example.com", displayName: "TestUser", password: "SecurePass1!" });
  submitForm();

  await waitFor(() => {
    expect(registerUser).toHaveBeenCalledWith("test@example.com", "TestUser", "SecurePass1!");
  });
});

// --- Backend Error Handling ---

test("shows specific error when email is already registered", async () => {
  registerUser.mockRejectedValue({
    response: { data: { error: { message: "Email is connected to existing account" } } },
  });

  render(<Register {...mockProps} />);
  fillForm();
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/already an account associated with that email/i)).toBeInTheDocument();
  });
});

test("shows generic error on unexpected backend failure", async () => {
  registerUser.mockRejectedValue({ response: { data: { error: { message: "Server exploded" } } } });

  render(<Register {...mockProps} />);
  fillForm();
  submitForm();

  await waitFor(() => {
    expect(screen.getByText(/Error creating user. Please try again later./i)).toBeInTheDocument();
  });
});

// --- Navigation ---

test("calls onShowLogin when Sign In button is clicked", () => {
  render(<Register {...mockProps} />);
  fireEvent.click(screen.getByText("Sign In"));
  expect(mockProps.onShowLogin).toHaveBeenCalled();
});





