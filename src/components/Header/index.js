import React from 'react';
import shoppingCart from '../../assets/images/shopping-cart.png';
import {
  Header,
  Menu,
  ContLogo,
  ButtonStarted,
  LogoCart,
  TitleLogo,
} from '../styles/Header';

const index = () => {
  return (
    <Header>
      <ContLogo>
        <LogoCart>
          <img src={shoppingCart} alt='shopping-cart' />
        </LogoCart>
        <TitleLogo>
          <h2>:Vimeo</h2>
        </TitleLogo>
      </ContLogo>
      <Menu>
        <ul>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>Both</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <ButtonStarted>Get Started</ButtonStarted>
      </Menu>
    </Header>
  );
};

export default index;
