import React from "react";
import "./style.css";
// import Detail from "../Detail";
// import { Link } from "react-router-dom";

function Project(props) {

  // function showDetails(project) {
  //   return(
  //     <>
  //     {Detail}
      
  //     </>
  //   )
  // }

  const reversed = props.projects.map(item => item).reverse();

  return (
    <>
      {reversed.length > 0 ? reversed.map(project => {
        return (
          <div className="col-lg-5 myProject" key={project.id}>
            {/* <hr></hr> */}
            <img src={project.image} alt={project.name} className="roundedEdge" width="370px" height="210px"/>
            <h4 className="centertxt margy"><a className="mMid" rel="noreferrer" target="_blank" href={project.deployed}>{project.name} LIVE</a></h4>
            <h6 className="centertxt"><a className="mMid" rel="noreferrer" target="_blank" href={project.repo}>GitHub</a></h6>
            {/* <hr></hr> */}
            <h6 className="textLeft mMid"><strong>Summary</strong></h6>
            <p className="textLeft mMid">{project.desc}</p>
            <h6 className="textLeft mMid"><strong>Tech Stack</strong></h6>
            <p className="textLeft mMid">{project.tech}</p>
            <hr></hr>
            {/* <button onClick={() => {showDetails(project)}}>Details</button> */}
            {/* <Link
                  to="/detail"
                  // className={window.location.pathname === "/detail" ? "nav-link active js-scroll mWhite" : "nav-link js-scroll mBlue"}
                >
                  Detail
            </Link> */}
          </div>)
      }) : "Nothing found"}
    </>
  );
}

export default Project;