import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 50px;
  background-color: ${(props) => props.theme.colors.purple};
`;

const index = () => {
  return <Footer />;
};

export default index;
