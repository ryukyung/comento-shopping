import styled from "styled-components";
const Review = ({ profileImg, score, name, date, desc }) => {
  return (
    <ReviewStyled>
      <ReviewCover>
        <ReviewImg style={{ backgroundImage: `url(${profileImg})` }} />
        <ReviewScore>{score}</ReviewScore>
        <ReviewInfo>
          {name} | {date}
        </ReviewInfo>
      </ReviewCover>
      <ReviewDesc>{desc}</ReviewDesc>
    </ReviewStyled>
  );
};

const ReviewStyled = styled.div`
  background-color: #eee;
  width: 340px;
  height: 85px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 3px;
`;
const ReviewCover = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
`;
const ReviewImg = styled.div`
  width: 30%;
  border-radius: 10px;
`;
const ReviewScore = styled.div`
  color: yellow;
  font-size: 13px;
`;
const ReviewInfo = styled.div`
  color: lightgray;
  font-size: 13px;
`;
const ReviewDesc = styled.div`
  font-size: 13px;
`;

export default Review;
