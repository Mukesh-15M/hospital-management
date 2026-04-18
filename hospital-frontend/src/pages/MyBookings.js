import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

function MyBookings() {
  return (
    <div className="main-container">

      <Sidebar />

      <div className="content">
        <div className="top-bar">
          <button className="back">← Back</button>
          <div className="date">Today's Date 2022-06-03</div>
        </div>

        <h2>My Bookings history</h2>

        <div className="filter-bar">
          <input type="date" />
          <button className="filter-btn">Filter</button>
        </div>

        <div className="card">
          <p><b>Booking Date:</b> 2022-06-03</p>
          <p><b>Reference Number:</b> OC-000-1</p>

          <h3 className="title">Test Session</h3>

          <p><b>Appointment Number:</b></p>
          <h1>01</h1>

          <p><b>Test Doctor</b></p>
          <p>Scheduled Date: 2050-01-01</p>
          <p>Starts @18:00 (24h)</p>

          <button className="cancel-btn">Cancel Booking</button>
        </div>

      </div>
    </div>
  );
}

export default MyBookings;