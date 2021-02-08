import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (

    <>
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll" to="/">
            Piotr Dudek
    </Link>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">

              <li className="nav-item">

                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active js-scroll"
                      : "nav-link js-scroll"
                  }
                >
                  About
            </Link>

              </li>

              <li className="nav-item">

                <a className="nav-link js-scroll" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18QaT_OMufCjvYppv-aEjR8Yzd37k64d9/view?usp=sharing">Resume</a>

              </li>

              <li className="nav-item">

                <Link
                  to="/projects"
                  className={window.location.pathname === "/projects" ? "nav-link active js-scroll" : "nav-link js-scroll"}
                >
                  Projects
            </Link>

              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Header;