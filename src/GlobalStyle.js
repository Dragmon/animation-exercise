import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    margin: 0px;
    box-sizing: border-box;
  }
  body{
    background-color: ${(props) => props.theme.colors.backgroundColorGeneral}
  }
  h1,h2,h3,h4,h5,h6{
    margin: ${(props) => props.theme.margin.marginElement};
  }
  h1{
    font-size:${(props) => props.theme.fontSizes.large};
  }
  h2{
    font-size: ${(props) => props.theme.fontSizes.xMedium}
  }
  h3{
    font-size: ${(props) => props.theme.fontSizes.medium}
  }
  h4{
    font-size: ${(props) => props.theme.fontSizes.small}
  }
  p, a{
    font-size:${(props) => props.theme.fontSizes.small};
    margin: ${(props) => props.theme.margin.marginElement};
  }
`;

export default GlobalStyle;
