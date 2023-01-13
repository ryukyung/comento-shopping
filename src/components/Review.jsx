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
  background-color: #fafafa;
  width: 340px;
  height: 85px;
  margin-bottom: 15px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ReviewCover = styled.div`
  width: calc(100% - 60px);
  height: 50%;
  margin-top: 10px;
  display: flex;
`;
const ReviewImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 12px;
  background-image: url("https://file.namu.moe/file/8de19da261c4f463a5778501b02e33c33df5aaefb9f393c33caf1186dfddf5d1");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-right: 10px;
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
  width: calc(100% - 30px);
  height: 50%;
  text-align: left;
  padding-left: 30px;
`;

export default Review;
