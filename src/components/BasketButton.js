import styled from "styled-components";

const BasketButton = ({ title, onClick }) => {
  return <BasketButtonStyled onClick={onClick}>{title}</BasketButtonStyled>;
};
const BasketButtonStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24dbaf;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  cursor: pointer;
`;
export default BasketButton;
