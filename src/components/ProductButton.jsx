import styled from "styled-components";

const ProductButton = ({ ButtonDesc, bgColor, fontWeight }) => {
  return <ProductButtonStyled style={{ backgroundColor: bgColor, fontWeight: fontWeight }}>{ButtonDesc}</ProductButtonStyled>;
};
const ProductButtonStyled = styled.div`
  width: 50%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ProductButton;
