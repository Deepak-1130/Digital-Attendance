import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import { useState } from "react";
import SignUpPage from "./Components/signUpPage";
import Home from "./Components/home";
function App() {
   //State declaration
    const [loginType, setLoginType] =useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home setLoginType={setLoginType} />} />
      <Route path="/login" element={<LoginPage loginType={loginType}/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
