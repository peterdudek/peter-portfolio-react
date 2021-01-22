import React from "react";
import "./style.css";

function Project(props) {

  const reversed = props.projects.map(item => item).reverse();

  return (
    <>
      {reversed.length > 0 ? reversed.map(project => {
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