import styled from 'styled-components';

export const CollectionSection = styled.section`
  display: grid;
  grid-template-columns: minmax(350px, 40%) 1fr;
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    grid-template-columns: 1fr;
    padding: 0 5%;
  }
`;
export const CollectionInfo = styled.div`
  padding: 15% 0 15% 15%;
  @media (max-width: ${(props) => props.theme.sizeDevice.xl}) {
    padding: 10% 0 10% 15%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    padding: 0;
    margin: 0 0 5%;
    text-align: center;
  }
  & h1 {
    font-size: 6.5em;
    padding: 0 15% 0 0;
    @media (max-width: ${(props) => props.theme.sizeDevice.xl}) {
      font-size: 5.8em;
    }
    @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
      padding: 0;
    }
    @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
      font-size: 3em;
    }
  }
  & h3 {
    font-family: 'MarckScript';
    font-size: 2.2em;
    color: ${(props) => props.theme.colors.pink};
  }
  & p {
    font-family: 'Mplus2p Bold';
    margin: 20px 0;
  }
`;
export const CollectionPromotion = styled.div`
  position: relative;
`;
export const ImageShopping = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  & img {
    clip-path: inset(2% 7% 2% 15% round 30% 18% 15% 18%);
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    display: flex;
    justify-content: center;
  }
`;
export const Offer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 15%;
  background-color: ${(props) => props.theme.colors.pink};
  padding: 20px;
  border-radius: 25px 25px 0;
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    top: 10px;
    left: 7%;
    padding: 15px;
  }
  & p {
    color: ${(props) => props.theme.colors.white};
    font-family: 'Mplus2p Bold';
  }
  & p:nth-child(1) {
    font-size: 1.8rem;
    @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
      font-size: 1.5rem;
    }
  }
  & p:nth-child(2) {
    font-size: 1rem;
  }
`;
export const Reach = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 8%;
  background-color: ${(props) => props.theme.colors.backgroundColorService};
  padding: 25px;
  border-radius: 20px;
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    top: 45%;
    left: 0;
    padding: 15px;
  }
  & p {
    font-family: 'Mplus2p Bold';
  }
  & p:nth-child(1) {
    font-size: 1.8rem;
    @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
      font-size: 1.5rem;
    }
  }
  & p:nth-child(2) {
    font-size: 1rem;
  }
`;
export const ShoppingCart = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  left: 20%;
  border-radius: 25px 5px 25px 25px;
  background-color: ${(props) => props.theme.colors.green};
  @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
    bottom: 5px;
    left: 80%;
  }
  & img {
    width: 50px;
    padding: 10px;
    @media (max-width: ${(props) => props.theme.sizeDevice.sm}) {
      width: 35px;
    }
  }
`;
export const Link = styled.div``;
export const LinkShopping = styled.a`
  width: 145px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 15px 30px;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(174, 131, 226, 1) 0%,
    rgba(104, 5, 223, 1) 100%
  );
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 15px 0px rgba(104, 5, 223, 0.6);
  outline: none;
  transition: 300ms linear background;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(216, 107, 54, 1) 0%,
      rgba(185, 92, 36, 1) 100%
    );
    & div {
      background: linear-gradient(
        90deg,
        rgba(174, 131, 226, 1) 0%,
        rgba(104, 5, 223, 1) 100%
      );
    }
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    margin: 0 auto;
  }
`;
export const Icon = styled.div`
  background: linear-gradient(
    90deg,
    rgba(216, 107, 54, 1) 0%,
    rgba(185, 92, 36, 1) 100%
  );
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 0 0 0 10px;
  text-align: center;
  font-size: 1.1em;
`;
