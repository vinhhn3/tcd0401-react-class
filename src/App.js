import axios from "axios";
import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

class App extends Component {
  // Properties
  state = {
    usersData: [],
    user: {},
  };

  searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      usersData: response.data.items,
    });
  };

  clearUsers = () => {
    this.setState({
      usersData: [],
    });
  };

  getUser = async (login) => {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    this.setState({
      user: response.data,
    });
  };

  render() {
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      usersData={this.state.usersData}
                    />
                    <Users usersData={this.state.usersData} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    user={this.state.user}
                    getUser={this.getUser}
                  />
                )}
              />
              <Route path="" component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
