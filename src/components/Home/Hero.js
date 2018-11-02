import React from 'react';
import styled from 'styled-components';

const Kyle = '/static/images/kyle-jason-goss.jpg';

const FullScreen = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url(${Kyle}) 100% 100% / cover no-repeat fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hero = () => (
  <section>
    <FullScreen>
      <i>&nbsp;</i>
      <div>
        <h1>Kyle Goss</h1>
        <h2>Software Engineer</h2>
      </div>
    </FullScreen>
  </section>
);

export default Hero;
