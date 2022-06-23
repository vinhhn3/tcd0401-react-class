import { useEffect, useReducer } from "react";
import { getGitHubUser, getGitHubUsers } from "../../../api/GitHubApi";
import { CLEAR_USERS, GET_USER, SEARCH_USERS } from "../types";
import GitHubContext from "./gitHubContext";
import GitHubReducer from "./gitHubReducer";

const GitHubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState, () => {
    const localState = localStorage.getItem("localState");
    return localState ? JSON.parse(localState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state]);

  const searchUsers = async (login) => {
    const response = await getGitHubUsers(login);
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const getUser = async (login) => {
    const response = await getGitHubUser(login);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
