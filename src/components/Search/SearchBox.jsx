import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const wasEnterClicked = (event) => event.key === 'Enter';

function SearchBox() {
  const [query, setQuery] = useState('');
  let history = useHistory();

  const search = (query) => {
    history.push('/search?q=' + query);
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
          wasEnterClicked(event) && search(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
