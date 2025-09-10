import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Dashboard.css"

const Dashboard = ({ studentDetails }) => {
    return (

        <div className="dashboard fullscreen-dashboard">
            <h2 className="main-heading">Digital Attendance</h2>
            <h1 className="welcome-message">Welcome {studentDetails.name}</h1>
            <table className="details-table">
                <tbody>
                    <tr>
                        <td>Register Number</td>
                        <td>{studentDetails.registerNo}</td>
                    </tr>
                    <tr>
                        <td>Total Classes in this semester</td>
                        <td>{studentDetails.totalClasses}</td>
                    </tr>
                    <tr>
                        <td>Total Classes present</td>
                        <td>{studentDetails.totalPresent}</td>
                    </tr>
                    <tr>
                        <td>Attendance Percentage</td>
                        <td>{studentDetails.Attendance}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/"><button>Log out</button></Link>
        </div>

    )
}
export default Dashboard;