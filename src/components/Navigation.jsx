import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import styled from "styled-components";

const Navigation = ({ isExist }) => {
  return (
    <NavigationCoverStyled>
      <BackPage>&lt;</BackPage>
      <NavigationStyled>코멘토 쇼핑</NavigationStyled>
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
