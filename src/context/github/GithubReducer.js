const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: action.loading,
      };
    case "set_loading":
      return {
        ...state,
        loading: action.loading,
      };
    case "delete_users":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
