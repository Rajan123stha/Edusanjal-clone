import "./Discipline.css";

export default function Discipline() {
  return (
    <div>
      <h2 className="sidebar-title-dis">Discilpine</h2>
      <div className="sidebar-items">
        <input type="text" className="search-level" placeholder="Search..." />
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title-dis">Information Technology</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title-dis">Electronics Engineering</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title-dis">Engineering</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title-dis">Finance</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title-dis"> Bachelor</span>
        </label>
      </div>
    </div>
  );
}
