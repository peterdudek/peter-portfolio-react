import React from "react";
import Cat from '../../img/cat2.jpg';
import "./style.css";

function Project() {
  return (
    <div className="col-lg-5">
    <img src={Cat} alt="signup page for shrewd investor" className="img-fluid img-thumbnail figure-img rounded" />
    <h4 className="centertxt"><a rel="noreferrer" target="_blank" href="https://our-shrewd-investor.herokuapp.com/">Cat - Test</a></h4>
    <h8 className="centertxt"><a rel="noreferrer" target="_blank" href="https://github.com/Piotr72us/Shrewd-Investor">GitHub Repo</a></h8>
  </div>
  );
}

export default Project;