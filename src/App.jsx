import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  NavBar,
  Home,
  About,
  Projects,
  Skills,
  Experience,
  Education,
  ContactMe,
  Footer,
  NotFound,
} from '../src/components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <ToastContainer />
        <div className="bg-lightDesert">
          <NavBar />
            {/* <Link to="/vite-portfolio/">Home</Link>  */}
            {/* <Link to="/vite-portfolio/about">About</Link>
            <Link to="/vite-portfolio/projects">Projects</Link>
            <Link to="/vite-portfolio/skills">Skills</Link>
            <Link to="/vite-portfolio/experience">Experience</Link>
            <Link to="/vite-portfolio/education">Education</Link>
            <Link to="/vite-portfolio/contact">ContactMe</Link> */}
            {/* <Link to="*" element={<NotFound />} /> */}
          <Outlet/>
          <Footer />
        </div>
    </>
  );
}

export default App;
