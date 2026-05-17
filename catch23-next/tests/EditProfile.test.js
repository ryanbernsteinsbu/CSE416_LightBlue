import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditProfile from "../src/components/EditProfile";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn((key) => {
        if (key === "token") return "mock-token";
        if (key === "user_id") return "42";
        return null;
      }),
    },
    writable: true,
  });
});

test("renders Edit Display Name heading", () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  expect(screen.getByText(/Edit Display Name/i)).toBeInTheDocument();
});

test("pre-fills input with currentUsername", () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  expect(screen.getByPlaceholderText("New username").value).toBe("john");
});

test("shows error when same username is submitted", async () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  fireEvent.submit(screen.getByPlaceholderText("New username").closest("form"));
  await waitFor(() => {
    expect(screen.getByText(/already your username/i)).toBeInTheDocument();
  });
});

test("shows error when username is cleared and submitted", async () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New username"), { target: { value: "" } });
  fireEvent.submit(screen.getByPlaceholderText("New username").closest("form"));
  await waitFor(() => {
    expect(screen.getByText(/cannot be empty/i)).toBeInTheDocument();
  });
});

test("shows character count", () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  expect(screen.getByText(/4\/32 characters/i)).toBeInTheDocument();
});

test("character count updates as user types", () => {
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New username"), { target: { value: "hello" } });
  expect(screen.getByText(/5\/32 characters/i)).toBeInTheDocument();
});

test("calls axios.put and onUpdated on successful update", async () => {
  axios.put.mockResolvedValue({ data: {} });
  const onUpdated = jest.fn();
  render(<EditProfile currentUsername="john" onUpdated={onUpdated} />);
  fireEvent.change(screen.getByPlaceholderText("New username"), { target: { value: "newname" } });
  fireEvent.submit(screen.getByPlaceholderText("New username").closest("form"));
  await waitFor(() => {
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(onUpdated).toHaveBeenCalledWith("newname");
  });
});

test("shows error message on API failure", async () => {
  axios.put.mockRejectedValue({ response: { data: { error: "Name taken" } } });
  render(<EditProfile currentUsername="john" onUpdated={jest.fn()} />);
  fireEvent.change(screen.getByPlaceholderText("New username"), { target: { value: "newname" } });
  fireEvent.submit(screen.getByPlaceholderText("New username").closest("form"));
  await waitFor(() => {
    expect(screen.getByText("Name taken")).toBeInTheDocument();
  });
});