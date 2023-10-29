import { NavLink } from "react-router-dom";

export const CourseNav = () => {
  return (
    <>
      <div className={"flex flex-col gap-y-6"}>
        <NavLink to={"/course"}>See Course</NavLink>
        <NavLink to={"/course/add"}>Add Course</NavLink>
        <NavLink to={"/course/update"}> Update Course</NavLink>
        <NavLink to={"/course/delete"}>Delete Course</NavLink>
      </div>
    </>
  );
};
