import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Piotr Dudek
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item nav-link">
            <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1SvWK91DJCqiuyIu0Yu2cErhMXX89el7g/view?usp=sharing">Resume</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header;