import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./svgs/sun.svg";
import "./styles.css";
import globe from './svgs/globe.svg'; // Update the path to your globe SVG
import matrix from './images/105452071-411e4880-5c43-11eb-8ae2-4de61f310bf9.gif';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto mt-4 px-4">
        <nav className="navbar bg-gray-200 p-4">
        <div className="globe-container">
          <img className="globe" src={globe} alt="Spinning Globe" />
        </div>
        <div className="sun">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#FFD700" />
          <g className="rays">
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="0"
              stroke="#FFD700"
              strokeWidth="4"
            />
            <line
              x1="50"
              y1="90"
              x2="50"
              y2="100"
              stroke="#FFD700"
              strokeWidth="4"
            />
            <line
              x1="10"
              y1="50"
              x2="0"
              y2="50"
              stroke="#FFD700"
              strokeWidth="4"
            />
            <line
              x1="90"
              y1="50"
              x2="100"
              y2="50"
              stroke="#FFD700"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>
          <ul
            className="text-4xl flex justify-center list-none space-x-8"
            style={{ listStyle: "none", display: "-webkit-inline-box" }}
          >
            <li className="inline-block">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/contact" className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <div className="animated-background">
        <img className="matrix-back" src={matrix} />
      </div>

    </Router>
  );
};

export default App;
