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
  width: calc(100% - 40px);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: -40px;
`;
const BackPage = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
`;
export default Navigation;
