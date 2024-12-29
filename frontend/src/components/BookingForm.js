// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [booking, setBooking] = useState({ customer: '', trip: '', seats: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('/api/bookings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(booking),
//     }).then(() => alert('Booking added successfully!'));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Make a Booking</h2>
//       <input
//         type="text"
//         placeholder="Customer ID"
//         value={booking.customer}
//         onChange={(e) => setBooking({ ...booking, customer: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Trip ID"
//         value={booking.trip}
//         onChange={(e) => setBooking({ ...booking, trip: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Seats"
//         value={booking.seats}
//         onChange={(e) => setBooking({ ...booking, seats: e.target.value })}
//       />
//       <button type="submit">Book Now</button>
//     </form>
//   );
// };

// export default BookingForm;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookingForm = ({ bookingDetails, setBookingDetails }) => {
//   const navigate = useNavigate();

//   const handleConfirm = () => {
//     // Generate random customerId and tripId
//     const customerId = `CUST${Math.floor(Math.random() * 10000)}`;
//     const tripId = `TRIP${Math.floor(Math.random() * 10000)}`;
//     const updatedDetails = { ...bookingDetails, customerId, tripId };

//     setBookingDetails(updatedDetails);
//     navigate('/confirm-booking', { state: updatedDetails });
//   };

//   return (
//     <div>
//       <h2>Make a Booking</h2>
//       <input
//         type="text"
//         placeholder="Source"
//         value={bookingDetails.source}
//         onChange={(e) => setBookingDetails({ ...bookingDetails, source: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Destination"
//         value={bookingDetails.destination}
//         onChange={(e) => setBookingDetails({ ...bookingDetails, destination: e.target.value })}
//       />
//       <button onClick={handleConfirm}>Confirm</button>
//     </div>
//   );
// };

// export default BookingForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookingForm = () => {
//   const [booking, setBooking] = useState({
//     customerName: '',
//     address: '',
//     phone: '',
//     source: '',
//     destination: '',
//     journeyDate: '',
//     endDate: '',
//   });
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBooking((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(booking),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert('Booking added successfully!');
//         navigate('/confirm-booking', { state: booking });
//       } else {
//         console.error('Booking failed:', await response.text());
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Make a Booking</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="customerName"
//           placeholder="Customer Name"
//           value={booking.customerName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="address"
//           placeholder="Address"
//           value={booking.address}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="phone"
//           placeholder="Phone"
//           value={booking.phone}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="source"
//           placeholder="Source"
//           value={booking.source}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="destination"
//           placeholder="Destination"
//           value={booking.destination}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="journeyDate"
//           type="date"
//           value={booking.journeyDate}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="endDate"
//           type="date"
//           value={booking.endDate}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    customerName: '',
    address: '',
    phone: '',
    source: '',
    destination: '',
    journeyDate: '',
    endDate: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Booking added successfully!');
        navigate('/confirm-booking', { state: booking });
      } else {
        console.error('Booking failed:', await response.text());
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      padding: '20px',
    }}
  >
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Make a Booking</h2>
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '300px',
      }}
    >
      <input
        name="customerName"
        placeholder="Customer Name"
        value={booking.customerName}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="address"
        placeholder="Address"
        value={booking.address}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={booking.phone}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="source"
        placeholder="Source"
        value={booking.source}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="destination"
        placeholder="Destination"
        value={booking.destination}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="journeyDate"
        type="date"
        value={booking.journeyDate}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <input
        name="endDate"
        type="date"
        value={booking.endDate}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <button
        type="Submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          width: '100%',
        }}
      >
        Book Now
      </button>
    </form>
  </div>
);
};
