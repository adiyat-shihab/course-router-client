import { CourseNav } from "./CourseNav.jsx";
import { CourseDetails } from "./CourseDetails.jsx";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className={"flex "}>
      <CourseNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Course;
