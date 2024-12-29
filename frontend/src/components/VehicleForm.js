import React, { useState } from 'react';

const VehicleForm = () => {
  const [vehicle, setVehicle] = useState({ name: '', type: '', capacity: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle),
    }).then(() => alert('Vehicle added successfully!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Vehicle</h2>
      <input
        type="text"
        placeholder="Vehicle Name"
        value={vehicle.name}
        onChange={(e) => setVehicle({ ...vehicle, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Vehicle Type"
        value={vehicle.type}
        onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Capacity"
        value={vehicle.capacity}
        onChange={(e) => setVehicle({ ...vehicle, capacity: e.target.value })}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleForm;
