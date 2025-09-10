import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/loginPage.css";
import { Link } from "react-router-dom";

// Login Component 
const LoginPage = ({ loginType }) => {

    //Hooks declaration
    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        console.log(rollNo);
    };

    //Number check function 
    const checkNumberType = (value) => {
        return value.replace(/[^0-9]/g, "");
    };

    //Function Declaration 
    const handleLogin = () => {
        if (loginType === "Student") {
            navigate("/Dashboard");
        } else {
            navigate("/FacultyDashboard");
        }
    };

    return (
        <div className="login-page">
            {/* 🔹 Heading at top */}
            <h1 className="main-heading">Digital Attendance System</h1>

            <div className="login-container">
                <h2>{loginType} Login</h2>  {/* Shows "Student Login" or "Faculty Login" */}

                <form onSubmit={handleSubmit}>
                    <label htmlFor="rollNo" className="input-label">{loginType} ID</label>
                    <input
                        autoComplete="off"
                        id="rollNo"
                        className="input-box"
                        type="text"
                        value={rollNo}
                        maxLength={11}
                        onChange={(e) => setRollNo(checkNumberType(e.target.value))}
                        placeholder="Enter your ID No"
                    />

                    <label htmlFor="password" className="input-label">Password</label>
                    <input
                        autoComplete="off"
                        id="password"
                        placeholder="Enter Your Password"
                        className="input-box"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={handleLogin} className="Login-Button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
