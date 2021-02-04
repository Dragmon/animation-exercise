import { createGlobalStyle } from 'styled-components';
import MarckScript from './assets/fonts/MarckScript.ttf';
import Mplus2pBold from './assets/fonts/Mplus2p-bold.ttf';
import Mplus2pLight from './assets/fonts/Mplus2p-light.ttf';
import Mplus2pMedium from './assets/fonts/Mplus2p-medium.ttf';
import Mplus2pRegular from './assets/fonts/Mplus2p-regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MarckScript';
    src: url(${MarckScript}) format('truetype');
  }
  @font-face {
    font-family: 'Mplus2p Bold';
    src: url(${Mplus2pBold}) format('truetype');
  }
  @font-face {
    font-family: 'Mplus2p Light';
    src: url(${Mplus2pLight}) format('truetype');
  }
  @font-face {
    font-family: 'Mplus2p Medium';
    src: url(${Mplus2pMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Mplus2p Regular';
    src: url(${Mplus2pRegular}) format('truetype');
  }
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
    color: ${(props) => props.theme.colors.textColorPrimary};
    font-family: 'Mplus2p Bold';
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
    color: ${(props) => props.theme.colors.textColorPrimary};
    margin: ${(props) => props.theme.margin.marginElement};
  }
`;

export default GlobalStyle;
