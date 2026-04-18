import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PatientPage from "./pages/Patient_Page";
import DoctorPage from "./pages/Doctor_Page";
import AdminPage from "./pages/Admin_Page";
import AdminLogin from "./pages/Admin_Login"

import "./styles/styles.css";

function App() {
  return (
    <Router>

      <nav className="navbar">
        <h2>🏥 Hospital System</h2>
        <div>
          <Link to="/">Patient</Link>
          <Link to="/doctor">Doctor</Link>
          <Link to="/admin-login">Admin Dashboard</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<PatientPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>

    </Router>
  );
}

export default App;