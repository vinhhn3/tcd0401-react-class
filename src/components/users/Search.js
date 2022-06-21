import { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  handleClear = (event) => {
    event.preventDefault();
    this.setState({
      text: "",
    });
    this.props.clearUsers();
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
          {this.props.usersData.length > 0 ? (
            <button
              className="btn btn-light btn-block"
              onClick={this.handleClear}
            >
              Clear
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default Search;
