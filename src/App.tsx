import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./styles.css";
import matrix from './images/105452071-411e4880-5c43-11eb-8ae2-4de61f310bf9.gif';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto mt-4 px-4">
        <nav className="navbar bg-gray-200 p-4">
          <ul
            className="text-4xl flex justify-center list-none space-x-8"
            style={{ listStyle: "none", display: "-webkit-inline-box", fontFamily: 'Courier New' }}
          >
            <li className="inline-block">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="inline-  block">
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
        <img className="matrix-back" src={matrix} alt="matrix background gif"/>
      </div>

    </Router>
  );
};

export default App;
