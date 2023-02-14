import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const url = process.env.REACT_APP_URL;
const token = process.env.REACT_APP_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${url}/users`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      dispatch({
        type: "GET_USERS",
        payload: data,
        loading: false,
      });
    }
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
