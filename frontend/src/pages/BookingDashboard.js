// // import React, { useState } from 'react';
// // import InputField from '../components/InputField';
// // import Button from '../components/Button';

// // const BookingDashboard = () => {
// //   // State variables for form fields
// //   const [tripId, setTripId] = useState('');
// //   const [customerId, setCustomerId] = useState('');
// //   const [source, setSource] = useState('');
// //   const [destination, setDestination] = useState('');
// //   const [journeyDate, setJourneyDate] = useState('');
// //   const [endDate, setEndDate] = useState('');
// //   const [customerName, setCustomerName] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [phone, setPhone] = useState('');

// //   // Inline styles
// //   const containerStyle = {
// //     padding: '20px',
// //     backgroundColor: '#2b2b42',
// //     color: '#fff',
// //     minHeight: '100vh',
// //     textAlign: 'center',
// //   };

// //   const formStyle = {
// //     maxWidth: '600px',
// //     margin: '0 auto',
// //     backgroundColor: '#3e3e58',
// //     padding: '20px',
// //     borderRadius: '8px',
// //   };

// //   const buttonContainerStyle = {
// //     display: 'flex',
// //     justifyContent: 'space-around',
// //     marginTop: '20px',
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <h2 style={{ marginBottom: '20px' }}>Booking Dashboard</h2>
// //       <div style={formStyle}>
// //         <InputField
// //           label="Trip ID"
// //           value={tripId}
// //           onChange={(e) => setTripId(e.target.value)}
// //         />
// //         <InputField
// //           label="Customer ID"
// //           value={customerId}
// //           onChange={(e) => setCustomerId(e.target.value)}
// //         />
// //         <InputField
// //           label="Source"
// //           value={source}
// //           onChange={(e) => setSource(e.target.value)}
// //         />
// //         <InputField
// //           label="Destination"
// //           value={destination}
// //           onChange={(e) => setDestination(e.target.value)}
// //         />
// //         <InputField
// //           label="Journey Date"
// //           type="date"
// //           value={journeyDate}
// //           onChange={(e) => setJourneyDate(e.target.value)}
// //         />
// //         <InputField
// //           label="End Date"
// //           type="date"
// //           value={endDate}
// //           onChange={(e) => setEndDate(e.target.value)}
// //         />
// //         <InputField
// //           label="Customer Name"
// //           value={customerName}
// //           onChange={(e) => setCustomerName(e.target.value)}
// //         />
// //         <InputField
// //           label="Address"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //         />
// //         <InputField
// //           label="Phone Number"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //         />

// //         <div style={buttonContainerStyle}>
// //           <Button text="Book" color="#28a745" onClick={() => alert('Trip Booked!')} />
// //           <Button text="Modify" color="#17a2b8" onClick={() => alert('Trip Modified!')} />
// //           <Button text="Delete" color="#dc3545" onClick={() => alert('Trip Deleted!')} />
// //           <Button text="Clear" color="#ffc107" onClick={() => {
// //             setTripId('');
// //             setCustomerId('');
// //             setSource('');
// //             setDestination('');
// //             setJourneyDate('');
// //             setEndDate('');
// //             setCustomerName('');
// //             setAddress('');
// //             setPhone('');
// //           }} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookingDashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import InputField from '../components/InputField';
// import Button from '../components/Button';

// const BookingDashboard = () => {
//   const navigate = useNavigate();
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [journeyDate, setJourneyDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleConfirm = () => {
//     const customerId = `CUST${Math.floor(1000 + Math.random() * 9000)}`; // Auto-generate customer ID
//     const tripId = `TRIP${Math.floor(1000 + Math.random() * 9000)}`; // Auto-generate trip ID

//     const bookingDetails = {
//       customerId,
//       tripId,
//       source,
//       destination,
//       journeyDate,
//       endDate,
//       customerName,
//       address,
//       phone,
//     };

//     navigate('/confirm-booking', { state: bookingDetails }); // Pass details to ConfirmBooking page
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#2b2b42', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
//       <h2>Booking Dashboard</h2>
//       <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#3e3e58', padding: '20px', borderRadius: '8px' }}>
//         <InputField label="Source" value={source} onChange={(e) => setSource(e.target.value)} />
//         <InputField label="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//         <InputField label="Journey Date" type="date" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} />
//         <InputField label="End Date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//         <InputField label="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
//         <InputField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//         <InputField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />

//         <div style={{ marginTop: '20px' }}>
//           <Button text="Confirm" color="#28a745" onClick={handleConfirm} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingDashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookingDashboard = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     journeyDate: '',
//     endDate: '',
//     customerName: '',
//     address: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     const customerId = `CUST${Math.floor(1000 + Math.random() * 9000)}`;
//     const tripId = `TRIP${Math.floor(1000 + Math.random() * 9000)}`;

//     navigate('/confirm-booking', {
//       state: { ...formData, customerId, tripId },
//     });
//   };

//   return (
//     <div>
//       <h2>Booking Dashboard</h2>
//       <form>
//         <input name="source" placeholder="Source" onChange={handleChange} />
//         <input name="destination" placeholder="Destination" onChange={handleChange} />
//         <input name="journeyDate" type="date" onChange={handleChange} />
//         <input name="endDate" type="date" onChange={handleChange} />
//         <input name="customerName" placeholder="Customer Name" onChange={handleChange} />
//         <input name="address" placeholder="Address" onChange={handleChange} />
//         <input name="phone" placeholder="Phone" onChange={handleChange} />
//         <button type="button" onClick={handleSubmit}>
//           Next
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingDashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookingDashboard = () => {
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     journeyDate: '',
//     endDate: '',
//     customerName: '',
//     address: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         navigate('/confirm-booking', {
//           state: { ...formData, bookingId: result.bookingId },
//         });
//       } else {
//         alert('Booking failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during booking:', error);
//     }
//   };

//   return (
//     <div
     
// style={{
//   minHeight: '100vh',
//   backgroundImage: 'url("https://wallpaperaccess.com/full/136008.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontFamily: 'Arial, sans-serif',
//   color: '#fff',
//   position: 'relative',
// }}
// >
// <button
//   onClick={() => setShowModal(true)}
//   style={{
//     padding: '15px 30px',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     background: 'linear-gradient(90deg, #fffe5f, #feb47b)',
//     color: '#000',
//     cursor: 'pointer',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
//     transition: 'all 0.3s ease',
//   }}
//   onMouseOver={(e) => {
//     e.target.style.transform = 'scale(1.1)';
//     e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.5)';
//   }}
//   onMouseOut={(e) => {
//     e.target.style.transform = 'scale(1)';
//     e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
//   }}
// >
//   Open Booking Form
// </button>

// {showModal && (
//   <div
//     style={{
//       position: 'fixed',
//       top: '0',
//       left: '0',
//       width: '100%',
//       height: '100%',
//       background: 'rgba(0, 0, 0, 0.7)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000,
//     }}
//   >
//     <div
//       style={{
//         background: '#fff',
//         borderRadius: '10px',
//         padding: '30px',
//         width: '400px',
//         boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
//         position: 'relative',
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           color: '#333',
//           fontSize: '20px',
//         }}
//       >
//         Booking Form
//       </h2>
//       <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//         <input
//           name="source"
//           placeholder="Source"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="destination"
//           placeholder="Destination"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="journeyDate"
//           type="date"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="endDate"
//           type="date"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="customerName"
//           placeholder="Customer Name"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="address"
//           placeholder="Address"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <input
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '14px',
//           }}
//         />
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//           <button
//             type="button"
//             onClick={() => setShowModal(false)}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#ccc',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#ff7e5f',
//               border: 'none',
//               borderRadius: '5px',
//               color: '#fff',
//               cursor: 'pointer',
//             }}
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}
// </div>
// );
// };

// export default BookingDashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BookingDashboard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     journeyDate: '',
//     endDate: '',
//     customerName: '',
//     address: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         navigate('/confirm-booking', {
//           state: { ...formData, bookingId: result.bookingId },
//         });
//       } else {
//         alert('Booking failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during booking:', error);
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <button onClick={() => setShowModal(true)}>Open Booking Form</button>

//       {showModal && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             width: '100%',
//             height: '100%',
//             background: 'rgba(0, 0, 0, 0.7)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               background: '#fff',
//               borderRadius: '10px',
//               padding: '30px',
//               width: '400px',
//               boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
//               position: 'relative',
//             }}
//           >
//             <h2 style={{ textAlign: 'center' }}>Booking Form</h2>
//             <form>
//               <input
//                 name="source"
//                 placeholder="Source"
//                 onChange={handleChange}
//               />
//               <input
//                 name="destination"
//                 placeholder="Destination"
//                 onChange={handleChange}
//               />
//               <input
//                 name="journeyDate"
//                 type="date"
//                 onChange={handleChange}
//               />
//               <input
//                 name="endDate"
//                 type="date"
//                 onChange={handleChange}
//               />
//               <input
//                 name="customerName"
//                 placeholder="Customer Name"
//                 onChange={handleChange}
//               />
//               <input
//                 name="address"
//                 placeholder="Address"
//                 onChange={handleChange}
//               />
//               <input
//                 name="phone"
//                 placeholder="Phone"
//                 onChange={handleChange}
//               />
//               <button type="button" onClick={handleSubmit}>Next</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingDashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingDashboard = () => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    journeyDate: '',
    endDate: '',
    customerName: '',
    address: '',
    phone: '',
  });

  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPackages, setShowPackages] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchPackages = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/packages?source=${formData.source}&destination=${formData.destination}`
      );

      if (response.ok) {
        const data = await response.json();
        setPackages(data);
        setShowPackages(true);
      } else {
        alert('No packages available for the selected source and destination.');
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    fetchPackages();
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleSubmit = () => {
    if (selectedPackage) {
      navigate('/confirm-booking', {
        state: { ...formData, ...selectedPackage },
      });
    } else {
      alert('Please select a package to proceed.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form style={{ width: '400px' }} onSubmit={handleNext}>
        <input
          name="source"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
        />
        <input
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
        <input
          name="journeyDate"
          type="date"
          value={formData.journeyDate}
          onChange={handleChange}
        />
        <input
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
        />
        <input
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Next</button>
      </form>

      {showPackages && (
        <div style={{ marginTop: '20px' }}>
          <h3>Select a Package</h3>
          {packages.length > 0 ? (
            packages.map((pkg, index) => (
              <div key={index} style={{ margin: '10px 0' }}>
                <button
                  style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => handlePackageSelect(pkg)}
                >
                  <h4>{pkg.package_details}</h4>
                  <p>Price: ${pkg.price}</p>
                  <p>Source: {pkg.source}</p>
                  <p>Destination: {pkg.destination}</p>
                </button>
              </div>
            ))
          ) : (
            <p>No packages available for the selected source and destination.</p>
          )}
          {selectedPackage && (
            <div>
              <button onClick={handleSubmit}>Confirm Booking</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingDashboard;
