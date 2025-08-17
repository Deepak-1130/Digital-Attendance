import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
