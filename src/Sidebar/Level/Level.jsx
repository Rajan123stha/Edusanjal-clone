import "./Level.css";

export default function Level() {
  return (
    <div>
      <h2 className="sidebar-title">Level</h2>
      <div className="sidebar-items">
        <input type="text" className="search-level" placeholder="Search..." />
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> Bachelor</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> Master</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> Diploma</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> Bachelor</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> Bachelor</span>
        </label>
      </div>
    </div>
  );
}
