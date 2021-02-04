import React from 'react';
import styled from 'styled-components';
import shoppingCart from '../../assets/images/shopping-cart.png';
import shoppingGirl from '../../assets/images/girl-shopping.jpg';

const CollectionSection = styled.section`
  display: grid;
  grid-template-columns: minmax(350px, 40%) 1fr;
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    grid-template-columns: 1fr;
  }
`;
const CollectionInfo = styled.div`
  padding: 15% 0 15% 15%;
  & h1 {
    font-size: 6.5em;
    padding: 0 25% 0 0;
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
const CollectionPromotion = styled.div`
  position: relative;
`;
const ImageShopping = styled.div`
  display: flex;
  justify-content: flex-end;
  & img {
    clip-path: inset(2% 15% round 30% 18% 15% 18%);
  }
  @media (max-width: ${(props) => props.theme.sizeDevice.lg}) {
    display: flex;
    justify-content: center;
  }
`;
const Offer = styled.div`
  position: absolute;
  top: 50px;
  left: 23%;
  background-color: ${(props) => props.theme.colors.pink};
  padding: 20px;
  border-radius: 25px 25px 0;
  & p {
    color: ${(props) => props.theme.colors.white};
    font-family: 'Mplus2p Bold';
  }
  & p:nth-child(1) {
    font-size: 1.8rem;
  }
  & p:nth-child(2) {
    font-size: 1rem;
  }
`;
const Reach = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  background-color: ${(props) => props.theme.colors.backgroundColorService};
  padding: 25px;
  border-radius: 20px;
  & p {
    font-family: 'Mplus2p Bold';
  }
  & p:nth-child(1) {
    font-size: 1.8rem;
  }
  & p:nth-child(2) {
    font-size: 1rem;
  }
`;
const ShoppingCart = styled.div`
  position: absolute;
  bottom: 20px;
  left: 29%;
  border-radius: 25px 5px 25px 25px;
  background-color: ${(props) => props.theme.colors.green};
  & img {
    width: 50px;
    padding: 10px;
  }
`;
const Link = styled.div``;
const LinkShopping = styled.a`
  position: absolute;
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
`;
const Icon = styled.div`
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

const index = () => {
  return (
    <CollectionSection>
      <CollectionInfo>
        <h3>Collections</h3>
        <h1>Anytime Any Place.</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <Link>
          <LinkShopping href='#'>
            Start shopping
            <Icon>
              <span> {'>'} </span>
            </Icon>
          </LinkShopping>
        </Link>
      </CollectionInfo>
      <CollectionPromotion>
        <ImageShopping>
          <img src={shoppingGirl} alt='girl-shopping' />
        </ImageShopping>
        <Offer>
          <p>20% OFF</p>
          <p>Lorem Ipsum is not</p>
        </Offer>
        <Reach>
          <p>256.12K</p>
          <p>Lorem Ipsum is not simply</p>
        </Reach>
        <ShoppingCart>
          <img src={shoppingCart} alt='shopping-cart' />
        </ShoppingCart>
      </CollectionPromotion>
    </CollectionSection>
  );
};

export default index;
