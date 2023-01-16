import Navigation from "../components/Navigation.jsx";
import ThemeButton from "../components/ThemeButton.jsx";
import ProductCard from "../components/ProductCard.jsx";
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData.js";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
const Home = () => {
  // state, 상태
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else {
      setProducts(mockTheme2Products);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1000);
  }, []);

  const addCart = (product) => {
    const newProduct = { thumbnail: product.thumbnail, name: product.name, price: product.price };
    let basket = JSON.parse(localStorage.getItem("Basket"));
    if (basket === null) basket = [];
    basket.push(newProduct);
    localStorage.setItem("Basket", JSON.stringify(basket));
  };
  const ProductCardClick = (product) => {
    navigate(`product/${product.id}`);
    addCart(product);
  };

  return (
    <Cover>
      <Navigation title={"코멘토 쇼핑"} />
      <ThemeSection>
        <ThemeButton themeName={"# 따순머그컵"} onClick={() => onClickThemeButton(1)} />
        <ThemeButton themeName={"# 여름엔바로"} onClick={() => onClickThemeButton(2)} />
      </ThemeSection>
      <GreyLine />
      <ProductSection>
        {products ? (
          products.map((product) => (
            <ProductCard
              onClick={() => ProductCardClick(product)}
              key={product.id}
              title={product.name}
              desc={product.description}
              thumbnail={product.thumbnail}
            />
          ))
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
