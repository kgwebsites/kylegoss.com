import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from 'material-ui-icons';

const Kyle = '/static/images/kyle-jason-goss.jpg';

const FullScreen = styled.section`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: url(${Kyle}) 100% 100%/cover no-repeat fixed;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const KeyboardArrowDownStyled = styled(KeyboardArrowDown)`
    font-size: 2rem;
    text-shadow: 1px 1px 1px #fff;
    width: 3rem!important;
    height: 3rem!important;
    filter: drop-shadow( 0px 4px 0px #fff );
`;

const Hero = () => (
  <section>
    <FullScreen>
      <i>&nbsp;</i>
      <div>
        <h1>Kyle Goss</h1>
        <h2>Software Engineer</h2>
      </div>
      <KeyboardArrowDownStyled />
    </FullScreen>
  </section>
);

export default Hero;
