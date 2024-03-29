import { useContext, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "set_loading", payload: true });
      const userData = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: userData });
      setAlert("Search successfully done", "success");
      setText("");
    }
  };
  const handleClear = () => {
    dispatch({
      type: "delete_users",
      users: [],
      loading: false,
    });
    setAlert("Results has been cleared", "success");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="absolute top-0 right-0 btn btn-success btn-lg text-white"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={handleClear}
            className="btn btn-warning sm:btn-md md:btn-lg lg:btn-lg text-white"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
