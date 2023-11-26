import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="nav-logo">Edusanjal</div>
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
            <li>Course</li>
            <li>Colege</li>
            <li>School</li>
            <li>Other</li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
}
