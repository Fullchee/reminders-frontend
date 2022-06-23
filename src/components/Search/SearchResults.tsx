import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { Tooltip } from "react-tippy";
// @ts-ignore
import Ripple from "react-touch-ripple";
import { Link as RRLink } from "react-router-dom";

import { formatViews, getTimeDiff } from "../../helper/utilities";
import previousIcon from "../../images/previous.svg";

import "./Search.scss";

const initialSearchResult: any = [];
const SearchResults = () => {
  const query = window.location.search.slice(3);
  const [results, setResults] = useState(initialSearchResult);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "search?q=" + query).then(
      (res) => {
        res.json().then((data: any) => {
          setResults(data);
        });
      }
    );
  }, [query]);

  const renderSearchResults = () => {
    if (!results.length) {
      return <p>No results</p>;
    }
    return results.map((link: Link) => {
      return (
        <div className="search-result-item" key={link.id}>
          <RRLink className="search-result-item-link" to={`/link/${link.id}`}>
            <h3 className="search-result-item__title">{link.title}</h3>
            {/* <p className="search-result-item__url" className="search-item-url">
              {result.url}
            </p> */}
            <div className="search-result-item__keywords">
              {link.keywords.map((keyword: string) => (
                <a
                  key={keyword}
                  href={`/search?q=${keyword}`}
                  className="search-result-keyword"
                >
                  {keyword}
                </a>
              ))}
            </div>
            <p className="search-result-item__text">
              {/* TODO: distinguish between BackendLink and Link */}
              Last accessed {getTimeDiff(link.last_accessed as string)}
            </p>
            <p className="search-result-item__text">
              {formatViews(link.views)}
            </p>
          </RRLink>
        </div>
      );
    });
  };

  return (
    <div className="app container">
      <div className="form-container">
        <nav className="buttons">
          {/* @ts-ignore */}
          <Tooltip title="Back" touchHold="true">
            <Ripple>
              <button id="back" onClick={() => (window.location.href = "/")}>
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
