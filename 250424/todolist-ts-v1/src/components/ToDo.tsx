import React from "react";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";
// IToDo 형테에서 text에 해당하는 형태의 타입정의가 있기 때문에 여기서도 가져다 쓸 수 있음
// todostate를 바꿔줘야함
import { useSetRecoilState } from "recoil";

// 자료구조 & 알고리즘
// const one = 1;
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];
// const final2 = [...food.slice(0, one), "gam", ...food.slice(one + 1)];
// 이러면 one+1만 쏙 빼서 그곳에 내가 원하는 것을 쏙 넣을수 있음
// console.log(final, final2);

const Li = styled.li`
  width: 100%;
  font-size: 10px;
  margin-top: 10px;
  position: relative;
`;

const Button = styled.button`
  margin-left: 3px;
  height: 16px;
  font-size: 8px;
  color: #fff;
  border: none;
  background: #000;
  border-radius: 4px;
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 버튼 클릭 내장이벤트 타입은? React.MouseEvent<HTMLButtonElement>
    const {
      currentTarget: { name },
    } = event;
    // const name = event.currentTarget.name을 구조분해할당해서 위처럼 보이는거
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // findIndex는 앞에 붙은 이터러블 객체에 한개씩 찾아와서 조건값을 걸어 그에 해당하는 Index값을 찾아오는것

      // const oldToDo = oldToDos[targetIndex];
      // 이럼 내가 누른 버튼의 객체 자체를 찾아와버림

      const newToDo = { id, text, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    // 이러면 Doing, Done만 찾아올수 있음
  };
  // const onclick01 = (newCategory: IToDo["category"]) => {
  //   console.log("I want to go to", newCategory);
  // };
  // IToDo 타입정의 속 categroy 만 필요하니깐

  return (
    <Li>
      <span>{text}</span>
      {category !== "TODO" && (
        <Button name="TODO" onClick={onclick}>
          ToDo
        </Button>
      )}
      {category !== "DOING" && (
        <Button name="DOING" onClick={onclick}>
          Doing
        </Button>
      )}
      {category !== "DONE" && (
        <Button name="DONE" onClick={onclick}>
          Done
        </Button>
      )}
    </Li>
  );
};

export default ToDo;
