import React from "react";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    if (response.status === 200) {
      setLoading(false);
    }
  };

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
