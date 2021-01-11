import React from 'react';
import styled from 'styled-components';

const ServiceSection = styled.section`
  padding: 4% 0;
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundColorService};
`;

const Service = () => {
  return (
    <ServiceSection>
      <h3>Service</h3>
      <h2>Million of people use : Vimeo</h2>
    </ServiceSection>
  );
};

export default Service;
