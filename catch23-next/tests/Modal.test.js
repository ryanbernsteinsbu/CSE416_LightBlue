import { render, screen } from "@testing-library/react";
import Modal from "../src/components/Modal";

test("renders nothing when isOpen is false", () => {
  const { container } = render(
    <Modal isOpen={false}>
      <div>Child Content</div>
    </Modal>
  );
  expect(container.firstChild).toBeNull();
  expect(screen.queryByText("Child Content")).not.toBeInTheDocument();
});

test("renders children when isOpen is true", () => {
  render(
    <Modal isOpen={true}>
      <div>Child Content</div>
    </Modal>
  );
  expect(screen.getByText("Child Content")).toBeInTheDocument();
});

test("renders backdrop element when open", () => {
  const { container } = render(
    <Modal isOpen={true}>
      <span>Test</span>
    </Modal>
  );
  expect(container.querySelector(".modal-backdrop")).toBeInTheDocument();
});

test("renders modal card element when open", () => {
  const { container } = render(
    <Modal isOpen={true}>
      <span>Test</span>
    </Modal>
  );
  expect(container.querySelector(".modal-card")).toBeInTheDocument();
});

test("renders multiple children correctly", () => {
  render(
    <Modal isOpen={true}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Modal>
  );
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Second")).toBeInTheDocument();
  expect(screen.getByText("Third")).toBeInTheDocument();
});