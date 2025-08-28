import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import { useState } from "react";
import Home from "./Components/home";
import Dashboard from "./Components/Dashboard";
function App() {
  const studentDetails={
    name:"Deepak",
    registerNo:"91762315012",
    totalAbsents:"15",
    totalPresent:"85",
    totalClasses:"100",
    Attendance:"85%"
}
   //State declaration
    const [loginType, setLoginType] =useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home setLoginType={setLoginType} />} />
      <Route path="/Dashboard" element={<Dashboard studentDetails={studentDetails}/>} />
      <Route path="/login" element={<LoginPage loginType={loginType}/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
