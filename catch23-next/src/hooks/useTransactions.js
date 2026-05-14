import { useEffect, useState, useRef, useCallback } from 'react';


export const getApiUrl = () => {
    const getESTDate = () => {
        return new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/New_York',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(new Date());
    };
    const date = getESTDate()
    return `https://statsapi.mlb.com/api/v1/transactions?&startDate=${date}&endDate=${date}`
};

export function useTransactions() {
    const [toasts, setToasts] = useState([]);
    const [history, setHistory] = useState([]);
    const isFirstLoad = useRef(true);
    const seenIds = useRef(new Set());
    const fetchTransactions = useCallback(async () => {
        try {
            const res = await fetch(getApiUrl());
            
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }
            
            const data = await res.json();
            
            const transactions = data.transactions || [];
            
            const newTransactions = [];
            
            for (const txn of transactions) {
                // console.log(txn)
                const id = txn.id;
                
                if (!seenIds.current.has(id)) {
                    seenIds.current.add(id);
                    const transaction = {
                        ...txn,
                        _id: crypto.randomUUID(),
                    };
                    newTransactions.push(transaction);
                }
            }
            
            if (newTransactions.length > 0) {
                newTransactions.reverse();
                
                setHistory(prev => [
                    ...newTransactions,
                    ...prev,
                ]);

                if (isFirstLoad.current) {
                    isFirstLoad.current = false;

                    return;
                }
                setToasts(prev => [...prev, ...newTransactions]);

            }

        } catch (err) {
            console.error('[Transactions] Poll failed:', err);
        }
    }, []);
    
    useEffect(() => {
        fetchTransactions();
        
        // poll every 60 seconds
        const interval = setInterval(fetchTransactions, 60000);
        
        return () => clearInterval(interval);
    }, [fetchTransactions]);
    const dismissToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t._id !== id));
    }, []);
    return { toasts, dismissToast, history };
}
