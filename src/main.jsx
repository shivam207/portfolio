import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Home, About, Projects, Skills, Experience, Education, ContactMe } from "./components";

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
        path: "/vite-portfolio/about",
        element: <About/>
      },
      {
        path: "/vite-portfolio/projects",
        element: <Projects/>
      },
      {
        path: "/vite-portfolio/skills",
        element: <Skills/>
      },
      {
        path: "/vite-portfolio/experience",
        element: <Experience/>
      },
      {
        path: "/vite-portfolio/education",
        element: <Education/>
      },
      {
        path: "/vite-portfolio/contact",
        element: <ContactMe/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
