import React, { useState } from "react";
import ReservationForm from "../components/ReservationForm";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Home.css";
import Countdown from "react-countdown";
// import Logo from "../images/carnival-bg.png";
// import flyer from "../images/WTF CARNIVAL.jpg";

function Home() {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const toggleReservationForm = () => {
    setShowReservationForm(!showReservationForm);
  };

  const decemberDate = new Date(2024, 11);

  const targetDate = new Date("2024-12-25T00:00:00");

  return (
    <div className="mainContainer">

      <section className="banner">
        <div className="banner-container">

          <div className="banner-text">
            <button onClick={toggleReservationForm} className="reservation-button">
                    Book Reservations
            </button>
          </div>


        <div className="calendar-section">
            <h2>December 2024 Calendar</h2>

            <Calendar
              value={decemberDate}
              defaultView="month"
              minDetail="month"
              maxDetail="month"
              showNavigation={false}
              showNeighboringMonth={false}
              tileContent={({ date, view }) => {
                if (view === 'month' && date.getMonth() === 11) { // Ensure it's December
                  if (date.getDate() === 25) return <span className="custom-day">W</span>;
                  if (date.getDate() === 26) return <span className="custom-day">T</span>;
                  if (date.getDate() === 27) return <span className="custom-day">F</span>;
                }
                return null;
              }}
              tileClassName={({ date, view }) => {
                if (view === 'month' && date.getMonth() === 11) {
                  if (date.getDate() === 1) {
                    return "remove-background"; // Add custom class for Dec 1st
                  }
                  if ([25, 26, 27].includes(date.getDate())) {
                    return "replace-numbers";
                  }
                }
                return null;
              }}
              className="custom-calendar"
            />

              <div className="countdown-timer">
                <h3>Countdown to December 25th</h3>
                <Countdown
                  date={targetDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <p>
                      {days}D <span className="colon">: </span>
                      {hours}H <span className="colon">: </span>
                      {minutes}m <span className="colon">: </span>
                      {seconds}s
                    </p>
                  )}
                />
              </div>
        </div>
      </div>
    </section>


    <section className="press-release">
    <h2>Press Release</h2>

    <div className="infoContainer">
      <p>
          Welcome to WTF Carnival 2024—a celebration of music, culture, and nightlife 
          like no other in Lagos. Spanning four thrilling days from December 25th to 27th 
          and culminating on December 31st with a spectacular crossover party, WTF Carnival 
          promises an unforgettable blend of vibrant street festivities and premium VIP luxury.
      </p>
      <p>
          Join us on Onajimi Street, Gbagada, for an electrifying open-air street party 
          featuring headline DJs, supporting artists, and a lineup of incredible performers. 
          Savor delicious street food, refreshing drinks, and cocktails while soaking in the 
          high-energy atmosphere. Elevate your experience in the exclusive VIP section, 
          hosted inside The Dark Room Club, offering go-go dancers, premium drinks, and 
          intimate performances.
      </p>
      <p>
          From special guest appearances by Gbolar Mighty on December 27th to a 
          spectacular crossover celebration with Lyta and Slimcase on December 31st, this 
          is the ultimate destination for December festivities. The countdown to "One Last 
          Night" begins now—don’t miss it!
      </p>
    </div>
    </section>

    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest news and updates.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>

    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
      <img src={require("../images/ddarkroom logo.jpeg")} alt="Sponsor 1" className="sponsorsImg" />
      <img src={require("../images/hope autos logo.jpeg")} alt="Sponsor 1" className="sponsorsImg" />
      </div>
    </section>
    </div>
  );
}

export default Home;