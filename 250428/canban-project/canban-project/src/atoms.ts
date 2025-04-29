//상태관리 recoil -> atoms
import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    todo: [],
    doing: [],
    done: [],
    cat: [],
    dog: [],
    bird: [],
  },
});
