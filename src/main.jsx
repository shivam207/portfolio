import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Home, Projects, Experience, NotFound } from "./components";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App/>,
    children: [
      {
        path: "/portfolio/",
        element: <Home/>
      },
      {
        path: "/portfolio/projects",
        element: <Projects/>
      },
      {
        path: "/portfolio/experience",
        element: <Experience/>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
