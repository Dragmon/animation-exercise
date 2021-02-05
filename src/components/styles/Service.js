import styled from 'styled-components';

export const ServiceSection = styled.section`
  padding: 4% 0;
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundColorService};
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    padding: 4% 0 8%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    padding: 10% 5% 25%;
  }
`;
export const TitleSection = styled.div`
  margin: 0 0 50px 0;
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    margin: 0 0 30px 0;
  }
  & h2 {
    color: ${(props) => props.theme.colors.pink};
    font-family: 'MarckScript';
    font-size: 3em;
  }
  & h3 {
    font-size: 3.5em;
    & span {
      font-family: 'MarckScript';
      font-weight: 100;
    }
  }
`;
export const ListService = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  max-width: 1200px;
  margin: 0 10%;
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    grid-gap: 2.5%;
  }
`;
export const Card = styled.div`
  border-radius: 25px;
  padding: 60px 30px;
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
export const Icon = styled.div`
  & img {
    height: 70px;
    width: auto;
    padding: 25px;
    border-radius: 15px;
  }
`;
export const TextCard = styled.div`
  & h4 {
    margin: 25px 0;
    font-size: 2.2em;
  }
`;
