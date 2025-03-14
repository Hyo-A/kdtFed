import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCEARE":
      return state + action.data;
    case "DECEARE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      state;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  /* 상태변화 코드 */
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCEARE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECEARE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
