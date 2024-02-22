import { formatViews, getTimeDiff } from "@src/helper/utilities";
import previousIcon from "@src/images/previous.svg";
import React, { useEffect, useState } from "react";
import { Link as RRLink } from "react-router-dom";
import "./Search.scss";
import SearchBox from "./SearchBox";
import { Link } from "@src/types";

const initialSearchResult: any = [];
const SearchResults = () => {
  const query = window.location.search.slice(3);
  const [results, setResults] = useState(initialSearchResult);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "search?q=" + query).then(
      (res) => {
        res.json().then((data: any) => {
          setResults(data);
        });
      },
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
          <button
            id="back"
            title="Back"
            onClick={() => (window.location.href = "/")}
          >
            <img src={previousIcon} alt="back" />
          </button>
          <SearchBox />
        </nav>
        <div className="search-results">{renderSearchResults()}</div>
      </div>
    </div>
  );
};

export default SearchResults;
