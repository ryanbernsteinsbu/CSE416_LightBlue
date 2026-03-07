export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        {children}
      </div>
    </div>
  );
}