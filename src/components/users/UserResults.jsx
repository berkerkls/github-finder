import React from "react";
import { useContext, useEffect } from "react";
import Loading from "../Loading";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, dispatch } = useContext(GithubContext);

  const onMounted = () => {
    dispatch({
      type: "delete_users",
    });
  };
  useEffect(() => {
    onMounted();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
}

export default UserResults;
