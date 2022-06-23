import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASE_URL,
});

const getGitHubUsers = (login) => {
  return axiosClient.get(`/search/users?q=${login}`);
};

const getGitHubUser = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getGitHubUsers, getGitHubUser };
