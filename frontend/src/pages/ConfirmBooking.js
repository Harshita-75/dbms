// // // // // // import React, { useState } from 'react';
// // // // // // import InputField from '../components/InputField';
// // // // // // import Button from '../components/Button';

// // // // // // const ConfirmBooking = () => {
// // // // // //   const [distance, setDistance] = useState('');
// // // // // //   const [amount, setAmount] = useState('');

// // // // // //   const handleCalculate = () => {
// // // // // //     const calculatedAmount = distance * 10; // Example calculation
// // // // // //     setAmount(calculatedAmount);
// // // // // //   };

// // // // // //   const containerStyle = {
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#2b2b42',
// // // // // //     color: '#fff',
// // // // // //     minHeight: '100vh',
// // // // // //     textAlign: 'center',
// // // // // //   };

// // // // // //   const formStyle = {
// // // // // //     maxWidth: '500px',
// // // // // //     margin: '0 auto',
// // // // // //     backgroundColor: '#3e3e58',
// // // // // //     padding: '20px',
// // // // // //     borderRadius: '8px',
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={containerStyle}>
// // // // // //       <h2>Confirm Booking</h2>
// // // // // //       <div style={formStyle}>
// // // // // //         <InputField label="Distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
// // // // // //         <Button text="Calculate" onClick={handleCalculate} color="#17a2b8" />
// // // // // //         <InputField label="Amount" value={amount} type="number" readOnly />
// // // // // //         <Button text="Confirm Booking" color="#28a745" />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ConfirmBooking;

// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const ConfirmBooking = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     tripId: "",
// // // // //     source: "",
// // // // //     destination: "",
// // // // //     journeyDate: "",
// // // // //     endDate: "",
// // // // //     customerName: "",
// // // // //     address: "",
// // // // //     phone: "",
// // // // //   });

// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/api/bookings", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ ...formData, customerId: "AUTO_GENERATED_ID" }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         navigate("/confirmation", { state: { ...data } }); // Pass data to confirmation page
// // // // //       } else {
// // // // //         console.error("Booking failed:", await response.text());
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error occurred:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Confirm Booking</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="tripId"
// // // // //           placeholder="Trip ID"
// // // // //           value={formData.tripId}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="source"
// // // // //           placeholder="Source"
// // // // //           value={formData.source}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="destination"
// // // // //           placeholder="Destination"
// // // // //           value={formData.destination}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="date"
// // // // //           name="journeyDate"
// // // // //           value={formData.journeyDate}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="date"
// // // // //           name="endDate"
// // // // //           value={formData.endDate}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="customerName"
// // // // //           placeholder="Customer Name"
// // // // //           value={formData.customerName}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <textarea
// // // // //           name="address"
// // // // //           placeholder="Address"
// // // // //           value={formData.address}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="tel"
// // // // //           name="phone"
// // // // //           placeholder="Phone Number"
// // // // //           value={formData.phone}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <button type="submit">Confirm</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ConfirmBooking;



// // // // import React from 'react';
// // // // import { useNavigate, useLocation } from 'react-router-dom';

// // // // const ConfirmBooking = () => {
// // // //   const { state } = useLocation();
// // // //   const navigate = useNavigate();

// // // //   const handleConfirm = async () => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/bookings', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(state),
// // // //       });

// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         navigate('/confirmation', { state: data });
// // // //       } else {
// // // //         console.error('Error:', await response.text());
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Network Error:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Confirm Booking</h2>
// // // //       <pre>{JSON.stringify(state, null, 2)}</pre>
// // // //       <button onClick={handleConfirm}>Confirm</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ConfirmBooking;

// // // import React from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const ConfirmBooking = () => {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();

// // //   const handleConfirm = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/bookings', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(state),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/confirmation', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <pre>{JSON.stringify(state, null, 2)}</pre>
// // //       <button onClick={handleConfirm}>Confirm</button>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;


// // // import React from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const ConfirmBooking = () => {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();

// // //   const handleConfirm = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/booking', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(state),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/confirmation', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <pre>{JSON.stringify(state, null, 2)}</pre>
// // //       <button onClick={handleConfirm}>Confirm</button>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;




// // // import React from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const ConfirmBooking = () => {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();

// // //   const handleConfirm = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/booking', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(state),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/confirmation', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <p>Customer Name: {state.customerName}</p>
      
// // //       <p>Journey Date: {state.journeyDate}</p>
// // //       <p>End Date: {state.endDate}</p>
      
// // //       <p>Price: ${state.price}</p>
// // //       <button onClick={handleConfirm}>Confirm</button>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;


// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const ConfirmBooking = () => {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();

// // //   const [guide, setGuide] = useState(null);

// // //   useEffect(() => {
// // //     const fetchGuide = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/available-guide');
// // //         if (response.ok) {
// // //           const guideData = await response.json();
// // //           setGuide(guideData);
// // //         } else {
// // //           console.error('Error fetching guide:', await response.text());
// // //         }
// // //       } catch (error) {
// // //         console.error('Network Error:', error);
// // //       }
// // //     };

// // //     fetchGuide();
// // //   }, []);

// // //   const handleConfirm = async () => {
// // //     try {
// // //       const bookingData = {
// // //         ...state,
// // //         guideName: guide ? guide.name : null,
// // //       };

// // //       const response = await fetch('http://localhost:5000/api/booking', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(bookingData),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/confirmation', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <p>Customer Name: {state.customerName}</p>
// // //       <p>Journey Date: {state.journeyDate}</p>
// // //       <p>End Date: {state.endDate}</p>
// // //       <p>Price: ${state.price}</p>
// // //       <p>Guide Name: {guide ? guide.name : 'Loading...'}</p>
// // //       <button onClick={handleConfirm}>Confirm</button>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;


// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';

// // // const ConfirmBooking = () => {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();
// // //   const [guide, setGuide] = useState(null);

// // //   useEffect(() => {
// // //     const fetchGuide = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/available-guide');
// // //         if (response.ok) {
// // //           const guideData = await response.json();
// // //           setGuide(guideData);
// // //         } else {
// // //           console.error('Error fetching guide:', await response.text());
// // //         }
// // //       } catch (error) {
// // //         console.error('Network Error:', error);
// // //       }
// // //     };

// // //     fetchGuide();
// // //   }, []);

// // //   const handleConfirm = async () => {
// // //     try {
// // //       const bookingData = {
// // //         ...state,
// // //         guideName: guide ? guide.name : null,
// // //       };

// // //       const response = await fetch('http://localhost:5000/api/booking', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(bookingData),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/confirmation', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.text());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   const handlePayment = async () => {
// // //     try {
// // //       const sanitizedAmount = parseFloat(String(state.price).replace('$', '').trim());;
// // //       if (isNaN(sanitizedAmount)) {
// // //         console.error('Invalid amount format:', state.price);
// // //         alert('Payment failed: Invalid price format.');
// // //         return;
// // //       }
// // //       const paymentData = {
// // //         customerName: state.customerName,
// // //         amount: sanitizedAmount,
// // //       };

// // //       console.log('Payment Data Being Sent:', paymentData);
// // //       const response = await fetch('http://localhost:5000/api/payment', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(paymentData),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         navigate('/payment', { state: data });
// // //       } else {
// // //         console.error('Error:', await response.json());
// // //       }
// // //     } catch (error) {
// // //       console.error('Network Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Confirm Booking</h2>
// // //       <p>Customer Name: {state.customerName}</p>
// // //       <p>Journey Date: {state.journeyDate}</p>
// // //       <p>End Date: {state.endDate}</p>
// // //       <p>Price: ${state.price}</p>
// // //       <p>Guide Name: {guide ? guide.name : 'Loading...'}</p>
// // //       <button onClick={handleConfirm}>Confirm</button>
// // //       <button onClick={handlePayment}>Payment</button>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmBooking;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // const ConfirmBooking = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();
// //   const [guide, setGuide] = useState(null);

// //   useEffect(() => {
// //     const fetchGuide = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/available-guide');
// //         if (response.ok) {
// //           const guideData = await response.json();
// //           setGuide(guideData);
// //         } else {
// //           console.error('Error fetching guide:', await response.text());
// //         }
// //       } catch (error) {
// //         console.error('Network Error:', error);
// //       }
// //     };

// //     fetchGuide();
// //   }, []);

// //   const handleConfirm = async () => {
// //     try {
// //       const bookingData = {
// //         ...state,
// //         guideName: guide ? guide.name : null,
// //       };

// //       const response = await fetch('http://localhost:5000/api/booking', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(bookingData),
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
// //       <p>Customer Name: {state.customerName}</p>
// //       <p>Journey Date: {state.journeyDate}</p>
// //       <p>End Date: {state.endDate}</p>
// //       <p>Price: ${state.price}</p>
// //       <p>Guide Name: {guide ? guide.name : 'Loading...'}</p>
// //       <button onClick={handleConfirm}>Confirm</button>
   
// //     </div>
// //   );
// // };

// // export default ConfirmBooking;

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const ConfirmBooking = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [guide, setGuide] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const allocateGuide = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/allocate-guide', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ customerId: state.customerId }), // Pass the customer ID to the API
//         });

//         if (response.ok) {
//           const guideData = await response.json();
//           setGuide(guideData); // Set the allocated guide details
//         } else {
//           console.error('Error allocating guide:', await response.text());
//         }
//       } catch (error) {
//         console.error('Network Error:', error);
//       }finally {
//         setLoading(false); // Allocation process finished
//       }
//     };

//     allocateGuide(); // Allocate guide when the component mounts
//   }, [state.customerId]);

//   const handleConfirm = async () => {
//     try {
//       const bookingData = {
//         ...state,
//         guideName: guide ? guide.name : null, // Use the allocated guide name
//       };

//       // Step 1: Create the booking and get the booking details
//       const bookingResponse = await fetch('http://localhost:5000/api/booking', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookingData),
//       });

//       if (bookingResponse.ok) {
//         const bookingData = await bookingResponse.json();

//         // Step 2: Create the payment data
//         const paymentData = {
//           customerId: bookingData.customerId, // use customerId from booking data
//           amount: state.price, // price from booking data
//         };
//         if (!paymentData.amount) {
//           console.error('Amount is missing from payment data');
//           return;
//         }
//         // Step 3: Send payment data to the backend
//         const paymentResponse = await fetch('http://localhost:5000/api/payment', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(paymentData),
//         });

//         if (paymentResponse.ok) {
//           const paymentData = await paymentResponse.json();
//           console.log('Payment processed successfully:', paymentData);
//           // Step 4: Navigate to confirmation page with booking and payment success
//           navigate('/confirmation', { state: { ...bookingData, ...paymentData } });
//         } else {
//           const errorText = await paymentResponse.text();
//           console.error('Error processing payment:', await paymentResponse.text());
//         }
//       } else {
//         const errorText = await bookingResponse.text();
//         console.error('Error creating booking:', await bookingResponse.text());
//       }
//     } catch (error) {
//       console.error('Network Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Confirm Booking</h2>
//       <p>Customer Name: {state.customerName}</p>
//       <p>Journey Date: {state.journeyDate}</p>
//       <p>End Date: {state.endDate}</p>
//       <p>Price: ${state.price}</p>
     
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