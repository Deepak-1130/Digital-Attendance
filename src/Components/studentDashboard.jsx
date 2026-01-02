import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../StyleSheets/Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const Data = location.state?.Data;

  const [attendance, setAttendance] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const studentId = Data?.userId;

  useEffect(() => {
    if (!studentId) {
      setError("No student ID found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const [attendanceRes, studentRes] = await Promise.all([
          axios.get(`http://localhost:8080/getAttendanceByStudent/${studentId}`),
          axios.get(`http://localhost:8080/getStudent/${studentId}`)
        ]);

        setAttendance(attendanceRes.data);
        setStudentDetails(studentRes.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  // Error Screen
  if (error) {
    return <p className="error-msg">{error}</p>;
  }

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>

        <div className="header-part">
          <p className="studentName">
            <strong>{attendance.studentName || Data?.name}</strong>
          </p>

          <p className="studentdata">ID: {attendance.studentId}</p>
          <p className="studentdata">Email: {studentDetails.emailId}</p>
          <p className="studentdata">Year: {studentDetails.year}</p>

          <Link to="/">
            <button className="logout-btn">Logout</button>
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="dashboard-content">

        {/* Attendance Overview */}
        <section className="attendance-section">
          <h1>Attendance Overview</h1>
{/* attendance container*/}
          <div className="attendance-container">
{/* attendance card*/}
             <div className="attendance-card">
              <h4>Percentage</h4>
              <p >
                  {attendance.attendancePercentage}%
              </p>
            </div>

            <div className="attendance-card">
              <h4>Total Period</h4>
              <p>  {attendance.totalClasses}</p>
            </div>

            <div className="attendance-card">
              <h4>Present Period</h4>
              <p>{attendance.presentCount}</p>
            </div>

           

          </div>
        
        </section>
      </main>

      <footer className="dashboard-footer">
      </footer>

    </div>
  );
};

export default Dashboard;
