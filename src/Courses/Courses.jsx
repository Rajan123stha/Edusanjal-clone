import "./Courses.css";
import Sidebar from "../Sidebar/Sidebar";

import Card from "../Components/Card";
import { Link } from "react-router-dom";
export default function Courses() {
  return (
    <>
      <h2 className="course-heading">Courses in Nepal</h2>
      <Sidebar />
      <div className="card-container">
        <Link className="card-link" to="/course-details">
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
