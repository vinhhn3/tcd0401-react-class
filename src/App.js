import axios from "axios";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GitHubState from "./components/context/github/gitHubState";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

const App = () => {
  // Properties
  const [user, setUser] = useState({});

  const getUser = async (login) => {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    setUser(response.data);
  };

  return (
    <GitHubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User {...props} user={user} getUser={getUser} />
                )}
              />
              <Route path="" component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
};

export default App;
