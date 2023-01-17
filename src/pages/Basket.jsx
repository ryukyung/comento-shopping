import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import BasketProductStyled from "../components/BasketProduct.jsx";
import BasketButtonStyled from "../components/BasketButton.jsx";
import PriceBox from "../components/PriceBox.jsx";
import Modal from "../components/Modal";
const Basket = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
    console.log("openModal");
  };
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
    localStorage.clear("Basket");
  };
  const basket = JSON.parse(localStorage.getItem("Basket"));
  let BasketProductPrice = 0;
  basket.forEach((element) => {
    BasketProductPrice += element.price;
  });
  return (
    <BasketStyled>
      <Navigation title={"장바구니"} />
      <ProductCover>
        {basket && basket.map((product, idx) => <BasketProductStyled key={idx} img={product.thumbnail} name={product.name} price={product.price} />)}
      </ProductCover>
      <Footer>
        <PriceBox number={basket.length} price={BasketProductPrice} total={BasketProductPrice} />
        <BasketButtonStyled title={"주문하기"} onClick={() => openModal()} />
        {modalIsOpen && <Modal onClick={() => closeModal()} />}
      </Footer>
    </BasketStyled>
  );
};
const BasketStyled = styled.div`
  width: 390px;
  min-height: 100vh;
  background-color: #fff;
`;
const ProductCover = styled.div`
  width: calc(100% - 10px);
  height: 500px;
  overflow-y: scroll;
  margin-left: 10px;
  margin-top: 20px;
`;
const Footer = styled.div`
  width: 390px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
export default Basket;
