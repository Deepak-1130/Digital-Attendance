import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../StyleSheets/Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const Data = location.state?.Data;
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const studentId = Data?.userId;

  useEffect(() => {
    if (!studentId) {
      setError("No student ID found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchAttendance = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/getAttendanceByStudent/${studentId}`
        );
        setAttendance(res.data);
      } catch (err) {
        console.error("Error fetching attendance:", err);
        setError("Failed to load attendance. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [studentId]);

  const getColorClass = (percentage) => {
    const value = parseFloat(percentage);
    if (value >= 90) return "green";
    if (value >= 75) return "yellow";
    return "red";
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Fetching your attendance data...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error-msg">{error}</p>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p className="subtitle">Welcome, {attendance.studentName || Data.name} 👋</p>
      </header>

      <main className="dashboard-content">
        <section className="card info-card">
          <h2>Student Information</h2>
          <p><strong>Register Number:</strong> {attendance.studentId}</p>
        </section>

        <section className="card attendance-card">
          <h2> Attendance Overview</h2>
          <p>Total Classes: <span>{attendance.totalClasses}</span></p>
          <p>Classes Present: <span>{attendance.presentCount}</span></p>
          <p>
            Attendance Percentage:{" "}
            <span className={`attendance-value ${getColorClass(attendance.attendancePercentage)}`}>
              {attendance.attendancePercentage}%
            </span>
          </p>

          <div className="progress-bar">
            <div
              className={`progress-fill ${getColorClass(attendance.attendancePercentage)}`}
              style={{ width: `${attendance.attendancePercentage}%` }}
            ></div>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <Link to="/">
          <button className="logout-btn">Logout</button>
        </Link>
      </footer>
    </div>
  );
};

export default Dashboard;
