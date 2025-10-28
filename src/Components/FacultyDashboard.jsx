import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StyleSheets/FacultyDashboard.css";
import { useLocation } from "react-router-dom";

const TeacherDashboard = ({ setClassDetails }) => {
  const location = useLocation();
  const Data = location.state?.Data;
  const facultyId = Data?.userId;

  const [facultyDetails, setFacultyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [handlingPapers, setHandlingPapers] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      if (!facultyId) {
        setError("Faculty ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:8080/getfaculty/${facultyId}`);
        setFacultyDetails(res.data);

        if (res.data.handlingPaper) {
          const papers = res.data.handlingPaper.split(",").map((p) => p.trim());
          setHandlingPapers(papers);
        }
      } catch (err) {
        console.error("Error fetching faculty details:", err);
        setError("Failed to load faculty details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [facultyId]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading faculty dashboard...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error-msg">{error}</p>;
  }

  return (
    <div className="faculty-dashboard-fullpage">
      <header className="faculty-header">
        <h1> Faculty Dashboard</h1>
        <h2>{facultyDetails?.name}</h2>
        <p>{facultyDetails?.designation} | {facultyDetails?.department}</p>
      </header>

      <main className="faculty-main">
        <section className="faculty-info">
          <h3> Faculty Details</h3>
          <div className="info-grid">
            <p><strong>ID:</strong> {facultyDetails?.facultyId}</p>
            <p><strong>Faculty Of:</strong> {facultyDetails?.facultyOf}</p>
            <p><strong>Mobile:</strong> {facultyDetails?.phNo}</p>
            <p><strong>Department:</strong> {facultyDetails?.department}</p>
          </div>
        </section>

        <section className="faculty-papers">
          <h3> Handling Papers</h3>
          <div className="paper-btns">
            {handlingPapers.length > 0 ? (
              handlingPapers.map((paper, index) => (
                <button
                  key={index}
                  className="paper-button"
                  onClick={() => setClassDetails(paper)}
                >
                  {paper}
                </button>
              ))
            ) : (
              <p>No papers assigned.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="faculty-footer">
        <p>© 2025 Faculty Portal | Developed by Deepak</p>
      </footer>
    </div>
  );
};

export default TeacherDashboard;
