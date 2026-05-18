import { render, screen, fireEvent } from "@testing-library/react";
import DraftBoardTopBar from "../src/components/DraftBoardTopBar";

const league = {
  id: 1,
  title: "Sim League",
  format: "Auction",
  season: "2025",
};

const teams = [
  { id: 10, name: "Team Alpha" },
  { id: 20, name: "Team Beta" },
];

test("renders mode buttons", () => {
  render(
    <DraftBoardTopBar
      league={league}
      mode="simulation"
      onModeChange={jest.fn()}
      onBack={jest.fn()}
      teams={teams}
      principalTeamId={10}
      onPrincipalTeamChange={jest.fn()}
    />
  );

  expect(screen.getByRole("button", { name: "Pre-Draft" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Simulation" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Live Draft" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Taxi Draft" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Minor League" })).toBeInTheDocument();
});

test("clicking mode buttons calls onModeChange", () => {
  const onModeChange = jest.fn();

  render(
    <DraftBoardTopBar
      league={league}
      mode="simulation"
      onModeChange={onModeChange}
      onBack={jest.fn()}
      teams={teams}
      principalTeamId={10}
      onPrincipalTeamChange={jest.fn()}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "Pre-Draft" }));
  expect(onModeChange).toHaveBeenCalledWith("predraft");

  fireEvent.click(screen.getByRole("button", { name: "Live Draft" }));
  expect(onModeChange).toHaveBeenCalledWith("live");

  fireEvent.click(screen.getByRole("button", { name: "Taxi Draft" }));
  expect(onModeChange).toHaveBeenCalledWith("taxi");

  fireEvent.click(screen.getByRole("button", { name: "Minor League" }));
  expect(onModeChange).toHaveBeenCalledWith("minor");
});

test("clicking back calls onBack", () => {
  const onBack = jest.fn();

  render(
    <DraftBoardTopBar
      league={league}
      mode="simulation"
      onModeChange={jest.fn()}
      onBack={onBack}
      teams={teams}
      principalTeamId={10}
      onPrincipalTeamChange={jest.fn()}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "← Back" }));
  expect(onBack).toHaveBeenCalledTimes(1);
});

test("changing Your Team calls onPrincipalTeamChange", () => {
  const onPrincipalTeamChange = jest.fn();

  render(
    <DraftBoardTopBar
      league={league}
      mode="simulation"
      onModeChange={jest.fn()}
      onBack={jest.fn()}
      teams={teams}
      principalTeamId={10}
      onPrincipalTeamChange={onPrincipalTeamChange}
    />
  );

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "20" },
  });

  expect(onPrincipalTeamChange).toHaveBeenCalledWith(20);
});