import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  /* background-color: #d4d4de; */
  display: flex;
`;
export const ContLogo = styled.div`
  width: 50%;
`;
export const Menu = styled.nav`
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
          color: ${(props) => props.theme.colors.green};
          text-align: center;
          width: 100%;
          display: block;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 350ms, opacity 1s;
        }
        &:after {
          border-bottom: 3px solid ${(props) => props.theme.colors.green};
          content: '';
          display: block;
          margin: 0.25em auto 0;
          transition: width 350ms ease-in-out 0s;
          width: 0;
        }
        &:hover {
          color: ${(props) => props.theme.colors.pink};
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
export const ButtonStarted = styled.button`
  margin: 20px 0;
  border-radius: 20px;
  padding: 0 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 15px 0px rgba(104, 5, 223, 0.6);
  outline: none;
`;
