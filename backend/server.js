// // // const express = require('express');
// // // const mysql = require('mysql2');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');

// // // const app = express();
// // // const port = 5000;

// // // // Middleware
// // // app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend
// // // app.use(bodyParser.json()); // Parse JSON request bodies

// // // // MySQL Database Connection
// // // const db = mysql.createConnection({
// // //   host: 'localhost',
// // //   user: 'root',          // Your MySQL username
// // //   password: 'HA12@kini', // Your MySQL password
// // //   database: 'travel_agency', // Your database name
// // // });

// // // db.connect((err) => {
// // //   if (err) {
// // //     console.error('Error connecting to MySQL:', err.message);
// // //   } else {
// // //     console.log('Connected to MySQL Database');
// // //   }
// // // });

// // // // Add Employee
// // // app.post('/add-employee', (req, res) => {
// // //   const { employeeName, phone, address, joiningDate } = req.body;
// // //   const query = 'INSERT INTO employee (name, phone, address, created_at) VALUES (?, ?, ?, ?)';
// // //   db.query(query, [employeeName, phone, address, joiningDate], (err, result) => {
// // //     if (err) {
// // //       console.error('Error adding employee:', err.message);
// // //       return res.status(500).json({ error: 'Failed to add employee.' });
// // //     }
// // //     res.status(200).json({ message: 'Employee added successfully!' });
// // //   });
// // // });

// // // // Delete Employee with Debugging
// // // app.delete('/delete-employee/:id', (req, res) => {
// // //   const { id } = req.params;
// // //   const query = 'DELETE FROM employee WHERE id = ?';
// // //   db.query(query, [id], (err, result) => {
// // //     if (err) {
// // //       console.error('Error deleting employee:', err.message);
// // //       return res.status(500).json({ error: 'Failed to delete employee.' });
// // //     }
// // //     console.log('Delete Query Executed:', id);
// // //     console.log('Result:', result);
// // //     if (result.affectedRows === 0) {
// // //       return res.status(404).json({ error: 'Employee not found.' });
// // //     }
// // //     res.status(200).json({ message: 'Employee deleted successfully!' });
// // //   });
// // // });

// // // // Modify Employee with Debugging
// // // app.put('/modify-employee/:id', (req, res) => {
// // //   const { id } = req.params;
// // //   const { employeeName, phone, address, joiningDate } = req.body;
// // //   const query = `
// // //     UPDATE employee 
// // //     SET name = ?, phone = ?, address = ?, created_at = ? 
// // //     WHERE id = ?
// // //   `;
// // //   db.query(query, [employeeName, phone, address, joiningDate, id], (err, result) => {
// // //     if (err) {
// // //       console.error('Error modifying employee:', err.message);
// // //       return res.status(500).json({ error: 'Failed to modify employee.' });
// // //     }
// // //     console.log('Modify Query Executed:', { id, employeeName, phone, address, joiningDate });
// // //     console.log('Result:', result);
// // //     if (result.affectedRows === 0) {
// // //       return res.status(404).json({ error: 'Employee not found.' });
// // //     }
// // //     res.status(200).json({ message: 'Employee modified successfully!' });
// // //   });
// // // });


// // // // Fetch All Employees
// // // app.get('/employees', (req, res) => {
// // //   const query = 'SELECT * FROM employee';
// // //   db.query(query, (err, results) => {
// // //     if (err) {
// // //       console.error('Error fetching employees:', err.message);
// // //       return res.status(500).json({ error: 'Failed to fetch employees.' });
      
// // //     }
// // //     res.status(200).json(results);
// // //   });
// // // });

// // // // Start the Server
// // // app.listen(port, () => {
// // //   console.log(`Server running on http://localhost:${port}`);
// // // });
// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend
// // app.use(bodyParser.json()); // Parse JSON request bodies

// // // MySQL Database Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',          // Your MySQL username
// //   password: 'HA12@kini', // Your MySQL password
// //   database: 'travel_agency', // Your database name
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err.message);
// //   } else {
// //     console.log('Connected to MySQL Database');
// //   }
// // });

// // // Add Customer Booking
// // app.post('/api/bookings', (req, res) => {
// //   const { customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone } = req.body;
// //   const query = `
// //     INSERT INTO bookings (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone)
// //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
// //   `;
// //   db.query(query, [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone], (err, result) => {
// //     if (err) {
// //       console.error('Error adding booking:', err.message);
// //       return res.status(500).json({ error: 'Failed to add booking.' });
// //     }
// //     res.status(200).json({ message: 'Booking added successfully!' });
// //   });
// // });

// // // Fetch All Bookings
// // app.get('/api/bookings', (req, res) => {
// //   const query = 'SELECT * FROM bookings';
// //   db.query(query, (err, results) => {
// //     if (err) {
// //       console.error('Error fetching bookings:', err.message);
// //       return res.status(500).json({ error: 'Failed to fetch bookings.' });
// //     }
// //     res.status(200).json(results);
// //   });
// // });

// // // Add Employee
// // app.post('/api/employees', (req, res) => {
// //   const { employeeName, phone, address, joiningDate } = req.body;
// //   const query = 'INSERT INTO employee (name, phone, address, created_at) VALUES (?, ?, ?, ?)';
// //   db.query(query, [employeeName, phone, address, joiningDate], (err, result) => {
// //     if (err) {
// //       console.error('Error adding employee:', err.message);
// //       return res.status(500).json({ error: 'Failed to add employee.' });
// //     }
// //     res.status(200).json({ message: 'Employee added successfully!' });
// //   });
// // });

// // // Fetch All Employees
// // app.get('/api/employees', (req, res) => {
// //   const query = 'SELECT * FROM employee';
// //   db.query(query, (err, results) => {
// //     if (err) {
// //       console.error('Error fetching employees:', err.message);
// //       return res.status(500).json({ error: 'Failed to fetch employees.' });
// //     }
// //     res.status(200).json(results);
// //   });
// // });

// // // Start the Server
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });


// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend
// // app.use(bodyParser.json()); // Parse JSON request bodies

// // // MySQL Database Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',          // Your MySQL username
// //   password: 'HA12@kini', // Your MySQL password
// //   database: 'travel_agency', // Your database name
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err.message);
// //   } else {
// //     console.log('Connected to MySQL Database');
// //   }
// // });

// // // Create a new booking
// // app.post('/api/bookings', (req, res) => {
// //   const { customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone } = req.body;

// //   const query = `
// //     INSERT INTO bookings 
// //     (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone) 
// //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// //   db.query(
// //     query,
// //     [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error adding booking:', err.message);
// //         return res.status(500).json({ error: 'Failed to add booking.' });
// //       }
// //       res.status(200).json({ message: 'Booking successful!', bookingId: result.insertId });
// //     }
// //   );
// // });

// // // Fetch booking details
// // app.get('/api/bookings/:id', (req, res) => {
// //   const { id } = req.params;
// //   const query = 'SELECT * FROM bookings WHERE id = ?';

// //   db.query(query, [id], (err, results) => {
// //     if (err) {
// //       console.error('Error fetching booking details:', err.message);
// //       return res.status(500).json({ error: 'Failed to fetch booking details.' });
// //     }
// //     if (results.length === 0) {
// //       return res.status(404).json({ error: 'Booking not found.' });
// //     }
// //     res.status(200).json(results[0]);
// //   });
// // });

// // // Start the Server
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });


// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors({ origin: 'http://localhost:3000' }));
// // app.use(bodyParser.json());

// // // MySQL Database Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'HA12@kini',
// //   database: 'travel_agency',
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err.message);
// //   } else {
// //     console.log('Connected to MySQL Database');
// //   }
// // });

// // // Create a new booking
// // app.post('/api/bookings', (req, res) => {
// //   const {
// //     customerId,
// //     tripId,
// //     source,
// //     destination,
// //     journeyDate,
// //     endDate,
// //     customerName,
// //     address,
// //     phone,
// //   } = req.body;

// //   const query = `
// //     INSERT INTO bookings 
// //     (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone) 
// //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// //   db.query(
// //     query,
// //     [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error adding booking:', err.message);
// //         return res.status(500).json({ error: 'Failed to add booking.' });
// //       }
// //       res.status(200).json({ message: 'Booking successful!', bookingId: result.insertId });
// //     }
// //   );
// // });

// // // Fetch booking details
// // app.get('/api/bookings/:id', (req, res) => {
// //   const { id } = req.params;
// //   const query = 'SELECT * FROM bookings WHERE id = ?';

// //   db.query(query, [id], (err, results) => {
// //     if (err) {
// //       console.error('Error fetching booking details:', err.message);
// //       return res.status(500).json({ error: 'Failed to fetch booking details.' });
// //     }
// //     if (results.length === 0) {
// //       return res.status(404).json({ error: 'Booking not found.' });
// //     }
// //     res.status(200).json(results[0]);
// //   });
// // });

// // // Start the Server
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });



// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors({ origin: 'http://localhost:3000' }));
// // app.use(bodyParser.json());

// // // MySQL Database Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'HA12@kini',
// //   database: 'travel_agency',
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err.message);
// //   } else {
// //     console.log('Connected to MySQL Database');
// //   }
// // });

// // // Create a new booking
// // app.post('/api/booking', (req, res) => {
// //   const {
// //     customerId,
// //     tripId,
// //     source,
// //     destination,
// //     journeyDate,
// //     endDate,
// //     customerName,
// //     address,
// //     phone,
// //   } = req.body;

// //   const query = `
// //     INSERT INTO booking
// //     (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone) 
// //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// //   db.query(
// //     query,
// //     [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error adding booking:', err.message);
// //         return res.status(500).json({ error: 'Failed to add booking.' });
// //       }
// //       res.status(200).json({ message: 'Booking successful!', bookingId: result.insertId });
// //     }
// //   );
// // });

// // // Fetch booking details
// // app.get('/api/booking/:id', (req, res) => {
// //   const { id } = req.params;
// //   const query = 'SELECT * FROM booking WHERE id = ?';

// //   db.query(query, [id], (err, results) => {
// //     if (err) {
// //       console.error('Error fetching booking details:', err.message);
// //       return res.status(500).json({ error: 'Failed to fetch booking details.' });
// //     }
// //     if (results.length === 0) {
// //       return res.status(404).json({ error: 'Booking not found.' });
// //     }
// //     res.status(200).json(results[0]);
// //   });
// // });

// // // Start the Server
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });

// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors({ origin: 'http://localhost:3000' }));
// // app.use(bodyParser.json());

// // // MySQL Database Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'HA12@kini',
// //   database: 'travel_agency',
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err.message);
// //   } else {
// //     console.log('Connected to MySQL Database');
// //   }
// // });

// // // Create a new booking
// // app.post('/api/booking', (req, res) => {
// //   const { customerId, address, phone, source, destination, journeyDate, endDate } = req.body;

// //   const query = `
// //     INSERT INTO booking 
// //     (customer_id, address, phone, source, destination, journey_date, end_date) 
// //     VALUES (?, ?, ?, ?, ?, ?, ?)
// //   `;

// //   db.query(
// //     query,
// //     [customerId, address, phone, source, destination, journeyDate, endDate],  // Make sure you're passing the right values
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error adding booking:', err.message);
// //         return res.status(500).json({ error: 'Failed to add booking.' });
// //       }
// //       res.status(200).json({ message: 'Booking successful!', bookingId: result.insertId });
// //     }
// //   );
// // });

// // // Start the Server
// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(bodyParser.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'HA12@kini',
//   database: 'travel_agency',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//   } else {
//     console.log('Connected to MySQL Database');
//   }
// });

// // Create a new booking
// app.post('/api/booking', (req, res) => {
//   const {
//     customerId,
//     tripId,
//     source,
//     destination,
//     journeyDate,
//     endDate,
//     customerName,
//     address,
//     phone,
//   } = req.body;

//   // Insert or update into `customer` table
//   const insertCustomerQuery = `
//     INSERT INTO customer (customer_id, customer_name, address, phone)
//     VALUES (?, ?, ?, ?)
//     ON DUPLICATE KEY UPDATE customer_name = VALUES(customer_name), address = VALUES(address), phone = VALUES(phone)
//   `;

//   db.query(insertCustomerQuery, [customerId, customerName, address, phone], (err) => {
//     if (err) {
//       console.error('Error adding/updating customer:', err.message);
//       return res.status(500).json({ error: 'Failed to add/update customer.' });
//     }

//     // Insert into `trip` table
//     const insertTripQuery = `
//       INSERT INTO trip (trip_id, source, destination, journey_date, end_date, customer_id)
//       VALUES (?, ?, ?, ?, ?, ?)
//       ON DUPLICATE KEY UPDATE source = VALUES(source), destination = VALUES(destination), journey_date = VALUES(journey_date), end_date = VALUES(end_date)
//     `;

//     db.query(
//       insertTripQuery,
//       [tripId, source, destination, journeyDate, endDate, customerId],
//       (err) => {
//         if (err) {
//           console.error('Error adding/updating trip:', err.message);
//           return res.status(500).json({ error: 'Failed to add/update trip.' });
//         }

//         // Insert into `booking` table
//         const insertBookingQuery = `
//           INSERT INTO booking
//           (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone)
//           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//         `;

//         db.query(
//           insertBookingQuery,
//           [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
//           (err, result) => {
//             if (err) {
//               console.error('Error adding booking:', err.message);
//               return res.status(500).json({ error: 'Failed to add booking.' });
//             }
//             res.status(200).json({ message: 'Booking successful!', bookingId: result.insertId });
//           }
//         );
//       }
//     );
//   });
// });

// // Fetch booking details
// app.get('/api/booking/:id', (req, res) => {
//   const { id } = req.params;
//   const query = 'SELECT * FROM booking WHERE id = ?';

//   db.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('Error fetching booking details:', err.message);
//       return res.status(500).json({ error: 'Failed to fetch booking details.' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Booking not found.' });
//     }
//     res.status(200).json(results[0]);
//   });
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });



// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(bodyParser.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'HA12@kini',
//   database: 'travel_agency',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//   } else {
//     console.log('Connected to MySQL Database');
//   }
// });

// // Create a new booking
// app.post('/api/booking', (req, res) => {
//   const { source, destination, journeyDate, endDate, customerName, address, phone } = req.body;

//   // Step 1: Insert into `customer` table
//   const insertCustomerQuery = `
//     INSERT INTO customer (customer_name, address, phone)
//     VALUES (?, ?, ?)
//   `;

//   db.query(insertCustomerQuery, [customerName, address, phone], (err, customerResult) => {
//     if (err) {
//       console.error('Error adding customer:', err.message);
//       return res.status(500).json({ error: 'Failed to add customer.' });
//     }

//     const customerId = customerResult.insertId; // Fetch the newly generated customer_id

//     // Step 2: Insert into `trip` table
//     const insertTripQuery = `
//       INSERT INTO trip (source, destination, journey_date, end_date, customer_id)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     db.query(insertTripQuery, [source, destination, journeyDate, endDate, customerId], (err, tripResult) => {
//       if (err) {
//         console.error('Error adding trip:', err.message);
//         return res.status(500).json({ error: 'Failed to add trip.' });
//       }

//       const tripId = tripResult.insertId; // Fetch the newly generated trip_id

//       // Step 3: Insert into `booking` table
//       const insertBookingQuery = `
//         INSERT INTO booking (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//       `;

//       db.query(
//         insertBookingQuery,
//         [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
//         (err, bookingResult) => {
//           if (err) {
//             console.error('Error adding booking:', err.message);
//             return res.status(500).json({ error: 'Failed to add booking.' });
//           }

//           res.status(200).json({ message: 'Booking successful!', bookingId: bookingResult.insertId });
//         }
//       );
//     });
//   });
// });

// // Fetch booking details
// app.get('/api/booking/:id', (req, res) => {
//   const { id } = req.params;
//   const query = 'SELECT * FROM booking WHERE id = ?';

//   db.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('Error fetching booking details:', err.message);
//       return res.status(500).json({ error: 'Failed to fetch booking details.' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Booking not found.' });
//     }
//     res.status(200).json(results[0]);
//   });
// });

// // Start the Server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });



// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(bodyParser.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'HA12@kini',
//   database: 'travel_agency',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//   } else {
//     console.log('Connected to MySQL Database');
//   }
// });


// // Add Employee
//  app.post('/add-employee', (req, res) => {
//   const { employeeName, phone, address, joiningDate } = req.body;
//   const query = 'INSERT INTO employee (name, phone, address, created_at) VALUES (?, ?, ?, ?)';
//   db.query(query, [employeeName, phone, address, joiningDate], (err, result) => {
//     if (err) {
//      console.error('Error adding employee:', err.message);
//      return res.status(500).json({ error: 'Failed to add employee.' });
//    }
//  res.status(200).json({ message: 'Employee added successfully!' });
//   });
//  });

// //Delete Employee with Debugging
//  app.delete('/delete-employee/:id', (req, res) => {
//    const { id } = req.params;
//    const query = 'DELETE FROM employee WHERE id = ?';
//    db.query(query, [id], (err, result) => {
//      if (err) {
//       console.error('Error deleting employee:', err.message);
//       return res.status(500).json({ error: 'Failed to delete employee.' });
//     }
//      console.log('Delete Query Executed:', id);
//      console.log('Result:', result);
//      if (result.affectedRows === 0) {
//       return res.status(404).json({ error: 'Employee not found.' });
//     }
//      res.status(200).json({ message: 'Employee deleted successfully!' });
//    });
//  });

// // Modify Employee with Debugging
// app.put('/modify-employee/:id', (req, res) => {
//   const { id } = req.params;
//    const { employeeName, phone, address, joiningDate } = req.body;
//    const query = `
//      UPDATE employee 
//     SET name = ?, phone = ?, address = ?, created_at = ? 
//      WHERE id = ?
//    `;
//   db.query(query, [employeeName, phone, address, joiningDate, id], (err, result) => {
//      if (err) {
//        console.error('Error modifying employee:', err.message);
//        return res.status(500).json({ error: 'Failed to modify employee.' });
//      }
//    console.log('Modify Query Executed:', { id, employeeName, phone, address, joiningDate });
//     console.log('Result:', result);
//      if (result.affectedRows === 0) {
//       return res.status(404).json({ error: 'Employee not found.' });
//     }
//    res.status(200).json({ message: 'Employee modified successfully!' });
//    });
//  });


// // Fetch All Employees
//  app.get('/employees', (req, res) => {
//   const query = 'SELECT * FROM employee';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching employees:', err.message) 
//         return res.status(500).json({ error: 'Failed to fetch employees.' });
      
//    }
//     res.status(200).json(results);
//    });
//   });
// // Create a new booking
// app.post('/api/booking', (req, res) => {
//   const { source, destination, journeyDate, endDate, customerName, address, phone } = req.body;

//   // Step 1: Insert into `customer` table
//   const insertCustomerQuery = `
//     INSERT INTO customer (customer_name, address, phone)
//     VALUES (?, ?, ?)
//   `;

//   db.query(insertCustomerQuery, [customerName, address, phone], (err, customerResult) => {
//     if (err) {
//       console.error('Error adding customer:', err.message);
//       return res.status(500).json({ error: 'Failed to add customer.' });
//     }

//     const customerId = customerResult.insertId; // Fetch the newly generated customer_id

//     // Step 2: Insert into `trip` table
//     const insertTripQuery = `
//       INSERT INTO trip (source, destination, journey_date, end_date, customer_id)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     db.query(insertTripQuery, [source, destination, journeyDate, endDate, customerId], (err, tripResult) => {
//       if (err) {
//         console.error('Error adding trip:', err.message);
//         return res.status(500).json({ error: 'Failed to add trip.' });
//       }

//       const tripId = tripResult.insertId; // Fetch the newly generated trip_id

//       // Step 3: Insert into `booking` table
//       const insertBookingQuery = `
//         INSERT INTO booking (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//       `;

//       db.query(
//         insertBookingQuery,
//         [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
//         (err, bookingResult) => {
//           if (err) {
//             console.error('Error adding booking:', err.message);
//             return res.status(500).json({ error: 'Failed to add booking.' });
//           }

//           res.status(200).json({
//             message: 'Booking successful!',
//             bookingId: bookingResult.insertId, // Send the bookingId back to frontend
//           });
//         }
//       );
//     });
//   });
// });

// // Fetch booking details
// app.get('/api/booking/:id', (req, res) => {
//   const { id } = req.params;
//   const query = 'SELECT * FROM booking WHERE id = ?';

//   db.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('Error fetching booking details:', err.message);
//       return res.status(500).json({ error: 'Failed to fetch booking details.' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Booking not found.' });
//     }
//     res.status(200).json(results[0]);
//   });
// });


// // Start the Server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HA12@kini',
  database: 'travel_agency',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL Database');
  }
});

// GET request to fetch packages based on source and destination
app.get('/api/packages', (req, res) => {
  const { source, destination } = req.query;

  // Create 3 random packages with increasing prices
  const packages = [
    {
      package_name: 'Beach Getaway',
      source: source,
      destination: destination,
      duration: '3 Days',
      description: 'A relaxing beach vacation with all amenities.',
      price: Math.floor(Math.random() * 100) + 100, // Random price between 100 and 200
    },
    {
      package_name: 'Mountain Adventure',
      source: source,
      destination: destination,
      duration: '5 Days',
      description: 'A thrilling adventure with hiking and mountain activities.',
      price: Math.floor(Math.random() * 100) + 300, // Random price between 300 and 400
    },
    {
      package_name: 'Luxury Retreat',
      source: source,
      destination: destination,
      duration: '7 Days',
      description: 'Experience a luxurious stay with 5-star amenities and services.',
      price: Math.floor(Math.random() * 100) + 500, // Random price between 500 and 600
    },
  ];

  // Sort packages by price in increasing order
  packages.sort((a, b) => a.price - b.price);

  // Send the random packages to the frontend
  res.json(packages);
});


// Create a new booking
app.post('/api/booking', (req, res) => {
  const { source, destination, journeyDate, endDate, customerName, address, phone, packageId } = req.body;

  // Step 1: Insert into customer table
  const insertCustomerQuery = 'INSERT INTO customer (customer_name, address, phone) VALUES (?, ?, ?)';

  db.query(insertCustomerQuery, [customerName, address, phone], (err, customerResult) => {
    if (err) {
      console.error('Error adding customer:', err.message);
      return res.status(500).json({ error: 'Failed to add customer.' });
    }

    const customerId = customerResult.insertId; // Fetch the newly generated customer_id

    // Step 2: Insert into trip table
    const insertTripQuery = 'INSERT INTO trip (source, destination, journey_date, end_date, customer_id) VALUES (?, ?, ?, ?, ?)';

    db.query(insertTripQuery, [source, destination, journeyDate, endDate, customerId], (err, tripResult) => {
      if (err) {
        console.error('Error adding trip:', err.message);
        return res.status(500).json({ error: 'Failed to add trip.' });
      }

      const tripId = tripResult.insertId; // Fetch the newly generated trip_id

      // Step 3: Insert into booking table
      const insertBookingQuery = 'INSERT INTO booking (customer_id, trip_id, source, destination, journey_date, end_date, customer_name, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

      db.query(
        insertBookingQuery,
        [customerId, tripId, source, destination, journeyDate, endDate, customerName, address, phone],
        (err, bookingResult) => {
          if (err) {
            console.error('Error adding booking:', err.message);
            return res.status(500).json({ error: 'Failed to add booking.' });
          }

          res.status(200).json({
            message: 'Booking successful!',
            bookingId: bookingResult.insertId, // Send the bookingId back to frontend
          });
        }
      );
    });
  });
});

// Start the Server
app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});