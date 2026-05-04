'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function TransactionToast({ toast, onDismiss }) {
  const router = useRouter();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => onDismiss(toast._id), 6000);
    return () => clearTimeout(timerRef.current);
  }, [toast._id, onDismiss]);

  const playerName = toast.player?.fullName ?? 'Unknown Player';
  const fromTeam = toast.fromTeam?.name;
  const toTeam = toast.toTeam?.name;
  const teamLine = fromTeam && toTeam
    ? `${fromTeam} → ${toTeam}`
    : (toTeam ?? fromTeam ?? '');

  return (
    <div className="txn-toast">
      <div className="txn-toast-header">
        <span className="txn-toast-badge">MLB Transaction</span>
        <button className="txn-toast-close" onClick={() => onDismiss(toast._id)}>×</button>
      </div>
      <div className="txn-toast-player">{playerName}</div>
      <div className="txn-toast-desc">{toast.description ?? toast.typeCode}</div>
      {teamLine && <div className="txn-toast-teams">{teamLine}</div>}
      <div className="txn-toast-actions">
        <span className="txn-toast-date">{toast.date}</span>
        <button
          className="txn-toast-wire-btn"
          onClick={() => { onDismiss(toast._id); router.push('/transactions'); }}
        >
          View Wire →
        </button>
      </div>
    </div>
  );
}