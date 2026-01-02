import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../StyleSheets/attendancePage.css";

const StudentAttendanceCard = ({ studentId, subjectCode, markAll, setAbsent, onMark, setPresent }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendanceMarked, setAttendanceMarked] = useState(true);
  const [error, setError] = useState("");
  const [pendingAttendance, setPendingAttendance] = useState(null);

  useEffect(() => {
    if (markAll !== null) {
      handleAttendance(markAll);
    }
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
  }, [studentId, subjectCode, markAll]);

  const handleAttendance = async (present) => {
    if (present) {
      setPresent((prev) => prev + 1);
    }
    else {
      setAbsent((prev) => prev + 1);
    }
    try {
      await axios.post(
        `http://localhost:8080/markAttendance?studentId=${studentId}&subjectCode=${subjectCode}&present=${present}`
      );

      const res = await axios.get(
        `http://localhost:8080/getAttendance/student/${studentId}/subject/${subjectCode}`
      );
      setStudent(res.data);
      console.log("Attendance Data:", res.data);
      setAttendanceMarked(false);
    } catch (err) {
      console.error("Attendance update failed", err);
      alert("Failed to update attendance");
    }
    onMark(studentId, present);

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

      {attendanceMarked ? (<div className="btn-group">
        <button className="present-btn" onClick={() => handleAttendance(true)}>
          Present
        </button>

        <button className="absent-btn" onClick={() => handleAttendance(false)}>
          Absent
        </button>
      </div>) : <div></div>}
    </div>
  );

};
//show Marked Attendance 
const ShowMarkedAttendance = ({ student, subjectCode }) => {
  const [studentAttendance, setStudentAttendance] = useState(null);
  useEffect(() => {
    const getAttendance = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getAttendance/student/${student.rollNo}/subject/${subjectCode}`)
        console.log("Attendance Data: bottom", res.data);
        console.log("Student Info: bottom", student);
        setStudentAttendance(res.data);
      } catch (err) {
        console.error("Error fetching attendance data:", err);
      }
    }
    getAttendance();
  }, [student])
if (!student || !studentAttendance) {
  return <p>Loading marked attendance...</p>;
}
  return (
    <div className="student-row">
      <span className="s-name">{student.name}</span>
      <span className="s-id">{student.rollNo}</span>
      <span className="s-sub">{studentAttendance.subjectCode}</span>
      <span className="s-total">Total: {studentAttendance.totalClasses}</span>
      <span className="s-present">Present: {studentAttendance.presentCount}</span>
      <span className="s-percent">{studentAttendance.attendancePercentage}%</span>


    </div>
  );
}
//Main Component
const MarkAttendance = () => {
  var [presentCount, setPresent] = useState(0);
  var [absentCount, setAbsent] = useState(0);
  const location = useLocation();
  const [date, setDate] = useState("");
  const [students, setStudents] = useState([]);
  const [markAll, setMarkAll] = useState(null);
  const classId = location.state?.classId;
  const subjectCode = location.state?.subjectCode;
  const [markedStudent, setMarkedStudent] = useState([]);

  console.log("Received:", { classId, subjectCode });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getStudentByClass/${classId}`);
        console.log("API Response:", res);
        setStudents(res.data);
        const student=1;
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };


    fetchStudents();
  }, [classId]);

  const handleMarked = (studentId, present) => {
    const student = students.find((stu) => (stu.rollNo === studentId));
    setMarkedStudent((prev) => [...prev, student]);
    setStudents((prev => (prev.filter(student => (student.rollNo !== studentId)))));
  }

  return (

    <div className="mark-container">
      <div className="attendanceData">

        <h1 className="title">Mark Attendance</h1>

        <h2 className="students-title">Subject Code: {subjectCode}</h2>

        {students === 0 ? (
          <p>Loading students...</p>
        ) : (
          <>
            <div className="options-bar">
              <input type="date" className="options" />
              <input type="number" className="options" placeholder="Period" max={7}></input>
            </div>
            {
              students.map((student) => (
                <StudentAttendanceCard
                  setAbsent={setAbsent}
                  setPresent={setPresent}
                  key={student.rollNo}
                  studentId={student.rollNo}
                  subjectCode={subjectCode}
                  markAll={markAll}
                  onMark={handleMarked}
                />
              ))
            }
            <div className="footer">
            {students.length===0?( 
              <>
               <p>Total Present {presentCount}</p>
              <p>Total absent {absentCount}</p>
              </>
            ):(
              <>
              <button className="absent-btn" onClick={() => { setMarkAll(false) }}>Mark All Absent</button>
              <button className="present-btn" onClick={() => { setMarkAll(true) }}>Mark All Present</button>
              <p>Total Present {presentCount}</p>
              <p>Total absent {absentCount}</p>
              </>
              
            )}
              
             
            </div>
            {markedStudent.length ? (
              markedStudent.map((student) =>
              (<ShowMarkedAttendance
                student={student}
                subjectCode={subjectCode}
              />))
            ) : <div></div>}

          </>
        )}
      </div>
    </div>

  );
};

export default MarkAttendance;
