import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import BasketProduct from "../components/BasketProduct.js";
import BasketButtonStyled from "../components/BasketButton.js";
import PriceBox from "../components/PriceBox.js";
import Modal from "../components/Modal";
const Basket = () => {
  return (
    <BasketStyled>
      {/* <Modal /> */}
      <Navigation title={"장바구니"} />
      <ProductCover>
        <BasketProduct />
        <BasketProduct />
      </ProductCover>
      <PriceBox />
      {/* <PriceBox number={ } price={ } sale={ } delivery={ } total={price-sale+delivery} /> */}
      <BasketButtonStyled title={"주문하기"} />
    </BasketStyled>
  );
};
const BasketStyled = styled.div`
  width: 390px;
  height: inherit;
  background-color: #fff;
`;
const ProductCover = styled.div`
  width: calc(100% - 10px);
  margin-left: 10px;
  margin-top: 20px;
`;
export default Basket;
