import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "./AuthProvider.jsx";
import Swal from "sweetalert2";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// eslint-disable-next-line no-undef
export const Register = () => {
  const { SignUP } = useContext(authContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      try {
        return axios.post("http://localhost:3000/addUser", formData);
      } catch (error) {
        setValidation("Registration failed. Please try again later.");
        console.log(error);
      }
    },
    onSuccess: async () => {
      await Swal.fire({
        title: "Register Successful",
        icon: "success",
      });
      return navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.username.value;
    console.log(email, password, name);
    const user = { name, email, password };

    setValidation("");
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return setValidation(
        "Password Must be 8 character's Including one number and letter ",
      );
    } else {
      SignUP(email, password)
        .then(() => {
          mutation.mutate(user);
          console.log(mutation);
        })
        .catch((err) => {
          setValidation("email already in use");
          console.log(err.message);
        });
    }
  };

  return (
    <div className={"relative"}>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Sign Up</h1>
            <p className="text-white mt-1">
              The most popular Course Webstie for you learning purpose
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <div className={"text-black font-bold ml-2 my-6 text-3xl "}>
              Sign up
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="username"
                id=""
                placeholder="Full name"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            </div>
            {validation && (
              <p
                className={"text-red-500 text-xs flex max-w-[237px] flex-wrap"}
              >
                {validation}
              </p>
            )}
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Register
            </button>
            <span className="text-sm ml-2  cursor-pointer">
              Already an user{" "}
              <Link to={"/login"} className={"text-blue-400"}>
                Login Now
              </Link>
            </span>
          </form>
        </div>
      </div>
      {mutation.isPending && (
        <span className="loading loading-spinner loading-lg absolute top-[50%] right-[50%]"></span>
      )}
    </div>
  );
};
