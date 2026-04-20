import { render, screen, waitFor, fireEvent, act } from "@testing-library/react";
import Login from "../src/components/Login";
import { loginUser } from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
    loginUser: jest.fn(),
}));

window.alert = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

test("renders form fields (email, password, buttons", () => {
    render(<Login/>);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
});

test("alerts when submitting with no email", async () => {
    render(<Login />);

    fireEvent.click(screen.getByText("Sign in"));

    expect(window.alert).toHaveBeenCalledWith("Please enter email");
    expect(loginUser).not.toHaveBeenCalled();
});

test("calls loginUser with email and password on submit", async () => {
    loginUser.mockResolvedValue({ data: { id: "123" } });
    render(<Login onLoginSuccess={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com"},
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => {
        expect(loginUser).toHaveBeenCalledWith("test@test.com", "password123");
    });
})

test("calls onLoginSuccess with data on successful login", async () => {
    const mockData = { id: "1", username: "Jackie" };
    loginUser.mockResolvedValue({ data: mockData });
    const onLoginSuccess = jest.fn();

    render(<Login onLoginSuccess={onLoginSuccess} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" }
    });
    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => {
        expect(onLoginSuccess).toHaveBeenCalledWith(mockData);
    });
});

test("shows invalid credentials error banner on bad login", async () => {
    loginUser.mockRejectedValue({
        response: { data: { message: "Invalid user credentials"}}
    });

    render(<Login/>);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "wrong@test.com" }
    });
    fireEvent.click(screen.getByText("Sign in"));

    expect(await screen.findByText(/Invalid user credentials/i)).toBeInTheDocument();
});

test("shows error banner on any bad error or unexpected error", async () => {
    loginUser.mockRejectedValue({
        response: { data: { message: "Random zero issue"}}
    });

    render(<Login/>);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "wrong@test.com" }
    });
    fireEvent.click(screen.getByText("Sign in"));

    expect(await screen.findByText(/An error has occurred/i)).toBeInTheDocument();
});

test("error banner clears after 3 seconds", async () => {
    jest.useFakeTimers();
    loginUser.mockRejectedValue({
        response: { data: { message: "Invalid user credentials" } },
    });

    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
    });
    fireEvent.click(screen.getByText("Sign in"));

    expect(await screen.findByText(/Invalid user credentials/i)).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(3000));

    await waitFor(() => {
        expect(screen.queryByText(/Invalid user credentials/i)).not.toBeInTheDocument();
    });

    jest.useRealTimers();
});

test("clicking Register calls onShowRegister", () => {
    const onShowRegister = jest.fn();
    render(<Login onShowRegister={onShowRegister} />);

    fireEvent.click(screen.getByText("Register"));
    expect(onShowRegister).toHaveBeenCalledTimes(1);
});