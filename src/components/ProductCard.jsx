import styled from "styled-components";
const ProductCard = ({ thumbnail, title, desc, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
      <ProductThumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDesc>{desc}</ProductDesc>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div`
  padding: 50px 24px;
`;
const ProductThumbnail = styled.div`
  width: 341px;
  height: 204px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const ProductTitle = styled.div`
  padding: 12px 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
`;
const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;
export default ProductCard;
