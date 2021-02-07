import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     Piotr Dudek
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/" || window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About
    //         </Link>
    //       </li>
    // {/* <li className="nav-item">
    //         <Link
    //           to="/contact"
    //           className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //         >
    //           Contact
    //         </Link>
    //       </li> */}
    //       <li className="nav-item">
    //         <Link
    //           to="/projects"
    //           className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
    //         >
    //           Projects
    //         </Link>
    //       </li>

    //       <li className="nav-item nav-link">
    //         <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1SvWK91DJCqiuyIu0Yu2cErhMXX89el7g/view?usp=sharing">Resume</a>
    //       </li>

    //     </ul>
    //   </div>
    // </nav>

    <>
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll" to="/">
            Piotr Dudek
    </Link>
          {/* <a className="navbar-brand js-scroll" href="#page-top">DevFolio</a> */}
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">Home</a>
              </li> */}
              <li className="nav-item">
                {/* <a className="nav-link js-scroll" href="#about">About</a> */}
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

              {/* <li className="nav-item">
                <a className="nav-link js-scroll" href="#service">Services</a>
              </li> */}
              <li className="nav-item">
                {/* <a className="nav-link js-scroll" href="#work">Work</a> */}

                {/* <li className="nav-item"> */}
                <Link
                  to="/projects"
                  className={window.location.pathname === "/projects" ? "nav-link active js-scroll" : "nav-link js-scroll"}
                >
                  Projects
            </Link>
                {/* </li> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link js-scroll" href="#blog">Blog</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Header;