import axios from "axios";
import { useReducer } from "react";
import { SEARCH_USERS } from "../types";
import GitHubContext from "./gitHubContext";
import GitHubReducer from "./gitHubReducer";

const GitHubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
