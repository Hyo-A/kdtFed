import React, { useState, useEffect, useReducer } from "react";

const CompA = () => {
  console.log("컴포넌트가 호출되었습니다"); // 횡단관심사 대상
  return <div>CompA</div>;
};

const CompB = () => {
  console.log("컴포넌트가 호출되었습니다"); // 횡단관심사 대상
  return <div>CompB</div>;
};

const withLifeCycle = (WrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Mount!");
      return () => console.log("Unmount!");
    }, []);

    useEffect(() => {
      console.log("Update");
    });

    return <WrapperComponent {...props} />;
  };
};

const reducer = (state, action) => {
  // state는 초기값 // action은 상태변화함수가 전달한 객체
  switch (action.type) {
    case "INCEARE":
      return state + action.data;
    case "DECEARE":
      return state - action.data;
    case "INIT":
      return 0;
    default: // 아무것에도 해당하지 않을 때에 아래를 반환함
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
