import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmDeleteModal from "../src/components/ConfirmDeleteModal";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders nothing when isOpen is false", () => {
  const { container } = render(
    <ConfirmDeleteModal isOpen={false} leagueName="League A" onCancel={jest.fn()} onConfirm={jest.fn()} />
  );
  expect(container.firstChild).toBeNull();
});

test("renders modal content when isOpen is true", () => {
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="League A" onCancel={jest.fn()} onConfirm={jest.fn()} />
  );
  expect(screen.getByText(/League A/i)).toBeInTheDocument();
  expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
});

test("renders the league name in the modal", () => {
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="My Fantasy League" onCancel={jest.fn()} onConfirm={jest.fn()} />
  );
  expect(screen.getByText(/My Fantasy League/i)).toBeInTheDocument();
});

test("renders warning text about irreversible action", () => {
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="Test" onCancel={jest.fn()} onConfirm={jest.fn()} />
  );
  expect(screen.getByText(/cannot undo/i)).toBeInTheDocument();
});

test("renders Cancel and Delete buttons", () => {
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="Test" onCancel={jest.fn()} onConfirm={jest.fn()} />
  );
  expect(screen.getByText("Cancel")).toBeInTheDocument();
  expect(screen.getByText("Delete")).toBeInTheDocument();
});

test("calls onCancel when Cancel is clicked", () => {
  const onCancel = jest.fn();
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="Test" onCancel={onCancel} onConfirm={jest.fn()} />
  );
  fireEvent.click(screen.getByText("Cancel"));
  expect(onCancel).toHaveBeenCalledTimes(1);
});

test("calls onConfirm when Delete is clicked", () => {
  const onConfirm = jest.fn();
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="Test" onCancel={jest.fn()} onConfirm={onConfirm} />
  );
  fireEvent.click(screen.getByText("Delete"));
  expect(onConfirm).toHaveBeenCalledTimes(1);
});

test("does not call onConfirm when Cancel is clicked", () => {
  const onConfirm = jest.fn();
  render(
    <ConfirmDeleteModal isOpen={true} leagueName="Test" onCancel={jest.fn()} onConfirm={onConfirm} />
  );
  fireEvent.click(screen.getByText("Cancel"));
  expect(onConfirm).not.toHaveBeenCalled();
});