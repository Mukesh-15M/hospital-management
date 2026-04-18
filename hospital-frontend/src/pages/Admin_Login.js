import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setName]=useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username==="Admin" && password === "Secret") {
      localStorage.setItem("admin", true);
      navigate("/admin");
    }else {
      alert("Wrong Password");
    }
  };

  

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)} 
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;