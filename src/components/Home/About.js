import React from 'react';
import styled from 'styled-components';

const kyleVectorized = '/static/images/kyle-vectorized.jpg';

const StyledAbout = styled.section`
    background: linear-gradient(to bottom, #2a2a2a 75%,#000000 100%);
    color: #fff;
    font-size: 2rem;
`;

const DarkWrapper = styled.section`
    display: block;
    background: url(${kyleVectorized}) center/cover no-repeat fixed;
    height: 300px;
    text-align: center;
`;

const Container = styled.section`
    display: flex;
    width: 1000px;
    max-width: calc(100% - 2rem);
    margin: auto;
    padding: 4rem 1rem;
`;

const About = () => (
  <StyledAbout>
    <DarkWrapper />
    <Container>
      <div>
        <p>My name is Kyle Goss and I have been doing web development for the past 12 years, ever since it was the cool thing to have a customized Myspace profile. </p>
        <p>The past few years I have specialized in software and web applications, and even more specialized in the Javascript niche.</p>
        <p>When I’m not working in the office, I'm usually learning the latest greatest technology that is out there, such examples:</p>
        <ul>
          <li>Go</li>
          <li>Rust</li>
          <li>Web Assembly</li>
          <li>Elixir</li>
          <li>AWS / Google Cloud</li>
        </ul>
      </div>
    </Container>
  </StyledAbout>
);

export default About;
