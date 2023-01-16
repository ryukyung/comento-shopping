import styled from "styled-components";
import Navigation from "../components/Navigation.jsx";
import BasketProductStyled from "../components/BasketProduct.jsx";
import BasketButtonStyled from "../components/BasketButton.jsx";
import PriceBox from "../components/PriceBox.jsx";
// import Modal from "../components/Modal";
const Basket = () => {
  const basket = JSON.parse(localStorage.getItem("Basket"));
  console.log(basket);
  let BasketProductPrice = 0;
  basket.forEach((element) => {
    BasketProductPrice += element.price;
  });
  console.log(BasketProductPrice);

  return (
    <BasketStyled>
      {/* <Modal /> */}
      <Navigation title={"장바구니"} />
      <ProductCover>
        {basket && basket.map((product) => <BasketProductStyled img={product.thumbnail} name={product.name} price={product.price} />)}
      </ProductCover>
      <Footer>
        <PriceBox number={basket.length} price={BasketProductPrice} total={BasketProductPrice} />
        <BasketButtonStyled title={"주문하기"} />
      </Footer>
    </BasketStyled>
  );
};
const BasketStyled = styled.div`
  width: 390px;
  min-height: 100vh;
  background-color: #fff;
  /* overflow-y: none; */
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
