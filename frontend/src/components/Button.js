import React from 'react';

const Button = ({ text, onClick, color = '#007bff' }) => {
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: color,
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return <button onClick={onClick} style={buttonStyle}>{text}</button>;
};

export default Button;
