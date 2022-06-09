import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  // Properties
  state = {
    fullName: "Vinh Hoang",
    address: "Le Loi",
    counter: 0,
    isDisplay: false,
  };

  // Methods
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    );
  }
}

export default App;
