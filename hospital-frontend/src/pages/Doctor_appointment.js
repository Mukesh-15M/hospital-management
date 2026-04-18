import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

function DoctorAppointments() {

  // Dummy data (since no backend)
  const appointments = [
    {
      patientName: "Ravi Kumar",
      date: "2026-04-12",
      time: "10:00 AM",
      issue: "Fever"
    },
    {
      patientName: "Priya Sharma",
      date: "2026-04-12",
      time: "11:30 AM",
      issue: "Headache"
    },
    {
      patientName: "Arun Raj",
      date: "2026-04-13",
      time: "02:00 PM",
      issue: "Checkup"
    }
  ];

  return (
    <div className="main-container">

      <Sidebar />

      <div className="content">
        <h2>Doctor Appointments</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Issue</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((app, index) => (
                <tr key={index}>
                  <td>{app.patientName}</td>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>{app.issue}</td>
                  <td>
                    <button className="view-btn">View</button>
                    <button className="complete-btn">Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default DoctorAppointments;