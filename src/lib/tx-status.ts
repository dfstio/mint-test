// components/TransactionStatus.js
/*

import { useState, useEffect } from 'react';

const fetchTxStatus = async (txId) => {
  // Replace with the actual API call to fetch the transaction status
  const response = await fetch(`/api/tx-status?txId=${txId}`);
  const data = await response.json();
  return data.status;
};

const TransactionStatus = ({ txId }) => {
  const [status, setStatus] = useState('pending');
  const [lastStatus, setLastStatus] = useState('pending');

  useEffect(() => {
    const interval = setInterval(async () => {
      const currentStatus = await fetchTxStatus(txId);
      if (currentStatus !== lastStatus) {
        setStatus(currentStatus);
        setLastStatus(currentStatus);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [txId, lastStatus]);

  return (
    <div>
      <h1>Transaction Status</h1>
      <p>Transaction ID: {txId}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default TransactionStatus;

*/
