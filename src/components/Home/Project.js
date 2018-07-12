import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const gh = '/static/images/gh-b.svg';

const StyledProject = styled.article`
  display: inline-block;
  text-align: center;
  padding: .5rem;
  min-width: 300px;
  &:nth-child(even) {
    .Project__Wrapper {
      background-color: #fdf2e0;
      border-color: #d85000;
      .Project__Wrapper__Header {
        border-color: #d85000;
        a {
          color: #d85000;
        }
      }
    }
  }
  .Project__Wrapper {
    border: 1px solid #1a44cf;
    border-radius: 5px;
    padding: .5rem;
    background-color: #e2f3ff;
    .Project__Wrapper__Header {
      border-bottom: 1px solid #1a44cf;
      padding-bottom: .5rem;
      margin-bottom: .5rem;
      a {
        text-decoration: none;
        color: #1a44cf;
        img {
          display: flex;
        }
      }
      .Project__Wrapper__Header__Title {
        margin: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .Project__Wrapper__Header__Title__GH {
          margin-right: .5rem;
        }
      }
      .Project__Wrapper__Header__Langauge {
        margin: 0;
      }
    }
  }
`;

const ProjectTitle = ({ url, name }) => (
  <h3 className="Project__Wrapper__Header__Title">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="Project__Wrapper__Header__Title__GH" src={gh} alt="GitHub Repo" width="20" height="20" />
    </a>
    <span>{name}</span>
  </h3>
);

ProjectTitle.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Project = ({ project }) => (
  <StyledProject>
    <div className="Project__Wrapper">
      <div className="Project__Wrapper__Header">
        {project.homepage ?
          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
            <ProjectTitle url={project.html_url} name={project.name} />
          </a>
            : <ProjectTitle url={project.html_url} name={project.name} />
          }
        <h6 className="Project__Wrapper__Header__Langauge">{project.language}</h6>
      </div>
      {project.description && <p>{project.description}</p>}
    </div>
  </StyledProject>
);

Project.propTypes = {
  project: PropTypes.shape({
    homepage: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Project;
