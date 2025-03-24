import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { getEmotionImgById } from "../util";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
`;

const DiaryContent = styled.div``;

const ImgBg = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &.img_section1 {
    background: var(--emotion-01);
  }
  &.img_section2 {
    background: var(--emotion-02);
  }
  &.img_section3 {
    background: var(--emotion-03);
  }
  &.img_section4 {
    background: var(--emotion-04);
  }
  &.img_section5 {
    background: var(--emotion-05);
  }
`;

const Img = styled.img`
  width: 50%;
`;

const InfoSection = styled.div`
  flex: 1;
`;

const ContentItem = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const DateItem = styled.div`
  font-size: 2rem;
`;

const ButtonSection = styled.div``;

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
    // 몇번째 일기인지에 따라 아이디가 달라지고 경로 뒤에는 꼭 아이디가 따라붙는다
  };

  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg className={`img_section${emotionId}`} onClick={goDetail}>
          <Img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </ImgBg>
      </DiaryContent>
      <InfoSection onClick={goDetail}>
        <ContentItem>{content.slice(0, 25)}</ContentItem>
        <DateItem>{new Date(date).toLocaleDateString()}</DateItem>
      </InfoSection>
      <ButtonSection>
        <Button text="수정하기" onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};
// {content.slice(0, 25)}는 글자수를 최대 24자로 해서 가지고와라

export default React.memo(DiaryItem);
// diaryitem을 고차컴포넌트로 만든거임
