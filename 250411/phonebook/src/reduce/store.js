import { configureStore } from "@reduxjs/toolkit";
// createStore 대체로 configureStore 씀
import { contactReducer } from "./reducer";
// default로 찾아오지않으면 이케 중괄호에 쓰기

const store = configureStore({ reducer: contactReducer });
// 그리고 객체형태로 가지고와야지

export default store;
