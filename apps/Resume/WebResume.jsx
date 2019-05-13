import React from 'react';
import styled from 'styled-components';
import Github from '../../assets/vectors/github.svg';

const StyledWebResume = styled.div`
  width: 7.5in;
  max-width: calc(100vw - 32px);
  padding: 16px;
  .resumeHeader {
    display: flex;
    justify-content: space-between;
    h1 {
      margin-bottom: 0;
    }
    .resumeContact {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      > * {
        margin-left: 8px;
      }
    }
  }
  .experiences {
    margin-top: 32px;
  }
  .experience {
    margin-bottom: 32px;
  }
`;

const WebResume = ({ resume: { name, contact, location, experience } }) => (
  <StyledWebResume>
    <header className="resumeHeader">
      <h1>{name}</h1>
      {contact && (
        <div className="resumeContact">
          {contact.email && (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          )}
          {contact.phone && (
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          )}
          {contact.social && (
            <div className="resumeSocial">
              {contact.social.github && (
                <a href={contact.social.github}>
                  <Github />
                </a>
              )}
              {contact.social.twitter && <a href={contact.social.twitter}>T</a>}
            </div>
          )}
        </div>
      )}
    </header>
    <main>
      {location && (
        <p>
          <small>
            {location.city}, {location.state}
          </small>
        </p>
      )}
      {experience && experience.length && (
        <div className="experiences">
          {experience.map(exp => (
            <div className="experience" key={exp.description}>
              <h3>
                {exp.title}{' '}
                <small>
                  {exp.start} - {exp.end}
                </small>
              </h3>
              <p>
                <small>
                  <i>{exp.company}</i>
                </small>{' '}
                |{' '}
                <small>
                  <i>{exp.location}</i>
                </small>
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  </StyledWebResume>
);

export default WebResume;
