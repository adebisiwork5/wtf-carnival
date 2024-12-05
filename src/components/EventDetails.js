import React from 'react';
import './EventDetails.css';

function EventDetails() {
  return (
    <div>

      <div className="event-info">
        <p>
          <i className="fas fa-calendar-alt"></i> <strong>Dates:</strong> Dec 25th – 27th & Dec 31st, 2024
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Onajimi Street, off Pedro, Gbagada, Lagos
        </p>
      </div>

    
      <div className="event-sections">
        <section>
          <h3>Street Experience</h3>
          <p>Electrifying DJs & live performers</p>
          <p>Tasty bites: small chops, spaghetti & grilled delights</p>
          <p>Mini bar with cool drinks</p>
          <p>Access fee: <strong>₦1,000</strong></p>
        </section>

        <section>
          <h3>VIP Experience</h3>
          <p>Exclusive shows & premium VIP access</p>
          <p>Top-notch drinks & personalized service</p>
          <p>Reservations required</p>
        </section>

        <section>
          <h3>Special Guest Performances</h3>
          <p>Dec 27th: <strong>Gbolar Mighty</strong></p>
          <p id="lastDate">Dec 31st: <strong>Lyta & Slimcase</strong></p>
        </section>
      </div>
    </div>
  );
}

export default EventDetails;
