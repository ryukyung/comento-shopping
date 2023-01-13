import Navigation from "../components/Navigation.jsx";
import styled from "styled-components";

const Basket = () => {
  return (
    <BasketStyled>
      <Navigation title={"장바구니"} />
    </BasketStyled>
  );
};
const BasketStyled = styled.div`
  width: 390px;
  height: 100%;
  background-color: #fff;
`;
export default Basket;
