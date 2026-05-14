'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTransactions, getApiUrl} from '../../hooks/useTransactions';

const BASE_URL = getApiUrl();

export default function TransactionWirePage() {
  const router = useRouter();
  const { history , toasts, } = useTransactions();
  const all = history;
  return (
    <div className="home home-padded">
      <div className="db-header">
        <div className="db-header-left">
          <button className="db-back-btn" onClick={() => router.back()}>← Back</button>
          <div>
            <div className="db-league-name">Transaction Wire</div>
            <div className="db-league-meta">Live MLB transactions • Updates every 60s</div>
          </div>
        </div>
        <div className="db-header-right">
          <div className="db-stat">
            <span className="db-stat-num">{all.length}</span>
            <span className="db-stat-label">Transactions</span>
          </div>
          {toasts.length > 0 && (
            <div className="db-stat">
              <span className="db-stat-num db-stat-num--complete">{toasts.length}</span>
              <span className="db-stat-label">New Today</span>
            </div>
          )}
        </div>
      </div>

      <div className="txn-wire-feed">
        {all.length === 0 && (
          <div className="db-empty">
            <div className="db-empty-icon">📋</div>
            <div className="db-empty-title">No transactions yet</div>
            <div className="db-empty-sub">MLB transactions will appear here in real time</div>
          </div>
        )}
        {all.map((txn, i) => {
          const fromTeam = txn.fromTeam?.name;
          const toTeam = txn.toTeam?.name;
          const isNew = toasts.some(l => l.id === txn.id);
          return (
            <div key={txn.id ?? i} className={`txn-wire-entry ${isNew ? 'txn-wire-entry--new' : ''}`}>
              <div className="txn-wire-meta">
                <span className="txn-wire-type">{txn.typeCode}</span>
                <span className="txn-wire-date">{txn.date}</span>
                {isNew && <span className="txn-wire-badge">NEW</span>}
              </div>
              {txn.player?.fullName && (
                <div className="txn-wire-player">{txn.player.fullName}</div>
              )}
              <div className="txn-wire-desc">{txn.description}</div>
              {(fromTeam || toTeam) && (
                <div className="txn-wire-teams">
                  {fromTeam && <span className="txn-wire-from">{fromTeam}</span>}
                  {fromTeam && toTeam && <span className="txn-wire-arrow">→</span>}
                  {toTeam && <span className="txn-wire-to">{toTeam}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
