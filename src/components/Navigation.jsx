import styled from "styled-components";

const Navigation = ({ title }) => {
  return (
    <NavigationCoverStyled>
      <BackPage>&lt;</BackPage>
      <NavigationStyled>{title}</NavigationStyled>
    </NavigationCoverStyled>
  );
};
const NavigationCoverStyled = styled.div`
  width: calc(100% - 10px);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid #eee;
`;
const BackPage = styled.div`
  flex: 1.5;
  font-size: 18px;
  font-weight: 700;
`;
const NavigationStyled = styled.div`
  flex: 2;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
`;
export default Navigation;
