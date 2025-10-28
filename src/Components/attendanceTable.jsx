import React from "react";
import { useLocation } from "react-router-dom";
import "../StyleSheets/FacultyDashboard.css";

const MarkAttendance= () => {
    const location = useLocation();
    const paper = location.state?.paper;

    return (
        <div className="TeacherDashboard">
            <h1>Faculty Dashboard</h1>
            {paper && (
                <div>
                    <h2>Selected Paper</h2>
                    <p>Year: {paper.year}</p>
                    <p>Subject Code: {paper.subjectcode}</p>
                </div>
            )}
            {/* ...rest of your dashboard... */}
        </div>
    );
};

export default MarkAttendance;