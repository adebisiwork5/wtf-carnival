import React from 'react';

function TicketSummary({ ticketType, date, quantity, price }) {
  const totalPrice = price * quantity;

  return (
    <div className="ticket-summary">
      <h3>Ticket Summary</h3>
      <p>
        <strong>Type:</strong> {ticketType}
      </p>
      <p>
        <strong>Date:</strong> December {date}th
      </p>
      <p>
        <strong>Quantity:</strong> {quantity || 'Free Access'}
      </p>
      <p>
        <strong>Total Price:</strong> {price > 0 ? `₦${totalPrice.toLocaleString()}` : 'Free'}
      </p>
    </div>
  );
}

export default TicketSummary;
