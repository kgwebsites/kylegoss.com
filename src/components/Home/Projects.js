import React from 'react';
import styled from 'styled-components';

import { Code, Store, OndemandVideo } from 'material-ui-icons';

const kgwebsites = '/static/images/kg-websites.svg';
const webdevprofesh = '/static/images/web-dev-profesh.svg';
const heartlandtack = '/static/images/heartland-tack.png';

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem .5rem;
`;

const Project = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    text-align: center;
`;

const CodeStyled = styled(Code)`
    height: 3rem!important;
    width: 3rem!important;
    color: #27ae5f;
`;

const StoreStyled = styled(Store)`
    height: 3rem!important;
    width: 3rem!important;
    color: #d9242b;
`;

const OndemandVideoStyled = styled(OndemandVideo)`
    height: 3rem!important;
    width: 3rem!important;
    color: #41de8d;
`;

const Projects = () => (
    <Grid>
        <Project>
            <img src={kgwebsites} height="75" alt="KG Websites" />
            <p>Web Apps / Software Projects</p>
            <a href="https://kgwebsites.com" target="_blank" rel="noopener noreferrer"><CodeStyled /></a>
        </Project>
        <Project><img src={heartlandtack} height="75" alt="Heartland Tack" />
            <p>eCommerce Shopify Store</p>
            <a href="https://heartlandtack.com" target="_blank" rel="noopener noreferrer"><StoreStyled /></a>
        </Project>
        <Project>
            <img src={webdevprofesh} height="75" alt="Web Dev Profesh" />
            <p>Web Development Youtube Channel</p>
            <a href="https://youtube.com/c/WebDevProfesh" target="_blank" rel="noopener noreferrer"><OndemandVideoStyled /></a>
        </Project>
    </Grid>
);

export default Projects;
