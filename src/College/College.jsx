import CollegeCard from "../Components/CollegeCard";
import Sidebar from "../Sidebar/Sidebar";

export default function College() {
  return (
    <>
      <h2 className="course-heading">Colleges in Nepal</h2>
      <Sidebar />
      <div className="card-container">
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
      </div>
    </>
  );
}
