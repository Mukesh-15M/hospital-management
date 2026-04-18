import React, { useState } from "react";
import axios from "axios";

function PatientPage() {
  const [form, setForm] = useState({
    patientName: "",
    problem: "",
    preferredDoctor: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    await axios.post("http://localhost:5000/api/appointments", form);
    alert("Appointment Requested");
  };

  return (
    <div className="container">
      <h2>Patient Appointment</h2>

      <div className="card">

      <input name="patientName" placeholder="Name" onChange={handleChange} />
      <input name="problem" placeholder="Problem" onChange={handleChange} />
      <input name="preferredDoctor" placeholder="Doctor" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />

      <button onClick={submitForm}>Submit</button>
    </div>
    </div>
  );
}

export default PatientPage;