let inintialState = {
  count: 1,
  id: "",
  password: "",
  decount: 100,
};
// 초기값을 설정해줘야함

const reducer = (state = inintialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DECREASE":
      return { ...state, decount: state.decount - action.payload.denum };
    default:
      return { ...state };
  }
};

export default reducer;
