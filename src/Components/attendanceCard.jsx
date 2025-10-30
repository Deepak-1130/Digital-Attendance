import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StyleSheets/studentCard.css";

const StudentAttendanceCard = ({ studentId, subjectCode }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendance,setAttendance]=useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/getAttendance/student/${studentId}/subject/${subjectCode}`
        );
        setStudent(res.data);
      } catch (err) {
        console.error("Error fetching attendance:", err);
        setError("Failed to load student attendance.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [studentId, subjectCode]);

  const handleAttendance = async (present) => {
    try {
      await axios.post(
        `http://localhost:8080/markAttendance?studentId=${studentId}&subjectCode=${subjectCode}&present=${present}`
      );
      alert(`Marked as ${present ? "Present" : "Absent"}`);

      // Refresh data after marking attendance
      const res = await axios.get(
        `http://localhost:8080/getAttendance/student/${studentId}/subject/${subjectCode}`
      );
      setStudent(res.data);
      setAttendance(false);
    } catch (err) {
      console.error("Attendance update failed", err);
      alert("Failed to update attendance");
    }
  };

  if (loading) return <p>Loading attendance...</p>;
  if (error) return <p className="error-msg">{error}</p>;
  if (!student) return <p>No attendance data found.</p>;
return (
  <div className="student-row">
    <span className="s-name">{student.studentName}</span>
    <span className="s-id">{student.studentId}</span>
    <span className="s-sub">{student.subjectCode}</span>
    <span className="s-total">Total: {student.totalClasses}</span>
    <span className="s-present">Present: {student.presentCount}</span>
    <span className="s-percent">{student.attendancePercentage}%</span>

     {attendance?(<div className="btn-group">
        <button className="present-btn" onClick={() => handleAttendance(true)}>
          Present
        </button>

        <button className="absent-btn" onClick={() => handleAttendance(false)}>
          Absent
        </button>
      </div>):<div></div>}
  </div>
);

};

export default StudentAttendanceCard;
