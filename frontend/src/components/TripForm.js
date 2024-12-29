import React, { useState } from 'react';

const TripForm = () => {
  const [trip, setTrip] = useState({ destination: '', date: '', cost: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/trips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trip),
    }).then(() => alert('Trip added successfully!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Trip</h2>
      <input
        type="text"
        placeholder="Destination"
        value={trip.destination}
        onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
      />
      <input
        type="date"
        value={trip.date}
        onChange={(e) => setTrip({ ...trip, date: e.target.value })}
      />
      <input
        type="number"
        placeholder="Cost"
        value={trip.cost}
        onChange={(e) => setTrip({ ...trip, cost: e.target.value })}
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
