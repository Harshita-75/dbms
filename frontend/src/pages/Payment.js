import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { source, destination } = location.state || {}; // Get data from navigation state

  const getPackageDetails = () => {
    // Simulated package details based on source and destination
    if (source === 'mumbai' && destination === 'delhi') {
      return { price: 500, description: 'Package from mumbai to delhi' };
    }
    return { price: 300, description: `Package from ${source} to ${destination}` };
  };

  const packageDetails = getPackageDetails();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Payment Details</h2>
      <p>Source: {source}</p>
      <p>Destination: {destination}</p>
      <p>Package Description: {packageDetails.description}</p>
      <p>Amount: ₹{packageDetails.price}</p>
      <button>Confirm Payment</button>
    </div>
  );
};

export default Payment;
