// // // // import React, { useState } from 'react';
// // // // import InputField from '../components/InputField';
// // // // import Button from '../components/Button';

// // // // const ConfirmBooking = () => {
// // // //   const [distance, setDistance] = useState('');
// // // //   const [amount, setAmount] = useState('');

// // // //   const handleCalculate = () => {
// // // //     const calculatedAmount = distance * 10; // Example calculation
// // // //     setAmount(calculatedAmount);
// // // //   };

// // // //   const containerStyle = {
// // // //     padding: '20px',
// // // //     backgroundColor: '#2b2b42',
// // // //     color: '#fff',
// // // //     minHeight: '100vh',
// // // //     textAlign: 'center',
// // // //   };

// // // //   const formStyle = {
// // // //     maxWidth: '500px',
// // // //     margin: '0 auto',
// // // //     backgroundColor: '#3e3e58',
// // // //     padding: '20px',
// // // //     borderRadius: '8px',
// // // //   };

// // // //   return (
// // // //     <div style={containerStyle}>
// // // //       <h2>Confirm Booking</h2>
// // // //       <div style={formStyle}>
// // // //         <InputField label="Distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
// // // //         <Button text="Calculate" onClick={handleCalculate} color="#17a2b8" />
// // // //         <InputField label="Amount" value={amount} type="number" readOnly />
// // // //         <Button text="Confirm Booking" color="#28a745" />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ConfirmBooking;

// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const ConfirmBooking = () => {
// // //   const [formData, setFormData] = useState({
// // //     tripId: "",
// // //     source: "",
// // //     destination: "",
// // //     journeyDate: "",
// // //     endDate: "",
// // //     customerName: "",
// // //     address: "",
// // //     phone: "",
// // //   });

// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/bookings", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ ...formData, customerId: "AUTO_GENERATED_ID" }),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate("/confirmation", { state: { ...data } }); // Pass data to confirmation page
// // //       } else {
// // //         console.error("Booking failed:", await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error("Error occurred:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="text"
// // //           name="tripId"
// // //           placeholder="Trip ID"
// // //           value={formData.tripId}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="text"
// // //           name="source"
// // //           placeholder="Source"
// // //           value={formData.source}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="text"
// // //           name="destination"
// // //           placeholder="Destination"
// // //           value={formData.destination}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="date"
// // //           name="journeyDate"
// // //           value={formData.journeyDate}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="date"
// // //           name="endDate"
// // //           value={formData.endDate}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="text"
// // //           name="customerName"
// // //           placeholder="Customer Name"
// // //           value={formData.customerName}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <textarea
// // //           name="address"
// // //           placeholder="Address"
// // //           value={formData.address}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <input
// // //           type="tel"
// // //           name="phone"
// // //           placeholder="Phone Number"
// // //           value={formData.phone}
// // //           onChange={handleChange}
// // //           required
// // //         />
// // //         <button type="submit">Confirm</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;



// // import React from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // const ConfirmBooking = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();

// //   const handleConfirm = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/bookings', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(state),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         navigate('/confirmation', { state: data });
// //       } else {
// //         console.error('Error:', await response.text());
// //       }
// //     } catch (error) {
// //       console.error('Network Error:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Confirm Booking</h2>
// //       <pre>{JSON.stringify(state, null, 2)}</pre>
// //       <button onClick={handleConfirm}>Confirm</button>
// //     </div>
// //   );
// // };

// // export default ConfirmBooking;

// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const ConfirmBooking = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const handleConfirm = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(state),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         navigate('/confirmation', { state: data });
//       } else {
//         console.error('Error:', await response.text());
//       }
//     } catch (error) {
//       console.error('Network Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Confirm Booking</h2>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//       <button onClick={handleConfirm}>Confirm</button>
//     </div>
//   );
// };

// export default ConfirmBooking;


// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const ConfirmBooking = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const handleConfirm = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/booking', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(state),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         navigate('/confirmation', { state: data });
//       } else {
//         console.error('Error:', await response.text());
//       }
//     } catch (error) {
//       console.error('Network Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Confirm Booking</h2>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//       <button onClick={handleConfirm}>Confirm</button>
//     </div>
//   );
// };

// export default ConfirmBooking;




import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/confirmation', { state: data });
      } else {
        console.error('Error:', await response.text());
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };

  return (
    <div>
      <h2>Confirm Booking</h2>
      <p>Customer Name: {state.customerName}</p>
      <p>Journey Date: {state.journeyDate}</p>
      <p>End Date: {state.endDate}</p>
      
      <p>Price: ${state.price}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmBooking;
