import React from 'react';
import styled from 'styled-components';
import ReactJson from 'react-json-view';

const StyledJSONResume = styled.div`
  max-width: 624px;
  margin: auto;
`;

const JSONResume = ({ resume }) => (
  <StyledJSONResume>
    <ReactJson src={resume} theme="monokai" />
  </StyledJSONResume>
);

export default JSONResume;
