import React from 'react';
import styled from 'styled-components';

const kyleVectorized = '/static/images/kyle-vectorized.jpg';

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
    <section>
        <DarkWrapper />
        <Container>
            <div>
                <p>My name is Kyle Goss and I have been doing web development for the past 12 years, ever since it was the cool thing to have a customized Myspace profile. </p>
                <p>The past few years I have specialized in software and web applications.</p>
                <p>When I’m not creating websites, I’m creating businesses of my own, expanding my knowledge and adding to my income streams. I currently run an ecommerce dropship store, I have launched a successful digital Info product, and I own a couple niche SEO driven, ad-generating, websites.</p>
            </div>
        </Container>
    </section>

);

export default About;
