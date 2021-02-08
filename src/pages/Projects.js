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
        <div className="container col-xs-9">
        <h2 className="display-4 text-center mMid">My Projects</h2>
          <div className="row">
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