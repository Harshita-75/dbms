// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';  // Import LoginPage
// import HomePage from './pages/HomePage';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import BookingDashboard from './pages/BookingDashboard';
// import ConfirmBooking from "./ConfirmBooking";



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Route for Login Page */}
//         <Route path="/" element={<LoginPage />} />

//         {/* Route for Home Page */}
//         <Route path="/home" element={<HomePage />} />

//         {/* Other Dashboard Routes */}
//         <Route path="/employee" element={<EmployeeDashboard />} />
//         <Route path="/booking" element={<BookingDashboard />} />
//         <Route path="/confirm-booking" element={<ConfirmBooking />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  // Import LoginPage
import HomePage from './pages/HomePage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import BookingDashboard from './pages/BookingDashboard';
import ConfirmBooking from './pages/ConfirmBooking';
import ConfirmationPage from './pages/ConfirmationPage';

const App = () => {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/employee" element={<EmployeeDashboard />} />
      <Route path="/booking" element={<BookingDashboard />} />

      <Route path="/confirm-booking" element={<ConfirmBooking />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
