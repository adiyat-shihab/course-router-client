import { CourseNav } from "./CourseNav.jsx";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className={"flex justify-center gap-14 px-24 "}>
      <CourseNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Course;
