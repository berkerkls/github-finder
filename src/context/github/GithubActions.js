import axios from "axios";
const url = process.env.REACT_APP_URL;
const github_token = process.env.REACT_APP_TOKEN;

const github = axios.create({
  baseURL: url,
  headers: {
    Authorization: `${github_token}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserandRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
