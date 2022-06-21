import { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
    console.log(this.state.text);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            name="text"
            type="text"
            placeholder="Search users by name"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
