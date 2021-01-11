import React from 'react';
import { Header, Menu, ContLogo, ButtonStarted } from '../styles/Header';

const index = () => {
  return (
    <Header>
      <ContLogo className='logo'></ContLogo>
      <Menu className='menu'>
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
            <a href='#'>Contatc</a>
          </li>
        </ul>
        <ButtonStarted>Get Started</ButtonStarted>
      </Menu>
    </Header>
  );
};

export default index;
