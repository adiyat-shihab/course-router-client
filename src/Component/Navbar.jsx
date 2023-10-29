import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./AuthProvider.jsx";
import Swal from "sweetalert2";

export const Navbar = () => {
  const { user, SignOut } = useContext(authContext);
  const handleSignOut = () => {
    SignOut().then(() => {
      Swal.fire({
        icon: "success",
        title: "SignOut Success",
      });
    });
  };

  console.log(user);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Work</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
            daisyUI
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/course"}>Course</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <NavLink className={"btn"} to={"/register"}>
              Join
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};
