import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import StudentAttendanceCard from "./attendanceRow"; 
import "../StyleSheets/markAttendance.css";

const MarkAttendance = () => {
  const location = useLocation();

  const [students, setStudents] = useState([]);

  const classId = location.state?.classId;
  const subjectCode = location.state?.subjectCode;

  console.log("Received:", { classId, subjectCode });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getStudentByClass/${classId}`);
        console.log("API Response:", res);
        setStudents(res.data);
        
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    
         fetchStudents();
  }, [classId]);

  return (
    
    <div className="mark-container">
      <div className="attendanceData">
       
              <h1 className="title">Mark Attendance</h1>
      <h2 className="students-title">Subject Code: {subjectCode}</h2>

      {students.length === 0 ? (
        <p>Loading students...</p>
      ) : (
        students.map((student) => (
          <StudentAttendanceCard
            key={student.rollNo}
            studentId={student.rollNo}     
            subjectCode={subjectCode} 
          />
        ))
      )}
    </div>
    </div>

  );
};

export default MarkAttendance;
