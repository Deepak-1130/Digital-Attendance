import React, { useEffect, useState } from "react";
import axios from "axios";
import "../StyleSheets/admin.css";   // ✅ Add this stylesheet

function AdminDashboard() {

  const [counts, setCounts] = useState({
    year1: null,
    year2: null,
    year3: null,
    year4: null
  });

  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res1 = await axios.get("http://localhost:8080/getCountOfStudents/1");
        const res2 = await axios.get("http://localhost:8080/getCountOfStudents/2");
        const res3 = await axios.get("http://localhost:8080/getCountOfStudents/3");
        const res4 = await axios.get("http://localhost:8080/getCountOfStudents/4");

        setCounts({
          year1: res1.data,
          year2: res2.data,
          year3: res3.data,
          year4: res4.data
        });
      } catch (error) {
        console.error("Error fetching student counts:", error);
      }
    };

    const fetchFaculty = async () => {
      try {
        const res = await axios.get("http://localhost:8080/getAllFaculty");
        setFacultyList(res.data);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      }
    };

    fetchCounts();
    fetchFaculty();
  }, []);

  return (
    <div className="admin-container">

      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="cards-container">
        <div className="info-card">
          <h3>1st Year</h3>
          <p>{counts.year1 ?? "..."}</p>
        </div>
        <div className="info-card">
          <h3>2nd Year</h3>
          <p>{counts.year2 ?? "..."}</p>
        </div>
        <div className="info-card">
          <h3>3rd Year</h3>
          <p>{counts.year3 ?? "..."}</p>
        </div>
        <div className="info-card">
          <h3>4th Year</h3>
          <p>{counts.year4 ?? "..."}</p>
        </div>
      </div>

      <h3 className="faculty-title">Faculty List</h3>

      <div className="table-wrapper">
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Handling Paper</th>
              <th>Designation</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {facultyList.map((f, index) => (
              <tr key={index}>
                <td>{f.facultyId}</td>
                <td>{f.name}</td>
                <td>{f.department}</td>
                <td>{f.handlingPaper}</td>
                <td>{f.designation}</td>
                <td>{f.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
