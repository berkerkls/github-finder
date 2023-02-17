const url = process.env.REACT_APP_URL;
const github_token = process.env.REACT_APP_TOKEN;

export const searchUsers = async (text) => {
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
    return items;
  }
};

export const getRepos = async (username) => {
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

  if (response.status === 200) {
    return data;
  }
};

export const getUser = async (login) => {
  const response = await fetch(`${url}/users/${login}`, {
    headers: {
      Authorization: `${github_token}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};
