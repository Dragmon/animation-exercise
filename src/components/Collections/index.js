import React from 'react';
import {
  CollectionSection,
  CollectionInfo,
  Link,
  LinkShopping,
  Icon,
  CollectionPromotion,
  ImageShopping,
  Reach,
  Offer,
  ShoppingCart,
} from '../styles/Collections';
import shoppingCart from '../../assets/images/shopping-cart.png';
import shoppingGirl from '../../assets/images/girl-shopping.jpg';

const index = () => {
  return (
    <CollectionSection>
      <CollectionInfo>
        <h3>Collections</h3>
        <h1>Anytime Any Place.</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
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
