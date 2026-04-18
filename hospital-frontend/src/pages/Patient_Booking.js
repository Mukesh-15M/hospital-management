import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

function BookAppointment() {

  const [form, setForm] = useState({
    patientName: "",
    problems: [""],
    doctors: []
  });

  const doctorList = ["Dr. John", "Dr. Smith", "Dr. Kumar"];

  // Handle name
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle problems (multiple)
  const handleProblemChange = (index, value) => {
    const updatedProblems = [...form.problems];
    updatedProblems[index] = value;
    setForm({ ...form, problems: updatedProblems });
  };

  // Add new problem field
  const addProblemField = () => {
    setForm({ ...form, problems: [...form.problems, ""] });
  };

  // Handle multiple doctor selection
  const handleDoctorSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setForm({ ...form, doctors: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Appointment request submitted!");
  };

  return (
    <div className="main-container">

      <Sidebar />

      <div className="content">
        <h2>Book Appointment</h2>

        <form className="form" onSubmit={handleSubmit}>

          {/* Patient Name */}
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            onChange={handleChange}
            required
          />

          {/* Problems Section */}
          <label><b>List Your Problems:</b></label>

          {form.problems.map((problem, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Problem ${index + 1}`}
              value={problem}
              onChange={(e) => handleProblemChange(index, e.target.value)}
              required
            />
          ))}

          <button type="button" onClick={addProblemField}>
            + Add Another Problem
          </button>

          {/* Wishlist Doctors */}
          <label><b>Select Preferred Doctors:</b></label>

          <select multiple onChange={handleDoctorSelect}>
            {doctorList.map((doc, index) => (
              <option key={index} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          <button type="submit" className="book-btn">
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookAppointment;