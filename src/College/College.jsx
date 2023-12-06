import Card from "../Components/Card";
import Sidebar from "../Sidebar/Sidebar";

export default function College() {
  return (
    <>
      <h2 className="course-heading">Colleges in Nepal</h2>
      <Sidebar />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
