import React, { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const TodoList = () => {
  const { todo } = useContext(TodoStateContext);

  console.log(todo);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }; // 구조분해할당으로 찾아올것을 감안하여 객체로 return한것임
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List 🍀</h4>
      <div>
        <div>총개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        className="searchbar"
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
