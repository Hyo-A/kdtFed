import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../contexts/TodoListContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// interface Props {
//   readonly toDoList: Array<string>;
//   // 제네릭 타입으로 가져와서 문자열을 가진 배열임을 말하고 있다
//   readonly onDelete?: (todo: string) => void;
// }

const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo) => (
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
