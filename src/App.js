import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import { useState } from "react";
import Home from "./Components/home";
import Dashboard from "./Components/Dashboard";
import MarkAttendance from "./Components/attendancePage";
import FacultyDashboard from "./Components/FacultyDashboard";
import AdminDashboard from "./Components/admin";
import ShowAttendance from './Components/showAttendance';
function App() {
  const studentDetails={
    name:"Deepak",
    registerNo:"91762315012",
    totalAbsents:"15",
    totalPresent:"85",
    totalClasses:"100",
    Attendance:"85%"
}
const FacultyDetails={
    name:"Visali",
    papers:2
}
   //State declaration
    const [loginType, setLoginType] =useState("");
    const [classDetails,setClassDetails]=useState("");
    // const [FacultyDetails,setFacultyDetails]=useState("");
    // const [studentDetails,setStudentDetails]=useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/getAttendance" element={<ShowAttendance/>}/>
      <Route path="/FacultyDashboard" element={<FacultyDashboard FacultyDetails={FacultyDetails} setClassDetails={setClassDetails} />}/>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<LoginPage />}/> 
      <Route path="markAttendance" element={<MarkAttendance />}/>
      <Route path="/admin" element={<AdminDashboard />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
