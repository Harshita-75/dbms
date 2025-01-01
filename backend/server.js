
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const employees = [
  { id: 1, name: 'John Doe', phone: '1234567890', address: '123 Main St', created_at: '2024-12-01', is_assigned: 1, customer_id: 101 },
  { id: 2, name: 'Jane Smith', phone: '9876543210', address: '456 Elm St', created_at: '2024-12-10', is_assigned: 0, customer_id: null },
];
// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(express.json());

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

// Add Employee
app.post('/add-employee', (req, res) => {
  const { employeeName, phone, address, joiningDate } = req.body;
  const query = 'INSERT INTO employee (name, phone, address, created_at) VALUES (?, ?, ?, ?)';
  db.query(query, [employeeName, phone, address, joiningDate], (err, result) => {
    if (err) {
      console.error('Error adding employee:', err.message);
      return res.status(500).json({ error: 'Failed to add employee.' });
    }
    res.status(200).json({ message: 'Employee added successfully!' });
  });
});

// Delete Employee with Debugging
app.delete('/delete-employee/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM employee WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting employee:', err.message);
      return res.status(500).json({ error: 'Failed to delete employee.' });
    }
    console.log('Delete Query Executed:', id);
    console.log('Result:', result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee deleted successfully!' });
  });
});

// Modify Employee with Debugging
app.put('/modify-employee/:id', (req, res) => {
  const { id } = req.params;
  const { employeeName, phone, address, joiningDate } = req.body;
  const query = `
    UPDATE employee 
    SET name = ?, phone = ?, address = ?, created_at = ? 
    WHERE id = ?
  `;
  db.query(query, [employeeName, phone, address, joiningDate, id], (err, result) => {
    if (err) {
      console.error('Error modifying employee:', err.message);
      return res.status(500).json({ error: 'Failed to modify employee.' });
    }
    console.log('Modify Query Executed:', { id, employeeName, phone, address, joiningDate });
    console.log('Result:', result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee modified successfully!' });
  });
});


// Fetch All Employees
app.get('/employees', (req, res) => {
  const query = 'SELECT * FROM employee';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching employees:', err.message);
      return res.status(500).json({ error: 'Failed to fetch employees.' });
      
    }
    res.status(200).json(results);
  });
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




// // Allocate Guide Route
// app.post('/api/allocate-guide', (req, res) => {
//   const { customerId } = req.body;

//   if (!customerId) {
//     return res.status(400).json({ error: 'Customer ID is required.' });
//   }

//   // Step 1: Find an available employee (not assigned to any customer)
//   const findEmployeeQuery = 'SELECT * FROM employee WHERE customer_id IS NULL LIMIT 1';

//   db.query(findEmployeeQuery, (err, employees) => {
//     if (err) {
//       console.error('Error fetching available employee:', err.message);
//       return res.status(500).json({ error: 'Failed to fetch available employee.' });
//     }

//     if (employees.length === 0) {
//       return res.status(404).json({ error: 'No available employees.' });
//     }

//     const allocatedEmployee = employees[0];

//     // Step 2: Assign the employee to the customer
//     const updateEmployeeQuery = 'UPDATE employee SET customer_id = ? WHERE id = ?';
//     db.query(updateEmployeeQuery, [customerId, allocatedEmployee.id], (err, result) => {
//       if (err) {
//         console.error('Error assigning employee:', err.message);
//         return res.status(500).json({ error: 'Failed to allocate guide.' });
//       }

//       // Step 3: Send the allocated employee details as the response
//       res.status(200).json({
//         id: allocatedEmployee.id,
//         name: allocatedEmployee.name,
//         phone: allocatedEmployee.phone,
//       });
//     });
//   });
// });




app.get('/api/guide', (req, res) => {
  const { customerId } = req.query; // Booking ID from query params

  if (!customerId) {
    return res.status(400).json({ error: 'Customer ID is required.' });
  }

  const guide = employees.find((e) => e.customer_id == customerId);

  if (guide) {
    res.json({ guideName: guide.name });
  } else {
    res.status(404).json({ error: 'Guide not found for this booking.' });
  }
});




// Create Payment Route



app.post('/api/payment', (req, res) => {
  const { customerId, amount } = req.body;

  if (!customerId || !amount) {
    return res.status(400).json({ success: false, message: 'Missing required data' });
  }
  const paymentQuery = 'INSERT INTO payment (customer_id, amount) VALUES (?, ?)';
  const timestamp = new Date().toISOString(); // Get current timestamp

  db.query(paymentQuery, [customerId, amount], (err, result) => {
    if (err) {
      console.error('Error inserting payment:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to insert payment data.' });
    }

    // Step 2: Return success response
    return res.json({ success: true, paymentId: result.insertId, timestamp: timestamp });
  });
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
            bookingId: bookingResult.insertId,
            customerId: customerId,
             // Send the bookingId back to frontend
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