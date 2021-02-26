import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import PDlogo from "../../img/PDlogo.png";

function Header() {
  return (

    <>
      <nav className="navbar navbar-b navbar-expand-md fixed-top blackBckg" id="mainNav">
        <div className="container">
          {/* <Link className="navbar-brand js-scroll" to="/">
            Piotr Dudek
    </Link> */}
    <img src={PDlogo} alt="designed PD logo" width="100px" heigth="50px"/>

          {/* <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button> */}
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">

              <li className="nav-item mLeft">

                <Link
                  to="/"
                  className={
                    // window.location.pathname === "/" || window.location.pathname === "/about"
                    "mBlue"
                      // ? "nav-link active js-scroll mBlue"
                      // : "nav-link js-scroll mWhite"
                  }
                >
                  About
            </Link>

              </li>

              <li className="nav-item mLeft">

                <a 
                // className="nav-link js-scroll mBlue" 
                target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1wvS8FygCZmsO6CCOLOFVrhdC3pfdLPmV/view?usp=sharing" className="mBlue">Resume</a>

              </li>

              <li className="nav-item mLeft">

                <Link
                  to="/projects"
                  className={
                    // window.location.pathname === "/projects" 
                    "mBlue"
                  // ? "nav-link active js-scroll mWhite" : "nav-link js-scroll mBlue"
                }
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