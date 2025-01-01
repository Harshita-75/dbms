import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();

  return (
    <div>
      <h2>Payment Success</h2>
      <p>{state.message}</p>
      <p>Amount: ${state.amount}</p>
      <p>Customer: {state.customerName}</p>
      <p>Payment Timestamp: {new Date(state.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Payment;
