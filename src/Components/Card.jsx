import { FaBuildingColumns } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
export default function Card({ title, shortform, university, duration }) {
  return (
    <div className="card">
      <h3 className="title">
        {title}({shortform})
      </h3>
      <div className="university">
        <FaBuildingColumns className="college-icon" /> <p>{university}</p>
      </div>
      <div className="year">
        <FaRegClock />
        <p>{duration}</p>
      </div>
    </div>
  );
}
