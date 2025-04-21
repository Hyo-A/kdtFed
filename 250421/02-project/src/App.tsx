import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1``;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active = false }: DummyProps) => {
  // 기본 매개변수 형태로 false를 준거임
  return <Title>{text}</Title>;
};

const App = () => {
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    alert("Hello");
  };

  return (
    <Container>
      <Dummy text="Hello" />
      <Dummy text="World" active={true} />
      <button onClick={onClick}>click</button>
    </Container>
  );
};

export default App;
