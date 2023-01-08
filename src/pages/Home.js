import Navigation from "../components/Navigation.jsx";
import ThemeButton from "../components/ThemeButton.jsx";
import ProductCard from "../components/ProductCard.jsx";
import styled from "styled-components";
import { mockTheme1Products } from "../data/mockData.js";
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
        {mockTheme1Products.map((product) => (
          <ProductCard key={product.id} title={product.name} desc={product.description} thumbnail={product.thumbnail} />
        ))}
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
