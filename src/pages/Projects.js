import React from 'react';
import Dash from '../img/DestinationDashboard.png';
import Investor from '../img/shrewd.png';
import Project from '../components/Project/project.js';

function Projects() {

  return (
    <div className="container col-xs-10 my-3 p-3 border border-dark rounded">
      <h1 className="display-4 text-center text-sm-left">Piotr's Projects</h1>
      <hr className="my-3" />
      <h3 className="centertxt"><strong>Group Projects</strong></h3>
      <div className="row">
        <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img src={Dash} alt="page showing places of interest" className="img-fluid img-thumbnail figure-img rounded" />
            {/* <!-- <div className="carousel-caption text-dark h4 outline"></div> --> */}
            <h4 className="centertxt"><a rel="noreferrer" target="_blank" href="https://piotr72us.github.io/Destination-Dashboard/dashboard">Destination Dashboard</a></h4>
            {/* <!-- <a target="_blank" href="https://piotr72us.github.io/Destination-Dashboard/dashboard">Destination Dashboard</a> --> */}
            <h8 className="centertxt"><a rel="noreferrer" target="_blank" href="https://github.com/Piotr72us/Destination-Dashboard">GitHub Repo</a></h8>
          </div>
          <div className="col-lg-5">
            <img src={Investor} alt="signup page for shrewd investor" className="img-fluid img-thumbnail figure-img rounded" />
            <h4 className="centertxt"><a rel="noreferrer" target="_blank" href="https://our-shrewd-investor.herokuapp.com/">Shrewd Investor</a></h4>
            <h8 className="centertxt"><a rel="noreferrer" target="_blank" href="https://github.com/Piotr72us/Shrewd-Investor">GitHub Repo</a></h8>
          </div>
          <Project />
    </div>
    </div>
  )
}

export default Projects;