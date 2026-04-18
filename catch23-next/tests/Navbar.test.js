import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

const mockPush = jest.fn();
const mockPathname = jest.fn(() => "/");

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => mockPathname(),
}));

jest.mock("next/link", () => {
  return function MockLink({ children, href, onClick }) {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };
});

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "123"),
    },
    writable: true,
  });
});

// -- Render Tests --

test("renders navbar with menu button and profile button", () => {
  render(<Navbar />);

  expect(screen.getByLabelText("Menu")).toBeInTheDocument();
  expect(screen.getByLabelText("Profile")).toBeInTheDocument();
  expect(screen.getByText("CATCH 23")).toBeInTheDocument();
});

test("navigation menu is hidden by default", () => {
  render(<Navbar />);
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

// -- Menu Toggle Tests --

test("clicking menu button opens the navigation menu", () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));

  expect(screen.getByRole("menu")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Player Information")).toBeInTheDocument();
});

test("clicking menu button again closes the navigation menu", () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  expect(screen.getByRole("menu")).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText("Menu"));
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

test("menu button has correct aria-expanded attribute when open", () => {
  render(<Navbar />);
  const menuBtn = screen.getByLabelText("Menu");

  expect(menuBtn).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(menuBtn);
  expect(menuBtn).toHaveAttribute("aria-expanded", "true");
});

// -- Navigation Tests --

// --- Navigation Tests ---

test("clicking CATCH 23 brand navigates to home", () => {
  render(<Navbar />);

  fireEvent.click(screen.getByText("CATCH 23"));

  expect(mockPush).toHaveBeenCalledWith("/");
});

test("clicking profile button navigates to /profile", () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Profile"));

  expect(mockPush).toHaveBeenCalledWith("/profile");
});

test("clicking Home in menu calls router.push when not on home page", () => {
  mockPathname.mockReturnValue("/other");
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  fireEvent.click(screen.getByText("Home"));

  expect(mockPush).toHaveBeenCalledWith("/");
});

test("clicking Home in menu uses window.location.href when already on home page", () => {
  mockPathname.mockReturnValue("/");
  delete window.location;
  window.location = { href: "" };

  render(<Navbar />);
  fireEvent.click(screen.getByLabelText("Menu"));
  fireEvent.click(screen.getByText("Home"));

  expect(window.location.href).toBe("/");
});

test("clicking Player Information link closes the menu", async () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  expect(screen.getByRole("menu")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Player Information"));

  await waitFor(() => {
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

test("clicking Home in menu closes the menu", async () => {
  mockPathname.mockReturnValue("/other");
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  fireEvent.click(screen.getByText("Home"));

  await waitFor(() => {
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

// -- Click Outside Tests -- 

test("clicking outside the menu closes it", async () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  expect(screen.getByRole("menu")).toBeInTheDocument();

  fireEvent.mouseDown(document.body);

  await waitFor(() => {
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

test("clicking inside the menu does not close it", async () => {
  render(<Navbar />);

  fireEvent.click(screen.getByLabelText("Menu"));
  const menu = screen.getByRole("menu");

  fireEvent.mouseDown(menu);

  await waitFor(() => {
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
});