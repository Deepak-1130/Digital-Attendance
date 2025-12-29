import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StyleSheets/FacultyDashboard.css";
import { useLocation, useNavigate } from "react-router-dom";

const TeacherDashboard = ({ setClassDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
        setError("Failed to load faculty details.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [facultyId]);
  
  const getAttendance = async (paper)=>{
    try{
      const res = await axios.get(`http://localhost:8080/getSubject/${paper}`);
      const subjectData = res.data;

      const classId=subjectData.classes?.classId;
    
      const subjectCode=paper;
      navigate("/getAttendance",{state:{classId:classId,subjectCode: subjectCode}})
    
    }catch(err){
      console.log(err)

    }

  }

  const handlePaperClick = async (paper) => {
    try {
      const res = await axios.get(`http://localhost:8080/getSubject/${paper}`);
      const subjectData = res.data;

      const classId = subjectData.classes?.classId;
      const subjectCode = paper;

      if (!classId) {
        alert("Class ID not found for this subject.");
        return;
      }


      navigate("/markAttendance", {
        state: { classId: classId, subjectCode: subjectCode }
      });

    } catch (err) {
      console.error("Error fetching subject details:", err);
      alert("Failed to fetch subject details.");
    }
  };
  if (loading) return <p>Loading faculty dashboard...</p>;
  if (error) return <p className="error-msg">{error}</p>;

  return (
    <div className="faculty-dashboard">
      <div className="faculty-dashboard-header">
        <h1>WelCome {facultyDetails.name}</h1>
        <h3>Department: {facultyDetails.department}</h3>
      </div>
      <div className="faculty-dashboard-body">
        <h2>Papers Handling</h2>
        {handlingPapers.length === 0 ?
          (<h2>No papers assigned.</h2>
          ) : (
            handlingPapers.map((paper, index) => (
              <div className="papercontainer" key={index}>
                <p
                className="handling-papers"
                  
                  >{paper}</p>
                  <button onClick={()=>{handlePaperClick(paper)}}>Mark Attendance</button>
                  <button onClick={()=>{getAttendance(paper)}}>Get Attendance</button>
              </div>
            ))
          )}
      </div>
    </div>
  )
};
export default TeacherDashboard;