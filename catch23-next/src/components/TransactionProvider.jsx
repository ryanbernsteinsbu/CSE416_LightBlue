'use client';
import { useTransactions } from '../hooks/useTransactions';
import TransactionToast from './TransactionToast';

export default function TransactionProvider({ children }) {
  const { toasts, dismissToast } = useTransactions();

  return (
    <>
      {children}
      <div className="txn-toast-stack">
        {toasts.map(toast => (
          <TransactionToast key={toast._id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </>
  );
}