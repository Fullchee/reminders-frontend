import React, { useState, useEffect } from "react";

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
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.title}</p>
      </header>
    </div>
  );
}

export default App;
