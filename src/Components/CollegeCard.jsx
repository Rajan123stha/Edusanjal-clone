import { FaBuildingColumns } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function CollegeCard() {
  return (
    <div className="card">
      <h3 className="title">Kathford International College</h3>
      <div className="university">
        <FaBuildingColumns className="college-icon" />
        <p>Tribhuwan University</p>
      </div>
      <div className="year">
        <CiLocationOn />
        <p>Balkumari</p>
      </div>
    </div>
  );
}
