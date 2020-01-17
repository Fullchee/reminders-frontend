import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import "./App.css";

async function graphQLReq() {
  const randomLinkQuery = `query {
  randomLink{
    id
    takeaways
    title
    url
    categories
  }
}`;
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: randomLinkQuery
    })
  };

  const res = await fetch(`https://calm-fjord-54462.herokuapp.com/`, options);
  const { data } = await res.json();
  return data.randomLink;
}

function App() {
  const [data, setData] = useState({ hits: [] });

  /*
   * Runs when component mounts & updates
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQLReq();
      setData(result);
    };
    fetchData();
  }, []); // []: just run on load

  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url={data.url} playing />
        <a href={data.url}>{data.title}</a>
        <p>{data.takeaways}</p>
      </header>
    </div>
  );
}

export default App;
