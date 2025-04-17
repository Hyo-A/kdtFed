import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata.js";

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

const Result = () => {
  return (
    <Wrapper>
      <Contents>
        <Header>예비집사 판별기</Header>
        <Title>결과 보기✨</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src={resultdata[0].image}
            alt="maincat"
          />
        </LogoImg>
        <Desc>
          예비 집사님과 찰떡궁합인 고양이는
          <br /> {resultdata[0].best}형 " {resultdata[0].name} " 입니다.
        </Desc>
        <Button variant="dark">RESTART!</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
