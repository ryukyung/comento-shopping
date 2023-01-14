import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductDetail } from "../data/mockData";
import Navigation from "../components/Navigation.jsx";
import ProductBigCard from "../components/ProductBigCard.jsx";
import ProductButton from "../components/ProductButton.jsx";
import ProductDetailImgStyled from "../components/ProductDetailImg.jsx";
import BasketButtonStyled from "../components/BasketButton.js";
import Review from "../components/Review";
import { useNavigate } from "react-router-dom";

// import { getProductDetail, mockReviews } from "../data/mockData";
import { getReviewDetail, mockReviews } from "../data/mockData";
const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  let { reviewId } = useParams();
  const [reviews, setReview] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setReview(mockReviews);
    }, 1000);
  });
  return (
    <Cover>
      <Navigation title={"코멘토 쇼핑"} />
      <ProductDetailStyled>
        {product && <ProductBigCard key={product.id} title={product.name} desc={`${product.price}원`} thumbnail={product.thumbnail} width="390px" />}
      </ProductDetailStyled>
      <ButtonCover>
        {/* <ProductButton ButtonDesc={"상품 설명"} bgColor="#eee" fontWeight="700" onClick={() => onClickMenu(1)} />
        <ProductButton ButtonDesc={"상품 후기"} bgColor="#fff" fontWeight="500" onClick={() => onClickMenu(2)} /> */}
        <ProductButton ButtonDesc={"상품 설명"} bgColor="#eee" fontWeight="700" />
        <ProductButton ButtonDesc={"상품 후기"} bgColor="#fff" fontWeight="500" />
      </ButtonCover>
      {/* {product && <ProductDetailImgStyled key={product.id} detailImg={product.mainImage} />} */}
      <ReviewCover>
        {reviews ? (
          reviews.map((review) => (
            <Review
              key={review.id}
              name={review.username}
              score={review.score}
              date={review.createDate}
              profileImg={review.profileImage}
              desc={review.reviewText}
            />
          ))
        ) : (
          <div>리뷰가 없습니다.</div>
        )}
      </ReviewCover>
      <BasketButtonStyled title={"장바구니 담기"} onClick={() => navigate(`/basket`)} />
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
