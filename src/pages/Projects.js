import React, { Component } from 'react';
import Project from '../components/Project/project.js';
import projects from '../projects.json';
import './style.css';

class Projects extends Component {

  state = {
    projects
  }

  render() {
    return (
      <div className="customMargin">
        <div className="container col-xs-9 my-3 p-3 border border-dark rounded projects grayFusion">
        <h1 className="display-4 text-center">My Projects</h1>
          <div>
            {this.state.projects.length > 0 &&
              <Project projects={this.state.projects} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;