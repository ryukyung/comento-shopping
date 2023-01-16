import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation.jsx";
import ProductBigCard from "../components/ProductBigCard.jsx";
import ProductButton from "../components/ProductButton.jsx";
import ProductDetailImgStyled from "../components/ProductDetailImg.jsx";
import BasketButtonStyled from "../components/BasketButton.jsx";
import Review from "../components/Review";
import { useNavigate } from "react-router-dom";

import { getProductDetail, mockReviews } from "../data/mockData";
const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState("desc");

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setReviews(mockReviews);
    }, 1000);
  }, []);

  const onClickMenu = (menuName) => {
    setCurrentMenu(menuName);
  };
  return (
    <Cover>
      <Navigation title={"코멘토 쇼핑"} />
      <ProductDetailStyled>
        {product && <ProductBigCard key={product.id} title={product.name} desc={`${product.price}원`} thumbnail={product.thumbnail} width="390px" />}
      </ProductDetailStyled>
      <ButtonCover>
        <ProductButton ButtonDesc={"상품 설명"} active={currentMenu === "desc"} onClick={() => onClickMenu("desc")} />
        <ProductButton ButtonDesc={"상품 후기"} active={currentMenu === "review"} onClick={() => onClickMenu("review")} />
      </ButtonCover>
      {currentMenu === "desc" && product && <ProductDetailImgStyled key={product.id} detailImg={product.mainImage} />}
      {currentMenu === "review" && (
        <ReviewCover>
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.username}
              score={review.score}
              date={review.createDate}
              profileImg={review.profileImage}
              desc={review.reviewText}
            />
          ))}
        </ReviewCover>
      )}
      <BasketButtonStyled title={"장바구니 담기"} onClick={() => navigate("/Basket")} />
    </Cover>
  );
};
const Cover = styled.div`
  background: white;
  width: 390px;
`;

const ButtonCover = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
const ProductDetailStyled = styled.div``;
const ReviewCover = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-content: space-around;
  flex-direction: column;
`;
export default ProductDetail;
