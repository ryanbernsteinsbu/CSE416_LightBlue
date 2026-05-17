import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

// Mock next/link, next/navigation
jest.mock("next/link", () => ({ children, href, onClick }) => (
  <a href={href} onClick={onClick}>{children}</a>
));

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/",
}));

beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => null), removeItem: jest.fn() },
    writable: true,
  });
});

test("renders CATCH 23 brand text", () => {
  render(<Navbar />);
  expect(screen.getByText("CATCH 23")).toBeInTheDocument();
});

test("renders hamburger menu button", () => {
  render(<Navbar />);
  expect(screen.getByLabelText("Menu")).toBeInTheDocument();
});

test("menu is hidden by default", () => {
  render(<Navbar />);
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

test("clicking hamburger opens menu with nav items", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByLabelText("Menu"));
  expect(screen.getByRole("menu")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Player Information")).toBeInTheDocument();
  expect(screen.getByText("Transaction Wire")).toBeInTheDocument();
});

test("clicking a menu item closes the menu", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByLabelText("Menu"));
  fireEvent.click(screen.getByText("Home"));
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

test("profile button is not visible when not logged in", () => {
  render(<Navbar />);
  expect(screen.queryByLabelText("Profile")).not.toBeInTheDocument();
});

test("profile button is visible when token is in localStorage", () => {
  window.localStorage.getItem.mockReturnValue("mock-token");
  render(<Navbar />);
  expect(screen.getByLabelText("Profile")).toBeInTheDocument();
});

test("clicking CATCH 23 brand navigates to home", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByText("CATCH 23"));
  expect(mockPush).toHaveBeenCalledWith("/");
});

test("clicking Profile button navigates to /profile", () => {
  window.localStorage.getItem.mockReturnValue("mock-token");
  render(<Navbar />);
  fireEvent.click(screen.getByLabelText("Profile"));
  expect(mockPush).toHaveBeenCalledWith("/profile");
});