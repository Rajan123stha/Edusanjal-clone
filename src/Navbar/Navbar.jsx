import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="nav-logo">
            <Link className="nav-link-head" to="/">
              <FaGraduationCap />
              edusanjal
            </Link>
          </div>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search here.."
            />
          </div>
          <div className="buttons">
            <button className="button1">Sign in</button>
            <button className="button">Sign up</button>
          </div>
        </div>
        <div className="menu">
          <ul className="nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Courses
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/college">
                College
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/school">
                School
              </Link>
            </li>
            <li>Other</li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
}
