import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// Link는 컴포넌트로서, useNavigate는 hook함수로서 작용
// 둘다 링크 이동시키는 역할이긴 하다
// Link는 a태그로 작동한다
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },

  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },

  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();
// DiaryStateContext는 실제로 데이터를 보관하고, 값을 제공하는 역할을 해 줄수 있는거임
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  let idRef = useRef(0);
  // ref는 숫자 0을 가지고 있는 객체이다

  useEffect(() => {
    // dispatch({
    //   type: "INIT",
    //   data: mockData,
    // });
    // setIsData
    // Loaded(true);

    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);
  // 의존성배열에 아무것도 넣지 않으면? mount 시점에만 callback 함수 실행

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
    // dispatch는 상태변화촉발함수
    idRef += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <Loading>데이터를 불러오는 중입니다!</Loading>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  } // 데이터가 잘 찾아져 왔을때만 return문 시행!!!
}

export default App;
