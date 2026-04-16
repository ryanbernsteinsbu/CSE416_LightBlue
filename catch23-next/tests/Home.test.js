import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "../src/components/Home";

import {
  getUserLeagues,
  getLeagueTeams,
} from "../src/lib/api";

jest.mock("../src/lib/api", () => ({
  getUserLeagues: jest.fn(),
  getLeagueTeams: jest.fn(),
  deleteLeague: jest.fn(),
}));

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => "123"),
    },
    writable: true,
  });
});

test("renders empty state when no leagues exist", async () => {
  getUserLeagues.mockResolvedValue({ data: [] });

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByText("No leagues yet.")).toBeInTheDocument();
  });
});

test("renders league cards", async () => {
  getUserLeagues.mockResolvedValue({
    data: [
      { id: 1, title: "Jackie Wackie"},
    ],
  });

  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<Home />);

  expect(await screen.findByText("Jackie Wackie")).toBeInTheDocument();
});

test("opens create league modal when + button is clicked", async () => {
  getUserLeagues.mockResolvedValue({ data: [] });
  getLeagueTeams.mockResolvedValue({ data: [] });

  render(<Home />);

  const createButton = screen.getByText("+");

  fireEvent.click(createButton);

  // modal should now be rendered
  await waitFor(() => {
    expect(screen.getByText(/create league/i)).toBeInTheDocument();
  });
});