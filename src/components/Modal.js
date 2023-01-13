import styled from "styled-components";

const Modal = ({}) => {
  return (
    <ModalStyled>
      <ModalCover>
        <ModalTitle>주문되었습니다.</ModalTitle>
        <ModalButton>확인</ModalButton>
      </ModalCover>
    </ModalStyled>
  );
};

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ModalCover = styled.div`
  width: 240px;
  height: 160px;
  background-color: #fff;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 30px;
`;
const ModalButton = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ccc;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
`;

export default Modal;
