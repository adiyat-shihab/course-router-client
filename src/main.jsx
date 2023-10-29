import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Parent } from "./Parent.jsx";
import { Login } from "./Component/Login.jsx";
import { Register } from "./Component/Register.jsx";
import { AuthProvider } from "./Component/AuthProvider.jsx";
import Course from "./Component/Course.jsx";
import { CourseAdd } from "./Component/Course Crud Operation/CourseAdd.jsx";
import { CourseGet } from "./Component/Course Crud Operation/CourseGet.jsx";
import { CourseDelete } from "./Component/Course Crud Operation/CourseDelete.jsx";
import { CourseUpdate } from "./Component/Course Crud Operation/CourseUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/course",
        element: <Course />,
        children: [
          {
            path: "/course",
            element: <CourseGet />,
          },
          {
            path: "/course/add",
            element: <CourseAdd />,
          },
          {
            path: "/course/delete",
            element: <CourseDelete />,
          },
          {
            path: "/course/update",
            element: <CourseUpdate />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
