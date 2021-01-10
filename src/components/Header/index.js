import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 90px;
  background-color: #d4d4de;
  display: flex;
`;
const ContLogo = styled.div`
  width: 50%;
`;
const Menu = styled.nav`
  width: 50%;
  display: inherit;
  justify-content: space-around;
  & ul {
    & li {
      display: inline-block;
      padding: 0 10px;
      & a {
        text-decoration: none;
        color: #000000;
        &:before {
          content: '•';
          color: #fc185a;
          text-align: center;
          width: 100%;
          display: block;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 350ms, opacity 1s;
        }
        &:after {
          border-bottom: 3px solid #fc185a;
          content: '';
          display: block;
          margin: 0.25em auto 0;
          transition: width 350ms ease-in-out 0s;
          width: 0;
        }
        &:hover {
          color: #fc185a;
          &:after {
            transition: width 300ms ease-in-out 0s;
            width: 100%;
          }
          &:before {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s linear 0s, opacity 1s;
          }
        }
      }
    }
  }
`;
const ButtonStarted = styled.button``;
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
