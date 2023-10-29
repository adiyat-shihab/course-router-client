import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../AuthProvider.jsx";
export const CourseAdd = () => {
  const { data } = useContext(authContext);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log(name, image);
    const course = { name, image };

    mutation.mutate(course);
  };

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.put(
        `http://localhost:3000/course/${data.data._id}`,
        newTodo,
      );
    },
  });
  if (mutation.isSuccess) {
    Swal.fire({
      title: "update Success",
      icon: "success",
    });
  }
  if (mutation.isError) {
    console.log(mutation.error.message);
  }
  return (
    <>
      {" "}
      <div className="hero py-32 px-64  rounded bg-base-200">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="card flex-shrink-0   shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className={"btn btn-primary"}
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
