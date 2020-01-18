import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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

  const res = await fetch(`http://localhost:5000/`, options);
  const { data } = await res.json();
  return data.randomLink;
}

function Home() {
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
        <button>Edit</button>
        <a href={data.url}>{data.title}</a>
        <ReactPlayer url={data.url} />
        <p>{data.takeaways}</p>
      </header>
    </div>
  );
}

export default Home;
