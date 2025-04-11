let inintialState = {
  contactList: [],
  keyword: "",
};

const reduer = (state = inintialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            number: payload.number,
          },
        ],
      };
    case "SEARCH_BY_USERNAME":
      return {
        ...state,
        keyword: payload.keyword,
      };
    default:
      return { ...state };
  }
};

export default reduer;
