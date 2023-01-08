import Navigation from "../components/Navigation.jsx";
import ThemeButton from "../components/ThemeButton.jsx";
import ProductCard from "../components/ProductCard.jsx";
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData.js";
import { useState } from "react";
const Home = () => {
  // state, 상태
  const [products, setProducts] = useState();
  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else {
      setProducts(mockTheme2Products);
    }
  };
  return (
    <Cover>
      <Navigation />
      <ThemeSection>
        <ThemeButton themeName={"# 겨울방한템"} onClick={() => onClickThemeButton(1)} />
        <ThemeButton themeName={"# 여름엔바로"} onClick={() => onClickThemeButton(2)} />
      </ThemeSection>
      <GreyLine />
      <ProductSection>
        {products ? (
          products.map((product) => <ProductCard key={product.id} title={product.name} desc={product.description} thumbnail={product.thumbnail} />)
        ) : (
          <div>테마를 선택해주세요</div>
        )}
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
