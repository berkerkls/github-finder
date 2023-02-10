import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();
const service_url = process.env.REACT_APP_URL;
const token = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${service_url}/users`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    if (response.status === 200) {
      dispatch({
        type: "GET_USERS",
        loading: false,
      });
    }
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
