const defaultState = {
  user: { username: "", userId: "", email: "" },
  groups: [],
  activeGroup: undefined,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { username, userId, email, groups } = action.payload;
      return {
        ...state,
        user: {
          username,
          userId,
          email,
        },
        groups,
      };
    }

    case "SIGNUP": {
      const { username, userId, email, groups } = action.payload;
      return {
        ...state,
        user: {
          username,
          userId,
          email,
        },
        groups,
      };
    }

    case "CLICK_NEW_GROUP":
      break;

    default:
      return state;
  }
};

export default reducer;
