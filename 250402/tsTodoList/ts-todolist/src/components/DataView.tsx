import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 34px 50px;
  background: var(--background-color2);
  border-radius: 20px;
`;

const DataView = () => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
};

export default DataView;
