import { FaBuildingColumns } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
export default function Card() {
  return (
    <div className="card">
      <h3 className="title"> Bachelor in Computer Application (BCA)</h3>
      <div className="university">
        <FaBuildingColumns className="college-icon" />{" "}
        <p>Tribhuwan University</p>
      </div>
      <div className="year">
        <FaRegClock />
        <p>4 Years</p>
      </div>
    </div>
  );
}
