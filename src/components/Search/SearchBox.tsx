import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const wasEnterClicked = (event: React.KeyboardEvent<HTMLInputElement>) =>
  event.key === "Enter";

function SearchBox() {
  const [query, setQuery] = useState("");
  let history = useHistory();

  const search = (query: string) => {
    history.push("/search?q=" + query);
  };

  return (
    <div className="search-box">
      <input
        id="query"
        type="text"
        name="query"
        value={query}
        className="input--text"
        placeholder="🔍  Search"
        onChange={(event) => setQuery(event.target.value)}
        onKeyUp={(event) => {
          wasEnterClicked(event) &&
            search((event.target as HTMLInputElement).value);
        }}
      />
      <button onClick={() => search(query)} className="search-button">
        <span role="img" aria-label="Search">
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchBox;
