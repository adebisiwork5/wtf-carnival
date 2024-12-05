import React, { useState } from 'react';
import "./ReservationForm.css";

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation for ${name}, ${email}, ${numberOfPeople} people`);

  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h3>Reserve Your VIP Spot</h3>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <label htmlFor="guests">Number of Guests:</label>
      <select 
        id="guests" 
        value={numberOfPeople} 
        onChange={(e) => setNumberOfPeople(e.target.value)} 
        required
      >
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default ReservationForm;
