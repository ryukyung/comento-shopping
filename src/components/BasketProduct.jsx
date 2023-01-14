import styled from "styled-components";

const BasketProduct = () => {
  return (
    <BasketProductStyled>
      <ProductImg />
      <ProductInfo>
        <ProductName>비숑 블랙 머그잔</ProductName>
        <ProductPrice>21800원</ProductPrice>
      </ProductInfo>
      <ProductDelete>X</ProductDelete>
    </BasketProductStyled>
  );
};
const BasketProductStyled = styled.div`
  width: 350px;
  height: 126px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
const ProductImg = styled.div`
  width: 115px;
  height: 115px;
  background-image: url("https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const ProductInfo = styled.div`
  width: 200px;
  height: 115px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const ProductName = styled.div``;
const ProductPrice = styled.div``;
const ProductDelete = styled.div``;
export default BasketProduct;
