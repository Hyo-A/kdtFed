import React from "react";
import { useParams } from "react-router-dom";
// usePararm를 활용해서 상단에 있는 동적파라미터를 찾아올거야

const Diary = () => {
  const { id } = useParams();
  return <div>Diary</div>;
};

export default Diary;
