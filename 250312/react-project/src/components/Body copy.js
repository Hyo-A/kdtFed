import React, { useState } from "react";
import "./Body.css";

const Body = () => {
  const [state, setState] = useState({
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.birth]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <select name="gender" value={state.gender} onChange={handleOnChange}>
        <option key={"여성"}>여성</option>
        <option key={"남성"}>남성</option>
      </select>
      <input
        name="birth"
        type="date"
        value={state.birth}
        onChange={handleOnChange}
      />
      <textarea
        name="bio"
        value={state.bio}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
};

// Body.defaultProps = {
//   favorList: [],
// }; => 이거를 써서 누락되었을때도 에러가 나오지 않도록 해준다?!

export default Body;
