import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const url = process.env.REACT_APP_URL;
const github_token = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    token: github_token,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${url}/search/users?${params}`, {
      headers: {
        Authorization: `${github_token}`,
      },
    });
    const { items } = await response.json();

    console.log("user", items);
    if (response.status === 200) {
      dispatch({
        type: "GET_USERS",
        payload: items,
        loading: false,
      });
    }
  };

  const clearUsers = () =>
    dispatch({
      type: "delete_users",
      payload: [],
    });

  const setLoading = () =>
    dispatch({
      type: "set_loading",
      loading: true,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
