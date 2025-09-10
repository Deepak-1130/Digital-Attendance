import React from "react";
import "../StyleSheets/FacultyDashboard.css";
import Cards from "./cards";
//Faculty Dashboard 
const TeacherDashboard = ({ FacultyDetails }) => {

//Paper Details Array  
  const paperDetail = [
    { year: "2nd yr", subjectcode: "22CSC31" },
    { year: "3rd yr", subjectcode: "22CSC78" },
    { year: "4th yr", subjectcode: "22CSC78" }
  ];

  return (
    <div className="TeacherDashboard fullscreen-faculty">
      <h2 className="faculty-main-heading">Digital Attendance - Faculty Dashboard</h2>
      <h1 className="faculty-welcome">Welcome {FacultyDetails.name}</h1>
      <div className="faculty-card-grid">
        {paperDetail.map((paper, index) => (
          <Cards key={index} paperDetails={paper} />
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
