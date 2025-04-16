import { createSlice } from "@reduxjs/toolkit";
// rtk에서 쓰는 문법임

let initialState = {
  contactList: [],
  keyword: "",
};

// const reduer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             name: payload.name,
//             number: payload.number,
//           },
//         ],
//       };
//     case "SEARCH_BY_USERNAME":
//       return {
//         ...state,
//         keyword: payload.keyword,
//       };
//     default:
//       return { ...state };
//   }
// };

// export default reduer;

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contactList.push({
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    searchByUsername(state, action) {
      state.keyword = action.payload.keyword;
    },
  },
});
// createSlice() 이 함수는 기존의 reducer가 하는 역할을 해줌
// 객체형태로 자료구조를 만듦
// reducers 안에 객체 안의 키값으로 타입들을 함수로 만들어버려
// ...state를 안써도 초기값을 써놨기 때문에 ...state 안써버려

console.log("test ", contactSlice);

export const contactReducer = contactSlice.reducer;
export const { addContact, searchByUsername } = contactSlice.actions;
