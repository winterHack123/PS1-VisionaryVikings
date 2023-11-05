import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StudentSignIn from "./components/StudentSignIn";
import StudentSignUp from "./components/StudentSignUp";
import FacultySignIn from "./components/FacultySignIn";
import FacultySignUp from "./components/FacultySignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Companies from "./components/Companies";
import StudentPage from "./components/StudentPage";
import FacultyPage from "./components/FacultyPage";
import CompanyDetails from "./components/CompanyDetails";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="StudentSignIn" element={<StudentSignIn />} />
          <Route path="StudentSignUp" element={<StudentSignUp />} />
          <Route path="FacultySignIn" element={<FacultySignIn />} />
          <Route path="FacultySignUp" element={<FacultySignUp />} />
          <Route path="Companies" element={<Companies />} />
          <Route path="StudentPage" element={<StudentPage />} />
          <Route path="FacultyPage" element={<FacultyPage />} />
          <Route path="CompanyDetails" element={<CompanyDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
