import React from 'react';
import {
  ServiceSection,
  TitleSection,
  ListService,
  Card,
  Icon,
  TextCard,
} from '../styles/Service';
import shield from '../../assets/images/escudo.svg';
import cloud from '../../assets/images/nube.svg';
import sale from '../../assets/images/venta.svg';

const Service = () => {
  return (
    <ServiceSection>
      <TitleSection>
        <h2>Service</h2>
        <h3>
          Million of people use : <span>Vimeo</span>
        </h3>
      </TitleSection>
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
