import { JSX, useState, createContext } from "react";
// createcontext를 통해 만들어진 요소가 값을 전달하는 값을 부여받는거

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});
// 이제 자식요소들에게 무언가를 전달할 수 있는 컴포넌트로써 쓰일 수 있게 된거임!
// 근데 전달해야할 값이 객체임 {}안에 있는 저러저러한 녀석들의 형태의 객체임

interface Props {
  children: JSX.Element | JSX.Element[];
}

const mockData = ["React공부하기", "운동하기", "책읽기", "도시락 싸기"];

const TodoListContextProvider = ({ children }: Props) => {
  const [toDoList, setTodoList] = useState(mockData);

  const onDelete = (todo: string) => {
    setTodoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setTodoList([...toDoList, toDo]);
  };

  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, TodoListContextProvider };
