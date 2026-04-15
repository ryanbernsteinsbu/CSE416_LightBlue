export default function ConfirmDeleteModal({ isOpen, leagueName, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="del-backdrop">
      <div className="del-card" role="dialog" aria-modal="true">
        <div className="del-inner">
          <div className="del-title">ARE YOU SURE YOU WANT TO DELETE</div>
          <div className="del-league">{leagueName}?</div>
          <div className="del-warning">YOU CANNOT UNDO THIS ACTION</div>
        </div>

        <div className="del-actions">
          <button className="del-btn" type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className="del-btn danger" type="button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}