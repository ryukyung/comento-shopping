import Navigation from "../components/Navigation.jsx";
import ThemeButton from "../components/ThemeButton.jsx";
import ProductCard from "../components/ProductCard.jsx";
import styled from "styled-components";

const Home = () => {
  return (
    <Cover>
      <Navigation />
      <ThemeSection>
        <ThemeButton themeName={"# 겨울 방한템"} />
        <ThemeButton themeName={"# 따순 머그컵"} />
      </ThemeSection>
      <GreyLine />
      <ProductSection>
        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
          title="비숑 블랙 머그잔"
          desc="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
        />
        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"
          title="가열 보온 디코스터 온열 원터치 컵 받침대"
          desc="언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따뜻한 차를 즐길 수 있습니다."
        />
        <ProductCard
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"
          title="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
          desc="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스테 컬러의 머그"
        />
      </ProductSection>
    </Cover>
  );
};
const Cover = styled.div`
  background: white;
  width: 390px;
`;
const ThemeSection = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;
const GreyLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eee;
`;
const ProductSection = styled.div`
  margin-top: 43px;
`;
export default Home;
