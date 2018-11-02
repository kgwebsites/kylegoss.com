import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const kyleVectorized = '/static/images/kyle-vectorized.jpg';

const StyledAbout = styled.section``;

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
        <p>
          My name is Kyle Goss and I have been doing web development for the
          past 12 years, ever since it was the cool thing to have a customized
          Myspace profile.{' '}
        </p>
        <p>
          The past few years I have specialized in software and web
          applications, and even more specialized in the Javascript niche.
        </p>
        <p>
          Here are the best trendy (SEO) keywords that describe the technology I
          enjoy working with:
        </p>
        <ul>
          <li>React</li>
          <li>Mobx + Mobx-State-Tree</li>
          <li>Javascript</li>
          <li>GraphQL</li>
          <li>Go</li>
          <li>AWS</li>
          <li>Serverless</li>
        </ul>
        <p>
          If you are a recruiter, or just weirdly more curious about my
          experience, here's my official resume as of 2019:
          <br />
          <Link href="https://docs.google.com/document/d/1CT_TdnPcCdPEv2KgtjgMZ2a6TZRYiubtquHtxQfOR_c/edit?usp=sharing">
            <a>2019 Resume</a>
          </Link>{' '}
        </p>
      </div>
    </Container>
  </StyledAbout>
);

export default About;
