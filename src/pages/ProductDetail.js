import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductDetail } from "../data/mockData";
import Navigation from "../components/Navigation.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductButton from "../components/ProductButton.jsx";
import ProductDetailImgStyled from "../components/ProductDetailImg.jsx";
import BasketButtonStyled from "../components/BasketButton.js";
import Review from "../components/Review.jsx";
import mockReviews from "../data/mockData.js";
const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  // const [reviews, setReviews] = useState();
  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);
  // const onClickProductButton = (ProductButtonId) => {
  //   if (ProductButtonId === 1) {
  // {
  //   product && <ProductDetailImgStyled key={product.id} detailImg={product.mainImage} />;
  // }
  //   } else {
  //     {
  //       reviews ? (
  //         reviews.map((review) => (
  //           <Review
  //             key={review.id}
  //             profileImg={review.profileImage}
  //             score={review.score}
  //             name={review.username}
  //             date={review.createDate}
  //             desc={review.reviewText}
  //           />
  //         ))
  //       ) : (
  //         <div>아직 리뷰가 없습니다.</div>
  //       );
  //     }
  //   }
  // };
  return (
    <Cover>
      <ProductDetailStyled>
        <Navigation />
        {product && <ProductCard key={product.id} title={product.name} desc={`${product.price}원`} thumbnail={product.thumbnail} />}
      </ProductDetailStyled>
      <ButtonCover>
        <ProductButton ButtonDesc={"상품 설명"} bgColor="#eee" fontWeight="700" />
        <ProductButton ButtonDesc={"상품 후기"} bgColor="#fff" fontWeight="500" />
        {/* <ProductButton ButtonDesc={"상품 설명"} bgColor="#eee" fontWeight="700" onClick={() => onClickProductButton(1)} />
        <ProductButton ButtonDesc={"상품 후기"} bgColor="#fff" fontWeight="500" onClick={() => onClickProductButton(2)} /> */}
      </ButtonCover>
      {product && <ProductDetailImgStyled key={product.id} detailImg={product.mainImage} />}
      <BasketButtonStyled />;
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

export default ProductDetail;
