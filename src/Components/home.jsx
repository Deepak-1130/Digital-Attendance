import React from "react";
import "../StyleSheets/home.css";
import { Link } from "react-router-dom";

const Home = ({ setLoginType }) => {
  return (
    <div className="home">
      {/* Main content */}
      <main className="home-main">
        <h1 className="home-title">Welcome to Digital Attendance</h1>
        <p className="home-subtitle">
          A secure and efficient system for faculty to mark attendance and students to track records.
        </p>

        <h3 className="login-heading">Select the login type</h3>
        <div className="button-group">
          <Link to="/login">
            <button
              className="btn student-btn"
              onClick={() => setLoginType("Student")}
            >
              Student Login
            </button>
          </Link>

          <Link to="/login">
            <button
              className="btn faculty-btn"
              onClick={() => setLoginType("Faculty")}
            >
              Faculty Login
            </button>
          </Link>
        </div>
        {/* Register Section */}
             </main>
    </div>
  );
};

export default Home;
