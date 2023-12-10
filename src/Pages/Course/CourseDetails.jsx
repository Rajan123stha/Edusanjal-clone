import "./CourseDetails.css";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import Button from "../../Components/Button/Button";
import Clogo from "../../Assets/collegeLogo.png";
import { useParams } from "react-router-dom";
import CoursesData from "../../Data/Data";
export default function CourseDetails(course) {
  const { courseId } = useParams();
  const selectedCourse = CoursesData.find(
    (course) => course.CourseId === courseId
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  //code to filter realated program
  const relatedPrograms = CoursesData.filter(
    (course) =>
      course.discipline === selectedCourse.discipline &&
      course.CourseId !== selectedCourse.CourseId
  );
  if (!relatedPrograms) {
    return <div>Related Course not found</div>;
  }
  return (
    <div className="course-details-container">
      <div className="course-details">
        <div className="c-logo">
          <FaGraduationCap />
        </div>
        <div className="course-info">
          <div className="c-title">{selectedCourse.title}</div>
          <div className="c-university">
            {selectedCourse.shortform} . {selectedCourse.university}
          </div>
          <div className="c-duration">
            {selectedCourse.level} . {selectedCourse.duration}
          </div>
        </div>
      </div>
      <div className="course-information">
        <div className="left-sidebar">
          <ul>
            <li>
              <Link className="list-item" to="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="list-item" to="#offering-college">
                Offering college
              </Link>
            </li>
            <li>
              <Link className="list-item" to="#">
                Eligibility
              </Link>
            </li>
            <li>
              <Link className="list-item" to="#">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-section">
          <div className="details" id="about">
            Bsc Computer Science and Information Technology (Bsc CSIT) of
            Tribhuvan University is a 4 year program divided into 8 semesters.
            With a total of 126 credit hour, the course is taught in 60
            institutions with an enrollment capacity of 3036 students.
          </div>
          <div className="button-s">
            <Button title="Get notified for this course" />
          </div>
          <div className="offering-colleges" id="offering-college">
            <h3>Offerring college</h3>
            <div className="colleges-list">
              <div className="college">
                <div className="college-name">
                  <Link to="#" className="college-logo">
                    <img src={Clogo} alt="img" />
                    <p>Texas International college</p>
                  </Link>
                </div>
                <div className="btn">
                  <Button title="Apply Now" />
                </div>
              </div>
              <div className="college">
                <div className="college-name">
                  <Link to="#" className="college-logo">
                    <img src={Clogo} alt="img" />
                    <p>Texas International college</p>
                  </Link>
                </div>
                <div className="btn">
                  <Button title="Apply Now" />
                </div>
              </div>
              <div className="college">
                <div className="college-name">
                  <Link to="#" className="college-logo">
                    <img src={Clogo} alt="img" />
                    <p>Texas International college</p>
                  </Link>
                </div>
                <div className="btn">
                  <Button title="Apply Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <h3 className="heading">Related Programs</h3>
          <div className="programs">
            {relatedPrograms.map((relatedCourse) => (
              <Card
                key={relatedCourse.CourseId}
                title={relatedCourse.title}
                shortform={relatedCourse.shortform}
                university={relatedCourse.university}
                duration={relatedCourse.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
