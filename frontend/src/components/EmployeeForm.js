import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Fetch all employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Add a new employee
  const handleAddEmployee = async () => {
    if (!employeeName || !phone || !address || !joiningDate) {
      alert('Please fill out all fields before adding an employee.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/add-employee', {
        employeeName,
        phone,
        address,
        joiningDate,
      });
      alert(response.data.message);
      fetchEmployees();
      clearFields();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  // Update an existing employee
  const handleUpdateEmployee = async () => {
    if (!employeeId || !employeeName || !phone || !address || !joiningDate) {
      alert('Please fill out all fields before updating an employee.');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/modify-employee/${employeeId}`, {
        employeeName,
        phone,
        address,
        joiningDate,
      });
      alert(response.data.message);
      fetchEmployees();
      clearFields();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  // Delete an employee
  const handleDeleteEmployee = async () => {
    if (!employeeId) {
      alert('Please provide an Employee ID to delete.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/delete-employee/${employeeId}`);
      alert(response.data.message);
      fetchEmployees();
      clearFields();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  // Clear all input fields
  const clearFields = () => {
    setEmployeeId('');
    setEmployeeName('');
    setPhone('');
    setAddress('');
    setJoiningDate('');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#2b2b42', color: '#fff', minHeight: '100vh' }}>
      <h2>Employee Management</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#3e3e58', padding: '20px', borderRadius: '8px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Joining Date:</label>
          <input
            type="date"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          onClick={handleAddEmployee}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Add Employee
        </button>
        <button
          onClick={handleUpdateEmployee}
          style={{
            backgroundColor: '#17a2b8',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Update Employee
        </button>
        <button
          onClick={handleDeleteEmployee}
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Delete Employee
        </button>
        <button
          onClick={clearFields}
          style={{
            backgroundColor: '#ffc107',
            color: '#000',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Clear Fields
        </button>
      </div>

      <h3 style={{ marginTop: '20px' }}>Employee List</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#3e3e58', color: '#fff' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Phone</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Address</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employee.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employee.phone}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employee.address}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employee.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeForm;
