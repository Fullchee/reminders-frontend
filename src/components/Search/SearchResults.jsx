import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import Ripple from 'react-touch-ripple';
import { Tooltip } from 'react-tippy';

import previousIcon from '../../images/previous.svg';
import { getTimeDiff, formatViews } from '../../helper/utilities';

import './Search.scss';

const SearchResults = () => {
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
        <div className="search-result-item" key={result.id}>
          <a className="search-result-item-link" href={`/link/${result.id}`}>
            <h3 className="search-result-item__title">{result.title}</h3>
            {/* <p className="search-result-item__url" className="search-item-url">
              {result.url}
            </p> */}
            <div className="search-result-item__keywords">
              {result.keywords.map((keyword) => (
                <a key={keyword} href={`/search?q=${keyword}`} className="search-result-keyword">
                  {keyword}
                </a>
              ))}
            </div>
            <p className="search-result-item__text">
              Last accessed {getTimeDiff(result.last_accessed)}
            </p>
            <p className="search-result-item__text">{formatViews(result.views)}</p>
          </a>
        </div>
      );
    });
  };

  return (
    <div className="app container">
      <div className="form-container">
        <nav className="buttons">
          <Tooltip title="Back" touchHold="true">
            <Ripple>
              <button id="back" onClick={() => (window.location.href = '/')}>
                <img src={previousIcon} alt="back" />
              </button>
            </Ripple>
          </Tooltip>
          <SearchBox />
        </nav>
        <div className="search-results">{renderSearchResults()}</div>
      </div>
    </div>
  );
};

export default SearchResults;
