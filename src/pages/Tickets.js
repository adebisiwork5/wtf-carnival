import React, { useState } from 'react';
import TicketSummary from '../components/TicketSummary';
import ReservationForm from '../components/ReservationForm';
import "./Tickets.css";

function Tickets() {
  const [ticketType, setTicketType] = useState('Street'); 
  const [quantity, setQuantity] = useState(1); 
  const [selectedDate, setSelectedDate] = useState('25'); 

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBuyClick = () => {
    if (ticketType === 'VIP') {
      alert('Your VIP reservation has been submitted!');
    } else if (selectedDate === '25') {
      alert('You have successfully signed up for free access on December 25th!');
    } else {
      const totalCost = quantity * ticketPrices[selectedDate];
      alert(`You have purchased ${quantity} tickets for December ${selectedDate} at a total cost of ₦${totalCost}.`);
    }
  };

  const ticketPrices = {
    '25': 0, 
    '26': 1000, 
    '27': 1000, 
  };

  return (
    <div className="tickets">
      <h2>Access Tickets</h2>
      <form>
        <label htmlFor="ticketType">Ticket Type:</label>
        <select 
          id="ticketType" 
          value={ticketType} 
          onChange={handleTicketTypeChange}
        >
          <option value="Street">Street Experience</option>
          <option value="VIP">VIP Experience</option>
        </select>


        {ticketType === 'Street' && (
          <>
            <label htmlFor="date">Select Date:</label>
            <select 
              id="date" 
              value={selectedDate} 
              onChange={handleDateChange}
            >
              <option value="25">December 25th</option>
              <option value="26">December 26th</option>
              <option value="27">December 27th</option>
            </select>


            {selectedDate !== '25' && (
              <>
                <label htmlFor="quantity">Quantity:</label>
                <select 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </>
            )}
          </>
        )}
      </form>


      {ticketType === 'VIP' ? (
        <ReservationForm />
      ) : (
        <TicketSummary 
          ticketType="Street Experience" 
          date={selectedDate} 
          quantity={selectedDate !== '25' ? quantity : 0} 
          price={ticketPrices[selectedDate]}
        />
      )}

      <button 
        className="buy-button" 
        onClick={handleBuyClick}
        disabled={ticketType === 'Street' && selectedDate !== '25' && quantity === 0} // Disable for invalid cases
      >
        {ticketType === 'VIP' ? 'Submit Reservation' : 'Buy Tickets'}
      </button>
    </div>
  );
}

export default Tickets;
