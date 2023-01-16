import styled from "styled-components";

const PriceBox = ({ number, price, total }) => {
  return (
    <PriceBoxStyled>
      <PriceInfo>
        <p>상품금액({number}개)</p>
        <p>{price} 원</p>
      </PriceInfo>
      <PriceInfo>
        <p>할인금액</p>
        <p>- 0 원</p>
      </PriceInfo>
      <PriceInfo>
        <p>배송비</p>
        <p>0 원</p>
      </PriceInfo>
      <TotalInfo>
        <p>총 주문금액</p>
        <TotalPrice>{total}원</TotalPrice>
      </TotalInfo>
    </PriceBoxStyled>
  );
};
const PriceBoxStyled = styled.div`
  width: calc(100% - 40px);
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 20px;
`;
const PriceInfo = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

const TotalInfo = styled.div`
  width: 100%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  /* margin-top: 5px; */
`;
const TotalPrice = styled.p`
  color: red;
  font-size: 13px;
  font-weight: 600;
`;
export default PriceBox;
