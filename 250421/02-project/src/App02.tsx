import React, { useState } from "react";
// React를 import 해와야한다는데..
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bgColor};
  }
`;

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px;
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // event 는 form 요소를 사용할때 제네릭으로 HTMLInputElement
    // 이부분이 이해가 안감 React.FormEvent<HTMLInputElement> 의미 몰게씀
    setValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Form이벤트에대한 정의
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form onSubmit={onSubmit}>
          <Input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <Input type="submit" value="Login" />
        </Form>
      </Container>
    </>
  );
}

export default App;
