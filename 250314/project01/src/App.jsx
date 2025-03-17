import React, { useRef, useReducer, useCallback, useMemo } from "react";

import "./App.scss";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
// import TestComp from "./components/TestComp";

// State Function
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

/* Mockup Data */
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Typescript",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js",
    createdDate: new Date().getTime(),
  },
];

/* Context Obj = API Component */
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();
// 첫글자 대문자로 마치 컴퍼넌트처럼 기능하도록 만들거임
// 여기 안에 들어온 아이들에게만 기능을 부여할거임

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  // todo는 반환되어지는 값 mockTodo는 초기값, dispatch는 상태변화 촉발함수
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content, // key와 value가 같아서 축약된거임
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  // const onCreate = useCallback(() => {
  //   (content) => {
  //     dispatch({
  //       type: "CREATE",
  //       newItem: {
  //         id: idRef.current,
  //         isDone: false,
  //         content, // key와 value가 같아서 축약된거임
  //         createdDate: new Date().getTime(),
  //       },
  //     });
  //     idRef.current += 1;
  //   };
  // }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      // dispatch는 action객체를 받는다
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  ); // Provider는 속성임 하위 요소들한테 4가지 value값을 준다
}

export default App;
