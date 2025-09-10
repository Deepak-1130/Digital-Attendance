import react from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Dashboard.css"

const Dashboard = ({ studentDetails }) => {
    return (

        <div className="dashboard">
            <h1>Welcome {studentDetails.name}</h1>
            <p>Register Number: <span>{studentDetails.registerNo}</span></p>
            <p>Total Classes in this semester: <span>{studentDetails.totalClasses}</span></p>
            <p>Total Classes present: <span>{studentDetails.totalPresent}</span></p>
            <p>Attendance Percentage:<span>{studentDetails.Attendance}</span></p>
            <Link to="/"><button>Log out</button></Link>

        </div>

    )
}
export default Dashboard;