import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import GitHubState from "./components/context/github/gitHubState";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <GitHubState>
      <Router>
        <Home />
      </Router>
    </GitHubState>
  );
};

export default App;
