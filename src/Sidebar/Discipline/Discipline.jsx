import "./Discipline.css";
export default function Discipline() {
  return (
    <div>
      <h2 className="sidebar-title">Discilpine</h2>
      <div className="sidebar-items">
        <input type="text" className="search-level" placeholder="Search..." />
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title">IT</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title">Engineering</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title">Engineering</span>
        </label>
        <label className="sidebar-label">
          <input type="checkbox" className="option" name="level" />
          <span className="title">Finance</span>
        </label>
      </div>
    </div>
  );
}
