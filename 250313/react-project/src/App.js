import { useRef, useState } from "react";
import "./App.scss";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef(); // textRef는 객체이다 이것을 우리가 찾아와야하는 대상에게 걸어줘야함
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const btnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(`${text} 클릭`);
      // textRef.current.value = ""; // text는 즉슨, textRef.current.value이다
      // text = ""; // text를 빈칸으로 정의하는것은 즉슨, setText("")이다
      setText("");
    }
  };
  return (
    <div className="App">
      <div className="formList">
        <input
          ref={textRef} // useRef를 사용할 대상임을 지정해줌
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <button onClick={btnClick}>작성완료</button>
      </div>
    </div>
  );
}

export default App;
