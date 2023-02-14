import { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert(`Please enter something`);
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const handleClear = () => clearUsers();
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
