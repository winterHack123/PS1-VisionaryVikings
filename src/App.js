import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componens/NavBar";
import Home from "./componens/Home";
import StudentPage from "./componens/StudentPage";
import StudentSignUp from "./componens/StudentSignUp";
import FacultySignIn from "./componens/FacultySignIn";
import FacultySignUp from "./componens/FacultySignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componens/Footer";

function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="StudentPage" element={<StudentPage />} />
          <Route path="StudentSignUp" element={<StudentSignUp />} />
          <Route path="FacultySignIn" element={<FacultySignIn />} />
          <Route path="FacultySignUp" element={<FacultySignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
