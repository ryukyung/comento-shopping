import styled from "styled-components";

const ProductDetailImg = ({ detailImg }) => {
  return <ProductDetailImgStyled style={{ backgroundImage: `url(${detailImg})` }} />;
};
const ProductDetailImgStyled = styled.div`
  width: 342px;
  height: 1200px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  padding-top: 25px;
`;
export default ProductDetailImg;
