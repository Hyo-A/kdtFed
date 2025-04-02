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

interface Props {
  readonly todoList: Array<string>;
  readonly onDelete?: (todo: string) => void;
}

const DataView = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList todoList={todoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
