import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/appointments/approved")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Doctor Dashboard</h2>

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p><b>Name:</b> {item.patientName}</p>
          <p><b>Problem:</b> {item.problem}</p>
          <p><b>Date:</b> {item.date}</p>
          <p className="approved">{item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorPage;