import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';

const SearchResults = ({ match }) => {
  // TODO: get the query from React Router ideally?
  // const query = match.params.q;
  const query = window.location.search.slice(3);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + 'search?q=' + query).then((res) => {
      res.json().then((data) => {
        setResults(data);
      });
    });
  }, [query]);

  const renderSearchResults = () => {
    if (!results.length) {
      return <p>No results</p>;
    }
    return results.map((result) => {
      // TODO: use <Link> instead of needing to refresh
      return (
        <div key={result.id}>
          <a href={`/link/${result.id}`}>
            <h3>{result.title}</h3>
            <p>URL: {result.url}</p>
            <p>Keywords: {result.keywords}</p>
            <p>Last accessed: {result.last_accessed}</p>
            <p>Views: {result.views}</p>
          </a>
        </div>
      );
    });
  };

  return (
    <div className="app container">
      <div className="form-container">
        <a href="/">Go back</a>
        <SearchBox />
        <div className="search-results">{renderSearchResults()}</div>
      </div>
    </div>
  );
};

export default SearchResults;
