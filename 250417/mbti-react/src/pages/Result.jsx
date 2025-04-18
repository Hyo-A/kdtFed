import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// usesearchparams는 뭐야
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata.js";
import KakaoShareButton from "../components/KakaoShareButton.jsx";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: var(--light-color);
  background: url("https://i.pinimg.com/736x/96/44/ac/9644acec3fe5d3fa7a16422b5073ccdb.jpg")
    center/cover no-repeat;
`;

const Header = styled.div`
  color: var(--accent-color);
  font-size: 4rem;
  font-family: "SBAggroB";
`;

const Contents = styled.div`
  color: var(--dark-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const LogoImg = styled.div`
  overflow: hidden;
  & > img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border: 4px solid var(--light-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 780px) {
      width: 320px;
      height: 320px;
    }
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 11px 14px 8px 14px;
  border-radius: 4px;
  line-height: 3rem;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    font-size: 1.8rem;
    padding: 5px 18px;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState("");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };

  const [searchParams] = useSearchParams();
  //useSearchParams는 베열을 반환하는데 그 안에 searchParams라는 객체가 있다
  const mbti = searchParams.get("mbti");
  // mbti의 키값이 mbti에 담김

  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Contents>
        <Header>예비집사 판별기</Header>
        <Title>결과 보기✨</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src={resultData.image}
            alt="maincat"
          />
        </LogoImg>
        <Desc>
          예비 집사님과 찰떡궁합인 고양이는
          <br /> {resultData.best}형 " {resultData.name} " 입니다.
        </Desc>
        <ButtonGroup>
          <Button variant="dark" onClick={handleClickButton}>
            RESTART!
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
