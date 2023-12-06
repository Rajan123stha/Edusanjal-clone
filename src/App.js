import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Courses from "./Courses/Courses.jsx";
import Footer from "./Footer/Footer.jsx";
import College from "./College/College.jsx";
import School from "./School/School.jsx";
import CourseDetails from "./Pages/Course/CourseDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Courses />} />
          <Route exact path="/college" element={<College />} />
          <Route exact path="/school" element={<School />} />
          <Route exact path="/course-details" element={<CourseDetails />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
