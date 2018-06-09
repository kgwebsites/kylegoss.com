import React from 'react';
import styled from 'styled-components';

const facebook = '/static/images/facebook.svg';
const instagram = '/static/images/instagram.svg';
const linkedin = '/static/images/linkedin.svg';
const youtube = '/static/images/youtube.svg';
const github = '/static/images/github.svg';
const reddit = '/static/images/reddit.svg';

const socialProfiles = [
    {
        social: facebook,
        url: 'https://www.facebook.com/gossisboss1',
    },
    {
        social: instagram,
        url: 'https://www.instagram.com/gossb0ss/',
    },
    {
        social: linkedin,
        url: 'https://www.linkedin.com/in/gosskyle/',
    },
    {
        social: youtube,
        url: 'https://www.youtube.com/c/WebDevProfesh',
    },
    {
        social: github,
        url: 'https://github.com/kgwebsites',
    },
    {
        social: reddit,
        url: 'https://www.reddit.com/user/kgwebsites',
    },
];

const FooterContainer = styled.footer`
    display: flex;
    padding: 4rem 0;
    align-items: center;
    justify-content: space-around;
    background-color: #333;
`;

const Footer = () => (
    <FooterContainer>
        {socialProfiles.map(social => <a key={`${social.url}-${social.social}`} href={social.url} target="_blank"><img src={social.social} height="25" alt={social.social} /></a>)}
    </FooterContainer>
);

export default Footer;
