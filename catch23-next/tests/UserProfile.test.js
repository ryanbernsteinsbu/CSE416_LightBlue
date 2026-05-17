import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserProfile from "../src/components/UserProfile";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

jest.mock("axios");
jest.mock("jwt-decode", () => ({ jwtDecode: jest.fn() }));

const mockDecoded = {
  displayName: "John Doe",
  email: "john@example.com",
};

beforeEach(() => {
  jest.clearAllMocks();
  jwtDecode.mockReturnValue(mockDecoded);
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn((key) => {
        if (key === "token") return "mock-token";
        if (key === "user_id") return "42";
        return null;
      }),
      removeItem: jest.fn(),
    },
    writable: true,
  });
  // Prevent jsdom errors for window.location.href
  delete window.location;
  window.location = { href: "" };
});

test("renders display name", async () => {
  render(<UserProfile />);
  await waitFor(() => {
    expect(screen.getAllByText("John Doe").length).toBeGreaterThan(0);
  });
});

test("renders email address", async () => {
  render(<UserProfile />);
  await waitFor(() => {
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });
});

test("renders Edit Profile and Change Password buttons initially", async () => {
  render(<UserProfile />);
  await waitFor(() => {
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    expect(screen.getByText("Change Password")).toBeInTheDocument();
  });
});

test("renders Log Out button", async () => {
  render(<UserProfile />);
  await waitFor(() => {
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });
});

test("clicking Edit Profile opens edit panel", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Edit Profile"));
  fireEvent.click(screen.getByText("Edit Profile"));
  await waitFor(() => {
    expect(screen.getByText("Edit Display Name")).toBeInTheDocument();
  });
});

test("clicking Change Password opens password panel", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Change Password"));
  fireEvent.click(screen.getByText("Change Password"));
  await waitFor(() => {
    expect(screen.getByText("Change Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Current password")).toBeInTheDocument();
  });
});

test("clicking Cancel in edit panel closes it", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Edit Profile"));
  fireEvent.click(screen.getByText("Edit Profile"));
  await waitFor(() => screen.getByText("Edit Display Name"));
  fireEvent.click(screen.getByText("Cancel"));
  await waitFor(() => {
    expect(screen.queryByText("Edit Display Name")).not.toBeInTheDocument();
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
  });
});

test("shows error when same display name is submitted in edit panel", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Edit Profile"));
  fireEvent.click(screen.getByText("Edit Profile"));
  await waitFor(() => screen.getByPlaceholderText("New display name"));
  // Pre-filled with current name
  fireEvent.click(screen.getByText("Save"));
  await waitFor(() => {
    expect(screen.getByText(/already your display name/i)).toBeInTheDocument();
  });
});

test("calls axios.put and updates display name on successful edit", async () => {
  axios.put.mockResolvedValue({ data: {} });
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Edit Profile"));
  fireEvent.click(screen.getByText("Edit Profile"));
  await waitFor(() => screen.getByPlaceholderText("New display name"));
  fireEvent.change(screen.getByPlaceholderText("New display name"), { target: { value: "New Name" } });
  fireEvent.click(screen.getByText("Save"));
  await waitFor(() => {
    expect(axios.put).toHaveBeenCalledWith(
      "/api/auth/update-profile",
      { username: "New Name" },
      expect.any(Object)
    );
  });
});

test("shows password mismatch error in change password panel", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Change Password"));
  fireEvent.click(screen.getByText("Change Password"));
  await waitFor(() => screen.getByPlaceholderText("Current password"));
  fireEvent.change(screen.getByPlaceholderText("Current password"), { target: { value: "OldPass1!" } });
  fireEvent.change(screen.getByPlaceholderText("New password"), { target: { value: "NewPass1!" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm new password"), { target: { value: "DiffPass1!" } });
  fireEvent.click(screen.getByText("Save Password"));
  await waitFor(() => {
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });
});

test("shows short password error in change password panel", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Change Password"));
  fireEvent.click(screen.getByText("Change Password"));
  await waitFor(() => screen.getByPlaceholderText("Current password"));
  fireEvent.change(screen.getByPlaceholderText("Current password"), { target: { value: "Old" } });
  fireEvent.change(screen.getByPlaceholderText("New password"), { target: { value: "short" } });
  fireEvent.change(screen.getByPlaceholderText("Confirm new password"), { target: { value: "short" } });
  fireEvent.click(screen.getByText("Save Password"));
  await waitFor(() => {
    expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
  });
});

test("Log Out clears localStorage and redirects", async () => {
  render(<UserProfile />);
  await waitFor(() => screen.getByText("Log Out"));

  fireEvent.click(screen.getByText("Log Out"));

  expect(window.localStorage.removeItem).toHaveBeenCalledWith("token");
  expect(window.localStorage.removeItem).toHaveBeenCalledWith("user_id");
  expect(window.location.href).toBe("http://localhost/");
});