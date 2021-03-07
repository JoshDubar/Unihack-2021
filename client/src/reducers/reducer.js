const defaultState = {
  user: { username: "", userId: "", email: "", groups: [] },
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
          groups,
        },
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
          groups,
        },
      };
    }

    case "CREATE_GROUP": {
      const { _id: groupId, host, name } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          groups: [
            ...state.user.groups,
            { groupId, isHost: host === state.user.username, name },
          ],
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
