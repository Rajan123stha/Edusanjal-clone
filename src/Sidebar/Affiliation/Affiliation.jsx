import "./Affiliation.css";

export default function Affiliation() {
  return (
    <div>
      <h2 className="sidebar-title">Affliation</h2>
      <div className="sidebar-items">
        <input type="text" className="search-level" placeholder="Search..." />
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> TU</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> KU</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title"> PU</span>
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
