import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  display: flex;
  @media (max-width: ${(props) => props.theme.sizeDevice.md}) {
    height: auto;
    flex-direction: column;
  }
`;
export const ContLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 40%;
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    width: 25%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.md}) {
    width: 100%;
    justify-content: center;
    margin: 30px 0 0;
  }
`;
export const LogoCart = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 0 0 10%;
  border-radius: 25px 5px 25px 25px;
  background-color: ${(props) => props.theme.colors.purple};
  @media (max-width: ${(props) => props.theme.sizeDevice.md}) {
    margin: 0px;
  }
  & img {
    width: 30px;
    padding: 5px;
  }
`;
export const TitleLogo = styled.div`
  margin: 0 0 0 10px;
  & h2 {
    font-family: 'MarckScript';
  }
`;
export const Menu = styled.nav`
  width: 60%;
  display: inherit;
  justify-content: space-around;
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    width: 75%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.md}) {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & ul {
    @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
      padding: 0px;
      margin: 0px;
    }
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
  @media (max-width: ${(props) => props.theme.sizeDevice.md}) {
    padding: 10px 20px;
  }
`;
