import { atom, selector } from "recoil";

type categories = "TODO" | "DOING" | "DONE" | "ALL";

export interface IToDo {
  id: number;
  text: string;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "category",
  default: "ALL",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
// atom안에 객체를 만들고 key넣자

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "ALL") {
    //   return toDos;
    // }
    // if (category === "TODO") {
    //   return toDos.filter((toDO) => toDO.category === "TODO");
    // }
    // if (category === "DOING") {
    //   return toDos.filter((toDO) => toDO.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return toDos.filter((toDO) => toDO.category === "DONE");
    // }

    // return [
    //   toDos.filter((todo) => todo.category === "TODO"),
    //   toDos.filter((todo) => todo.category === "DOING"),
    //   toDos.filter((todo) => todo.category === "DONE"),
    //   // filter는 todos 안에있는 todo를 하나씩 가져와 그래서 각 카테고리별로 묶어진 배열이 된다
    //   // 원래는 그냥 통배열이잖아
    // ];

    if (category === "ALL") {
      return toDos;
    } else {
      return toDos.filter((toDo) => toDo.category === category);
    }
  },
});
// 기존 atom에서 찾아온 놈을 새로 처리해서 반환
// get(함수역할)부분이 찾아오는거
