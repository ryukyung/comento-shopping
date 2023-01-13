import styled from "styled-components";
const ProductBigCard = ({ thumbnail, title, desc, onClick }) => {
  return (
    <ProductBigCardStyled onClick={onClick}>
      <ProductThumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDesc>{desc}</ProductDesc>
    </ProductBigCardStyled>
  );
};

const ProductBigCardStyled = styled.div`
  padding-bottom: 24px;
`;
const ProductThumbnail = styled.div`
  width: 390px;
  height: 420px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const ProductTitle = styled.div`
  padding: 12px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
`;
const ProductDesc = styled.div`
  padding-left: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;
export default ProductBigCard;
