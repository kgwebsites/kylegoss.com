import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledProjects = styled.div`
  width: 100vw;
  overflow-x: scroll;
  .Projects__Wrapper {
    display: flex;
    align-items: center;
  }
`;

class Projects extends Component {
  state = {
    projects: [],
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/kgwebsites/repos');
    const projects = await data.json();
    // Randomize order - http://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm
    for (let i = projects.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = projects[i];
      projects[i] = projects[j];
      projects[j] = temp;
    }
    this.setState({ projects });
  }
  render() {
    return (
      <StyledProjects className="Projects">
        <div className="Projects__Wrapper">
          {this.state.projects.map(project => project.name && project.description && (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </StyledProjects>
    );
  }
}

export default Projects;
