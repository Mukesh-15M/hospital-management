import React from "react";
import { Link } from "react-router-dom";
import "../styles/Doctor_Page.css";
import "../styles/Patient_Page.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <h4>Test Patient</h4>
      </div>

      <ul>
        <li><Link to="/">📘 My Bookings</Link></li>
        <li><Link to="/doctor">🧑‍⚕️ Doctor Appointments</Link></li>
        <li><Link to="/book">📝 Book Appointment</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;