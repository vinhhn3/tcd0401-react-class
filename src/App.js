import { Component } from "react";
import "./App.css";

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
      <div className="App">
        <h1>Hello World</h1>
        {this.state.isDisplay && <p>{this.state.fullName}</p>}
        <p>{this.state.address}</p>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase Counter</button>
      </div>
    );
  }
}

export default App;
