import React from 'react';
import styled from 'styled-components';

const work = '/static/images/work.jpg';

const WorkImage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${work}) center/cover no-repeat fixed;
    height: 400px;
    color: #fff;
    font-size: 1.25rem;
`;

const WorkText = {
  textShadow: 'none',
};

const Work = () => (
  <section>
    <WorkImage>
      <h2 style={WorkText}>Career</h2>
      <h3 style={WorkText}>Front End (Software) Engineer</h3>
      <h4 style={WorkText}>Foresee Medical Inc</h4>
      <h5 style={WorkText}>Del Mar, CA</h5>
    </WorkImage>
  </section>
);

export default Work;
