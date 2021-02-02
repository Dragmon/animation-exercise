import React from 'react';
import styled from 'styled-components';
import shield from '../../assets/images/escudo.svg';
import cloud from '../../assets/images/nube.svg';
import sale from '../../assets/images/venta.svg';

const ServiceSection = styled.section`
  padding: 4% 0;
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundColorService};
`;

const ListService = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;
const Card = styled.div`
  border-radius: 25px;
  padding: 70px 50px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.15);
    background-color: ${(props) => props.theme.colors.white};
  }
  &:nth-child(1) {
    & img {
      background-color: ${(props) => props.theme.colors.yellow};
    }
  }
  &:nth-child(2) {
    & img {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
  &:nth-child(3) {
    & img {
      background-color: ${(props) => props.theme.colors.pink};
    }
  }
`;
const Icon = styled.div`
  & img {
    height: 70px;
    width: auto;
    padding: 25px;
    border-radius: 15px;
  }
`;
const TextCard = styled.div`
  & h4 {
    margin: 25px 0;
  }
`;

const Service = () => {
  return (
    <ServiceSection>
      <h3>Service</h3>
      <h2>Million of people use : Vimeo</h2>
      <ListService>
        <Card>
          <Icon>
            <img src={shield} alt='shiled' />
          </Icon>
          <TextCard>
            <h4>Free Shipping</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </TextCard>
        </Card>
        <Card>
          <Icon>
            <img src={cloud} alt='cloud' />
          </Icon>
          <TextCard>
            <h4>24/7 Hour Support</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </TextCard>
        </Card>
        <Card>
          <Icon>
            <img src={sale} alt='sale' />
          </Icon>
          <TextCard>
            <h4>100% Moneyback</h4>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
          </TextCard>
        </Card>
      </ListService>
    </ServiceSection>
  );
};

export default Service;
