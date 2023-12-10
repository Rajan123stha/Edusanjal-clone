import "./Courses.css";
import Sidebar from "../Sidebar/Sidebar";
import CoursesData from "../Data/Data";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
export default function Courses(props) {
  return (
    <>
      <>
        <h2 className="course-heading">Courses in Nepal</h2>
        <Sidebar />
        <div className="card-container">
          {CoursesData.map(
            ({ title, shortform, university, duration, CourseId }) => (
              <Link
                className="card-link"
                to={`/courses-details/${CourseId}`}
                key={CourseId}
              >
                <Card
                  title={title}
                  shortform={shortform}
                  university={university}
                  duration={duration}
                />
              </Link>
            )
          )}
        </div>
      </>
    </>
  );
}
