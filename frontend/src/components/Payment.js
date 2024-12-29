import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination, packageAmount, customerName } = location.state || {};

  const handlePayment = () => {
    alert('Payment successful!');
    navigate('/confirmation'); // Redirect to a confirmation page
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '500px',
        margin: '50px auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2>Payment Details</h2>
      <p><strong>Customer Name:</strong> {customerName}</p>
      <p><strong>Source:</strong> {source}</p>
      <p><strong>Destination:</strong> {destination}</p>
      <p><strong>Package Amount:</strong> ₹{packageAmount}</p>
      <button
        onClick={handlePayment}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default Payment;
