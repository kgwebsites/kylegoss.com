import React, { useState } from 'react';
import styled from 'styled-components';
import resumeJSON from '../../resume.json';
import WebResume from './WebResume';
import JSONResume from './JSONResume';

const StyledResume = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0 8px;
  .resumeContainer {
    border: 1px solid #333;
  }
  .resumeFormat {
    ul {
      display: flex;
      justify-content: center;
      margin: 0 -8px 8px;
      padding: 0;
      list-style: none;
      li {
        background-color: #ffffff;
        padding: 8px;
        border: 1px solid #000;
        margin: 8px;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
        &.active {
          background-color: #0a0a0a;
          color: #ffffff;
          &:hover {
            background-color: #000000;
          }
        }
        &:hover {
          background-color: #f9f9f9;
        }
      }
    }
  }
`;

const Resume = () => {
  const [resume, setResume] = useState(resumeJSON);
  const [format, setFormat] = useState('web');

  return (
    <StyledResume>
      <h1 className="center">Resume</h1>
      <nav className="resumeFormat">
        <ul>
          <li
            className={format === 'web' ? 'active' : ''}
            onClick={() => setFormat('web')}
          >
            Web Format
          </li>
          <li
            className={format === 'json' ? 'active' : ''}
            onClick={() => setFormat('json')}
          >
            JSON Format
          </li>
        </ul>
      </nav>
      {format === 'web' && <WebResume resume={resume} />}
      {format === 'json' && (
        <JSONResume resume={resume} setResume={setResume} />
      )}
    </StyledResume>
  );
};

export default Resume;
