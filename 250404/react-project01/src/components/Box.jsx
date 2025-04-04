import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &.win {
    border: 4px solid #7a0e9b;
    color: #7a0e9b;
  }
  &.lose {
    border: 4px solid var(--border-color);
    color: #7c7c7c;
  }
  &.tie {
    border: 4px solid var(--border-color);
    color: #7c7c7c;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  color: #7a0e9b;
  margin-top: 20px;
`;

const Load = styled.div`
  font-size: 3rem;
  background: #b058ca;
  border-radius: 16px;
  padding: 12px 20px;
  color: var(--light-color);
`;

const Img = styled.img`
  width: 220px;
  height: 220px;
`;

const Result = styled.div`
  font-size: 3rem;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "비겼습니다!🤞" && result !== "") {
    result = result === "이겼습니다!👑" ? "졌습니다!😥" : "이겼습니다!👑";
  }

  let className = "";

  switch (result) {
    case "비겼습니다!🤞":
      className = "tie";
      break;
    case "이겼습니다!👑":
      className = "win";
      break;
    case "졌습니다!😥":
      className = "lose";
      break;
  } // result에 따라 className이 달라지는 함수

  return (
    <Container className={className}>
      <Title>{title}</Title>
      {item === null ? (
        <Load>누가 이길까요?🙄</Load>
      ) : (
        <Img src={item.img} alt={title} />
      )}
      <Result>{result}</Result>
    </Container>
  );
};

export default Box;
