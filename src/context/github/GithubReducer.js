const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "set_loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "delete_users":
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
