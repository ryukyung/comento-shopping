import styled from "styled-components";
const ProductCard = ({ thumbnail, title, desc }) => {
  return (
    <ProductCardStyled>
      <ProductThumbnail src={thumbnail} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDesc>{desc}</ProductDesc>
    </ProductCardStyled>
  );
};
const ProductCardStyled = styled.div`
  padding: 50px 24px;
`;
const ProductThumbnail = styled.img`
  width: 341px;
  height: 204px;
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
