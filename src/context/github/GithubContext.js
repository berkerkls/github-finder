import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const url = process.env.REACT_APP_URL;
const github_token = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
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

  const getRepos = async (username) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(`${url}/users/${username}/repos?${params}`, {
      headers: {
        Authorization: `${github_token}`,
      },
    });
    const data = await response.json();

    console.log("repos", data);
    if (response.status === 200) {
      dispatch({
        type: "GET_REPOS",
        payload: data,
        loading: false,
      });
    }
  };

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${url}/users/${login}`, {
      headers: {
        Authorization: `${github_token}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
        loading: false,
      });
      console.log("user", data);
    }
  };

  const clearUsers = () =>
    dispatch({
      type: "delete_users",
      payload: [],
      loading: false,
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
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
