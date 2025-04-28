import React from "react";
import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilValue, useRecoilState } from "recoil";
// useRecoilValue 값을 찾아오는 역할이라고..
// useRecoilState는 usestate같은 역할이라고
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import { categoryState } from "../atoms";

const Select = styled.select`
  width: 100%;
  height: 26px;
  font-size: 10px;
`;

const H1 = styled.h1`
  font-weight: bold;
`;
// const H2 = styled.h1`
//   font-size: 12px;
//   font-weight: bold;
// `;

const Hr = styled.hr``;

const TodoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  // useRecoilValue는 atom에서 toDoSelector를 찾아오는 역할
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  console.log(category);

  return (
    <div>
      <H1>Todo's List</H1>
      <Hr />
      <Select
        value={category}
        onInput={onInput}
        // onchange도 가능
      >
        <option value="ALL">ALL</option>
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </Select>
      <CreateToDo />
      {/* <H2>ToDo part</H2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <Hr />
      <H2>Doing</H2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <Hr />
      <H2>Done</H2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
      {/* {category === "ALL" &&
        toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {category === "TODO" &&
        toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {category === "DOING" &&
        doing.map((aDoing) => <ToDo key={aDoing.id} {...aDoing} />)}
      {category === "DONE" &&
        done.map((aDone) => <ToDo key={aDone.id} {...aDone} />)} */}
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default TodoList;
