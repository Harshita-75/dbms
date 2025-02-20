import React from 'react';

const InputField = ({ label, type = 'text', value, onChange }) => (
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', color: '#fff', marginBottom: '5px' }}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
    />
  </div>
);

export default InputField;
