import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../../App";

const useDiary = (id) => {
  const [diary, setDiary] = useState();
  const data = useContext(DiaryStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    // filter는 조건에 부합하는 복수의 값을 찾아오는 거고 find가 하나만 찾아와서 종결시킴 // 이 matchDiary배열을 반환하면 되는거임 // useState로
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다.");
      // 존재하지 않는걸 누르면 main으로 보내버리기 // useNavigate로
      navigate("/");
    }
  }, [id, data]);
  // id와 data의 변경에 따라서 내부의 콜백함수 시행
  return diary;
};

export default useDiary;
