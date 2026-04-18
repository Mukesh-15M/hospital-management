import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/api/appointments")
      .then(res => setData(res.data));
  };

  useEffect(() => {
  const isLoggedIn = localStorage.getItem("admin");
  if (!isLoggedIn) {
    navigate("/admin-login");
  }
  fetchData();
})

  const approve = async (id) => {
    await axios.put(`http://localhost:5000/api/appointments/${id}`, {
      status: "Approved"
    });
    fetchData();
  };

  const complete = async (id) => {
  await axios.put(`http://localhost:5000/api/appointments/${id}`, {
    status: "Appointment Completed"
  });
  fetchData();
};

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p>{item.patientName}</p>
          <p className={item.status === "Approved" ? "approved" : 
                        item.status === "Appointment Completed" ? "completed" :
                        "pending"
          }>
            {item.status}
          </p>

          {item.status !== "Approved" && (
            <button onClick={() => approve(item._id)}>
              Approve
            </button>
          )}

          {item.status === "Approved" && (
            <button onClick={() => complete(item._id)}>
               Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>

    
  );
}

export default AdminPage;