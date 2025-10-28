import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/loginPage.css";
import axios from "axios";

const LoginPage = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   const checkNumberType = (value) => {
        const regex = /^[A-Za-z]+/;
      return value.replace(regex, ''); 
    }
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:8080/login", {
        userId: userId,
        password: password,
      });

      const Data = res.data;

      
      if (Data.role === "Student") {
        navigate("/Dashboard", { state: { Data } });
      } else if (Data.role === "Faculty") {
        navigate("/FacultyDashboard", { state: { Data } });
      } 
      else if (Data.role === "HOD"){
        navigate("/HODDashboard", { state: { Data } });
      }
        else {
        alert("Invalid user role!");
      }

    } 
    catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please check your credentials or server.");
    }
  };


    // const handleLogin = () => {
    //     const  res = axios.post("http://localhost:8080/login", {
    //     userId: rollNo
    //     if (loginType === "Student") {
    //         navigate("/Dashboard", { state: { Data } });
    //     } else {
    //         navigate("/FacultyDashboard", { state: { Data } });
    //     }
    // };

    
    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userId" id="userIdLabel" className="input-label">User ID</label>
                    <input
                        autoComplete="off"
                        id="rollNo"
                        className="input-box"
                        type="text"
                        value={userId}
                        maxLength={11}
                        onChange={(e) => setUserId(checkNumberType(e.target.value))}
                        placeholder="Enter your ID No"
                    />

                    <label htmlFor="password" id="passwordLabel" className="input-label">Password</label>
                    <input
                        autoComplete="off"
                        id="password"
                        className="input-box"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />

                    <button type="submit" className="Login-Button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;