import "./App.scss";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("업데이트", count, text);
  // }, [count, text]); // 두가지 인자값중 두번째 값은 의존성배열이라 부르고, 이 값이 업데이트가 되는것에 따른 콜백함수의 실행이 일어난다

  const didMountRef = useRef(false);
  console.log(didMountRef);
  /*// 처음부터 모든 명령이 시행하게 하지 않기 위해 useRef를 활용?*/
  useEffect(() => {
    if (!didMountRef.current) {
      // 얘는 false가 맞으니 실행해줌
      didMountRef.current = "true";
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  }); // 두가지 인자값중 두번째 값이 없으면 모든 업데이트 조건에 전부 반응?!

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []); // []이게 뭔대

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000); // 특정주기에 맞춰서 무언가를 실행시켜주는 비동기 함수 // 업데이트 +업데이트 +업데이트 +... 이때 버그생기던데 // 이럴때 cleanup이 필요하단거지
    return () => {
      console.log("cleanup");
      clearInterval(intervalID);
    };
  });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
