import React from "react";
import "../StyleSheets/FacultyDashboard.css";
import Cards from "./cards";

const TeacherDashboard = ({FacultyDetails} ) =>{
    const paperDetail={
      year:"2nd yr",
      subjectcode:"22CSC31"
    }
    return(
        <div className="TeacherDashboard">
            <h1>Welcome {FacultyDetails.name}</h1>
          
            <Cards paperDetails={paperDetail} />
            

                </div>

    )
}
export default TeacherDashboard ;