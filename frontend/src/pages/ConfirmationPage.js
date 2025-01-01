// // // // import React from "react";
// // // // import { useLocation } from "react-router-dom";

// // // // const ConfirmationPage = () => {
// // // //   const { state } = useLocation();

// // // //   return (
// // // //     <div>
// // // //       <h2>Booking Successful!</h2>
// // // //       <p>Customer ID: {state.customerId}</p>
// // // //       <p>Trip ID: {state.tripId}</p>
// // // //       <p>Source: {state.source}</p>
// // // //       <p>Destination: {state.destination}</p>
// // // //       <p>Journey Date: {state.journeyDate}</p>
// // // //       <p>End Date: {state.endDate}</p>
// // // //       <p>Customer Name: {state.customerName}</p>
// // // //       <p>Address: {state.address}</p>
// // // //       <p>Phone: {state.phone}</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ConfirmationPage;

// // // import React from 'react';
// // // import { useLocation } from 'react-router-dom';

// // // const ConfirmationPage = () => {
// // //   const { state } = useLocation();

// // //   return (
// // //     <div>
// // //       <h2>Booking Confirmation</h2>
// // //       <pre>{JSON.stringify(state, null, 2)}</pre>
// // //     </div>
// // //   );
// // // };

// // // export default ConfirmationPage;


// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // const ConfirmationPage = () => {
// //   const { state } = useLocation();

// //   return (
// //     <div>
// //       <h2>Booking Successful!</h2>
// //       <p>Customer Name: {state.customerName}</p>
// //       <p>Phone: {state.phone}</p>
// //       <p>Source: {state.source}</p>
// //       <p>Destination: {state.destination}</p>
// //       <p>Journey Date: {state.journeyDate}</p>
// //       <p>End Date: {state.endDate}</p>
// //     </div>
// //   );
// // };

// // export default ConfirmationPage;


// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // const ConfirmationPage = () => {
// //     const { state } = useLocation();
  
// //     if (!state) {
// //       return <p>No booking details available.</p>;
// //     }
  
// //     const {
// //       customerName,
// //       phone,
// //       source,
// //       destination,
// //       journeyDate,
// //       endDate,
// //     } = state;
  
// //     return (
// //       <div>
// //         <h2>Booking Successful!</h2>
// //         {/* <p>Customer Name: {customerName}</p>
// //         <p>Phone: {phone}</p>
// //         <p>Source: {source}</p>
// //         <p>Destination: {destination}</p>
// //         <p>Journey Date: {journeyDate}</p>
// //         <p>End Date: {endDate}</p> */}
// //       </div>
// //     );
// //   };
// //  export default ConfirmationPage;
// //  import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // const ConfirmationPage = () => {
// //   const { state } = useLocation();

// //   if (!state) {
// //     return (
// //       <div
// //         style={{
// //           minHeight: '100vh',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           fontFamily: 'Arial, sans-serif',
// //           background: 'linear-gradient(135deg, #4caf50, #81c784)',
// //           color: '#fff',
// //           padding: '20px',
// //         }}
// //       >
// //         <p>No booking details available.</p>
// //       </div>
// //     );
// //   }

// //   const {
// //     customerName,
// //     phone,
// //     source,
// //     destination,
// //     journeyDate,
// //     endDate,
// //   } = state;

// //   return (
// //     <div
// //       style={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         backgroundImage: 'url("https://source.unsplash.com/1600x900/?success,travel")',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         fontFamily: 'Arial, sans-serif',
// //         padding: '20px',
// //       }}
// //     >
// //       <div
// //         style={{
// //           background: 'rgba(255, 255, 255, 0.9)',
// //           padding: '30px',
// //           borderRadius: '10px',
// //           boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
// //           maxWidth: '600px',
// //           width: '100%',
// //           textAlign: 'center',
// //         }}
// //       >
// //         <h2 style={{ color: '#4caf50', marginBottom: '20px' }}>
// //           Booking Successful!
// //         </h2>
// //         <p style={{ fontSize: '18px', marginBottom: '10px' }}>
// //           Thank you for your booking, <strong>{customerName}</strong>!
// //         </p>
// //         <div
// //           style={{
// //             textAlign: 'left',
// //             background: '#f9f9f9',
// //             padding: '20px',
// //             borderRadius: '5px',
// //             marginTop: '10px',
// //           }}
// //         >
// //           {/* <p>
// //             <strong>Phone:</strong> {phone}
// //           </p>
// //           <p>
// //             <strong>Source:</strong> {source}
// //           </p>
// //           <p>
// //             <strong>Destination:</strong> {destination}
// //           </p>
// //           <p>
// //             <strong>Journey Date:</strong> {journeyDate}
// //           </p>
// //           <p>
// //             <strong>End Date:</strong> {endDate}
// //           </p> */}
// //         </div>
// //         <button
// //           style={{
// //             marginTop: '20px',
// //             padding: '10px 20px',
// //             background: 'linear-gradient(90deg, #4caf50, #81c784)',
// //             color: '#fff',
// //             border: 'none',
// //             borderRadius: '5px',
// //             cursor: 'pointer',
// //             fontSize: '16px',
// //             transition: 'all 0.3s ease',
// //           }}
// //           onMouseOver={(e) => {
// //             e.target.style.transform = 'scale(1.1)';
// //             e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';
// //           }}
// //           onMouseOut={(e) => {
// //             e.target.style.transform = 'scale(1)';
// //             e.target.style.boxShadow = 'none';
// //           }}
// //           onClick={() => window.location.href = '/'}
// //         >
// //           Go Back to Home
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ConfirmationPage;
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const ConfirmationPage = () => {
//   const { state } = useLocation();

//   if (!state) {
//     return (
//       <div
//         style={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontFamily: 'Arial, sans-serif',
//           background: 'linear-gradient(135deg, #4caf50, #81c784)',
//           color: '#fff',
//           padding: '20px',
//         }}
//       >
//         <p>No booking details available.</p>
//       </div>
//     );
//   }

//   const {
//     customerName,
//     phone,
//     source,
//     destination,
//     journeyDate,
//     endDate,
//   } = state;

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage: 'url("https://source.unsplash.com/1600x900/?success,travel")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         fontFamily: 'Arial, sans-serif',
//         padding: '20px',
//       }}
//     >
//       <div
//         style={{
//           background: 'rgba(255, 255, 255, 0.9)',
//           padding: '30px',
//           borderRadius: '10px',
//           boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
//           maxWidth: '600px',
//           width: '100%',
//           textAlign: 'center',
//         }}
//       >
//         <h2 style={{ color: '#4caf50', marginBottom: '20px' }}>
//           Booking Successful!
//         </h2>
//         <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//           Thank you for your booking, <strong>{customerName}</strong>!
//         </p>
//         <div
//           style={{
//             textAlign: 'left',
//             background: '#f9f9f9',
//             padding: '20px',
//             borderRadius: '5px',
//             marginTop: '10px',
//           }}
//         >
//           {/* <p>
//             <strong>Phone:</strong> {phone}
//           </p>
//           <p>
//             <strong>Source:</strong> {source}
//           </p>
//           <p>
//             <strong>Destination:</strong> {destination}
//           </p>
//           <p>
//             <strong>Journey Date:</strong> {journeyDate}
//           </p>
//           <p>
//             <strong>End Date:</strong> {endDate}
//           </p> */}
//         </div>
//         <button
//           style={{
//             marginTop: '20px',
//             padding: '10px 20px',
//             background: 'linear-gradient(90deg, #4caf50, #81c784)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             transition: 'all 0.3s ease',
//           }}
//           onMouseOver={(e) => {
//             e.target.style.transform = 'scale(1.1)';
//             e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';
//           }}
//           onMouseOut={(e) => {
//             e.target.style.transform = 'scale(1)';
//             e.target.style.boxShadow = 'none';
//           }}
//           onClick={() => window.location.href = '/'}
//         >
//           Go Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ConfirmationPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   // State to control the message display after Pay button click
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   if (!state) {
//     return <p>No booking details available.</p>;
//   }

//   const handlePayment = () => {
//     // Simulate a successful payment
//     setPaymentSuccess(true);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center min-vh-100"
//       style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}
//     >
//       <div
//         className="card shadow-lg rounded p-4 p-sm-5"
//         style={{ maxWidth: '600px', width: '100%' }}
//       >
//         {paymentSuccess ? (
//           <>
//             <h2 className="text-center text-success mb-4">Booking Successful!</h2>
//             <p className="text-center mb-4">Thank you for your payment!</p>
//             <button
//               className="btn btn-success w-100"
//               onClick={() => navigate('/')}
//             >
//               Go to Home
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-center mb-4">Confirm Payment</h2>
//             <p className="text-center mb-4">
//               Your booking details are ready. Click Pay to confirm.
//             </p>
//             <button
//               className="btn btn-success w-100"
//               onClick={handlePayment}
//             >
//               Pay Now
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;
  


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [guideName, setGuideName] = useState('');

  useEffect(() => {
    if (paymentSuccess) {
      // Fetch the guide's name after payment success
      axios
        .get('http://localhost:5000/api/guide', { params: { customerId: state?.customerId } })
        .then((response) => {
          setGuideName(response.data.guideName);
        })
        .catch((error) => {
          console.error('Error fetching guide details:', error);
        });
    }
  }, [paymentSuccess, state]);

  if (!state) {
    return <p>No booking details available.</p>;
  }

  const handlePayment = () => {
    // Simulate a successful payment
    setPaymentSuccess(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}
    >
      <div
        className="card shadow-lg rounded p-4 p-sm-5"
        style={{ maxWidth: '600px', width: '100%' }}
      >
        {paymentSuccess ? (
          <>
            <h2 className="text-center text-success mb-4">Booking Successful!</h2>
            <p className="text-center mb-4">Thank you for your payment!</p>
            <p className="text-center mb-4">
              Your guide is: <strong>{guideName || 'John Doe'}</strong>
            </p>
            <button className="btn btn-success w-100" onClick={() => navigate('/')}>
              Go to Home
            </button>
          </>
        ) : (
          <>
            <h2 className="text-center mb-4">Confirm Payment</h2>
            <p className="text-center mb-4">
              Your booking details are ready. Click Pay to confirm.
            </p>
            <button className="btn btn-success w-100" onClick={handlePayment}>
              Pay Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
