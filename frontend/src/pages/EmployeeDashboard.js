import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';

const EmployeeDashboard = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAdd = async () => {
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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/delete-employee/${employeeId}`);
      alert(response.data.message);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleModify = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/modify-employee/${employeeId}`, {
        employeeName,
        phone,
        address,
        joiningDate,
      });
      alert(response.data.message);
      fetchEmployees();
    } catch (error) {
      console.error('Error modifying employee:', error);
    }
  };

  const clearFields = () => {
    setEmployeeId('');
    setEmployeeName('');
    setPhone('');
    setAddress('');
    setJoiningDate('');
  };
  const buttonStyle = (color) => ({
    backgroundColor: color,
    color: '#fff',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.3s, box-shadow 0.3s',
  });

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };
  return (
    <div style={{ padding: '20px',  background: 'linear-gradient(90deg,rgb(25, 81, 76),rgb(55, 25, 3))', color: '#fff', minHeight: '100vh' }}>
      <h2>Employee Dashboard</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto',  background: 'linear-gradient(90deg,rgb(89, 16, 16),rgb(12, 69, 15))', padding: '20px', borderRadius: '8px' }}>
        <InputField label="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        <InputField label="Employee Name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
        <InputField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <InputField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <InputField label="Joining Date" type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
         <button
          style={buttonStyle('#28a745')}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle('#28a745'))
          }
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          style={buttonStyle('#17a2b8')}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle('#17a2b8'))
          }
          onClick={handleModify}
        >
          Modify
        </button>
        <button
          style={buttonStyle('#dc3545')}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle('#dc3545'))
          }
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          style={buttonStyle('#ffc107')}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle('#ffc107'))
          }
          onClick={clearFields}
        >
          Clear
        </button>
      </div>
      <h3 style={{ marginTop: '30px', textAlign: 'center' }}>Employee List</h3>
      {employees.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No employees available</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
              background: 'linear-gradient(90deg,rgb(89, 16, 16),rgb(12, 69, 15))',
              color: '#ffff',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#2745', color: '#fff' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Phone</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Address</th>
               
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp.id}
                  style={{
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <td style={{ padding: '10px' }}>{emp.id}</td>
                  <td style={{ padding: '10px' }}>{emp.name}</td>
                  <td style={{ padding: '10px' }}>{emp.phone}</td>
                  <td style={{ padding: '10px' }}>{emp.address}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
