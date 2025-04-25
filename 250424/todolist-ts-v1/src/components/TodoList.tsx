import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
// 값을 찾아오는 역할이라고..
import { toDoState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";

const H1 = styled.h1`
  font-weight: bold;
`;
const H2 = styled.h1`
  font-size: 12px;
  font-weight: bold;
`;

const Hr = styled.hr`
  border: 1px solid #000;
`;

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <H1>Todo's List</H1>
      <Hr />
      <CreateToDo />
      <H2>ToDo part</H2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <Hr />
      <H2>ToDo part</H2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <Hr />
      <H2>ToDo part</H2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
