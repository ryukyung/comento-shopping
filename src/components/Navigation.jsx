import styled from "styled-components";

const Navigation = () => {
  return (
    <NavigationCoverStyled>
      <NavigationStyled>코멘토 쇼핑</NavigationStyled>
    </NavigationCoverStyled>
  );
};
const NavigationCoverStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-item: center;
  padding-top: 20px;
`;
const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 26px;
`;
export default Navigation;
