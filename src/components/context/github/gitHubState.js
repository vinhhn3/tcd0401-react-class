import { useReducer } from "react";
import GitHubContext from "./githubContext";
import GitHubReducer from "./gitHubReducer";

const GitHubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
