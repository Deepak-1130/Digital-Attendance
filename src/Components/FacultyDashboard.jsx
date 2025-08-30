import React from "react";
import "../StyleSheets/FacultyDashboard.css";
import Cards from "./cards";

const TeacherDashboard = ({ FacultyDetails }) => {
  const paperDetail = [
    { year: "2nd yr", subjectcode: "22CSC31" },
    { year: "3rd yr", subjectcode: "22CSC78" },
    { year: "3rd yr", subjectcode: "22CSC78" }
  ];

  return (
    <div className="TeacherDashboard">
      <h1>Welcome {FacultyDetails.name}</h1>

      {paperDetail.map((paper, index) => (
        <Cards key={index} paperDetails={paper} />
      ))}
    </div>
  );
};

export default TeacherDashboard;
