import React, { useState } from "react";
import Ripple from "react-touch-ripple";
import searchIcon from "../images/search.svg";
import { useHistory } from "react-router-dom";

const search = (query) => {
  // TODO: redirect to the search page
  window.location = `https://fullchee-reminders-backend.herokuapp.com/search?q=${query}`;
};

const wasEnterClicked = (event) => event.key === "Enter";

const SearchBox = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-box">
      <Ripple>
        <button id="search" onClick={() => search(query)}>
          <img src={searchIcon} alt="search" />
          {/* <label htmlFor="query">Search</label> */}
        </button>
      </Ripple>
      <input
        id="query"
        type="text"
        name="query"
        className="input--text"
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
        onKeyUp={(event) => {
          wasEnterClicked(event) && search(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
