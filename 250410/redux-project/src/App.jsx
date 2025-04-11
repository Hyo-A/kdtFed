import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const decount = useSelector((state) => state.decount);

  const dispatch = useDispatch();
  // dispatch 함수는 action객체를 생성해서 reduce로 보냄

  const inCrease = () => {
    dispatch({ type: "INCREMENT", payload: { num: 4 } });
    // 타입 인크리스는 액션에 해당한다
    // payload는 계산을 위한 부산물 같은것을 객체로 담을 수 있다
  };

  const deCrease = () => {
    dispatch({ type: "DECREMENT", payload: { denum: 2 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "JANG", password: "1234" } });
  }; // state를 관리하는 login 함수

  return (
    <div>
      <h1>
        {id}, {password}
      </h1>
      <h1>{count}</h1>
      <Box />
      <button onClick={inCrease}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={deCrease}>감소</button>
      <h2>{decount}</h2>
    </div>
  );
}

export default App;
