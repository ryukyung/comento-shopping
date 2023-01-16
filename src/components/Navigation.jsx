import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigation = ({ isMain = false, title }) => {
  const navigate = useNavigate();
  return (
    <NavigationCoverStyled>
      <BackPage onClick={() => navigate(-1)} isMain={isMain}>
        &lt;
      </BackPage>
      <NavigationStyled>{title}</NavigationStyled>
    </NavigationCoverStyled>
  );
};
const NavigationCoverStyled = styled.div`
  width: calc(100%);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
`;
const BackPage = styled.div`
  flex: 1.5;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  cursor: pointer;
  visibility: ${(props) => (props.isMain ? "hidden" : "visible")};
`;
const NavigationStyled = styled.div`
  flex: 2;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
`;
export default Navigation;
