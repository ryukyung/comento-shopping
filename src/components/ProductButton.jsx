import styled from "styled-components";

const ProductButton = ({ ButtonDesc, active, onClick }) => {
  return (
    <ProductButtonStyled onClick={onClick} active={active}>
      {ButtonDesc}
    </ProductButtonStyled>
  );
};
const ProductButtonStyled = styled.div`
  width: 50%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#eee" : "#FFF")};
`;
export default ProductButton;
