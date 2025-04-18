import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

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
  & > button {
    font-size: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
`;

const LogoImg = styled.div`
  & > img {
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
  @media screen and (max-width: 780px) {
    max-width: 370px;
    font-size: 1.5rem;
    padding: 12px 12px 7px 12px;
    line-height: 150%;
    text-align: center;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Contents>
        <Header>예비집사 판별기</Header>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src="/cat/maincat.jpg"
            alt="maincat"
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기 🐱</Desc>
        <Button variant="dark" onClick={handleClickButton}>
          START!
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
