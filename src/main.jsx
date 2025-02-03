import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Home, Projects, Experience } from "./components";

const router = createBrowserRouter([
  {
    path: "/vite-portfolio/",
    element: <App/>,
    children: [
      {
        path: "/vite-portfolio/",
        element: <Home/>
      },
      {
        path: "/vite-portfolio/projects",
        element: <Projects/>
      },
      {
        path: "/vite-portfolio/experience",
        element: <Experience/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
