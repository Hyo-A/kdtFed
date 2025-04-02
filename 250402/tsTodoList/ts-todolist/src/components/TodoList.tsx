import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly todoList: Array<string>;
  // 제네릭 타입으로 가져와서 문자열을 가진 배열임을 말하고 있다
  readonly onDelete?: (todo: string) => void;
}

const TodoList = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
