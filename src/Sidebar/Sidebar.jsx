import Affiliation from "../Affiliation/Affiliation";
import Degree from "../Degree/Degree";
import Discipline from "../Discipline/Discipline";
import Level from "../Level/Level";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <Level />
      <Degree />
      <Affiliation />
      <Discipline />
    </section>
  );
}
