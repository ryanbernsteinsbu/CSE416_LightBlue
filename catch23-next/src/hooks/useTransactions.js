import { useEffect, useState, useRef, useCallback } from 'react';

const getWsUrl = () => {
  return process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000/ws';
};

export const getApiUrl = () => {
  return (process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000/ws')
    .replace('wss://', 'https://')
    .replace('ws://', 'http://')
    .replace('/ws', '');
};

export function useTransactions() {
  const [toasts, setToasts] = useState([]);
  const [history, setHistory] = useState([]);
  const wsRef = useRef(null);
  const reconnectRef = useRef(null);

  const connect = useCallback(() => {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null;
    if (!userId) return;

    const ws = new WebSocket(getWsUrl());
    wsRef.current = ws;

    ws.onopen = () => console.log('[WS] Connected to transaction feed');

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'NEW_TRANSACTION') {
          const txn = { ...data.transaction, _id: crypto.randomUUID() };
          setToasts(prev => [...prev, txn]);
          setHistory(prev => [txn, ...prev]);
        }
      } catch {}
    };

    ws.onclose = () => {
      reconnectRef.current = setTimeout(connect, 5000);
    };

    ws.onerror = () => ws.close();
  }, []);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(reconnectRef.current);
      wsRef.current?.close();
    };
  }, [connect]);

  const dismissToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t._id !== id));
  }, []);

  return { toasts, dismissToast, history };
}