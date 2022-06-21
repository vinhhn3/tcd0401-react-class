import axios from "axios";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  // Properties
  state = {
    usersData: [],
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

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            usersData={this.state.usersData}
          />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
