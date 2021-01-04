import React from "react";
import "./style.css";

function Project(props) {
  return (
    <>
      {props.projects.length > 0 ? props.projects.map(project => {
        return (
          <div className="col-lg-5 myProject" key={project.id}>
            <img src={project.image} alt={project.name} className="img-fluid img-thumbnail figure-img rounded" />
            <h4 className="centertxt"><a rel="noreferrer" target="_blank" href={project.deployed}>{project.name}</a></h4>
            <h6 className="centertxt"><a rel="noreferrer" target="_blank" href={project.repo}>GitHub Repo</a></h6>
          </div>)
      }) : "Nothing found"}
    </>
  );
}

export default Project;