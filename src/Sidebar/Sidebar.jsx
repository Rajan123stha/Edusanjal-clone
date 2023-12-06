import "./Sidebar.css";
import Level from "./Level/Level";
import Degree from "./Degree/Degree";
import Affiliation from "./Affiliation/Affiliation";
import Discipline from "./Discipline/Discipline";
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
