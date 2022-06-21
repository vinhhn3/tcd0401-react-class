import axios from "axios";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

const App = () => {
  // Properties

  const [usersData, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(response.data.items);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const getUser = async (login) => {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    setUser(response.data);
  };

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    usersData={usersData}
                  />
                  <Users usersData={usersData} />
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
  );
};

export default App;
