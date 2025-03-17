import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ content, createdDate, id, isDone }) => {
  console.log(`${id} TodoItem update`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem); // 얘는 todoitem의 강화이다
// export default TodoItem;
