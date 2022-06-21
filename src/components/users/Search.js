import { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const { searchUsers, clearUsers, usersData } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(text);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setText("");
    clearUsers();
  };
  return (
    <div>
      <form className="form">
        <input
          name="text"
          type="text"
          placeholder="Search users by name"
          onChange={handleChange}
          value={text}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          className="btn btn-dark btn-block"
        />
        {usersData.length > 0 ? (
          <button className="btn btn-light btn-block" onClick={handleClear}>
            Clear
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Search;
