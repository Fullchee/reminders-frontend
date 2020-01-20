import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import fetchQuery from "./fetchQuery";
import Form from "./Form";

async function getRandomLink() {
  const randomLinkQuery = `query {
  randomLink{
    id
    takeaways
    title
    url
    categories
  }
}`;
  return await fetchQuery(randomLinkQuery);
}

function Home() {
  const [data, setData] = useState({});

  /*
   * Runs when component mounts & updates
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRandomLink();
      setData(result);
    };
    fetchData();
  }, []); // []: just run on load

  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url={data.url} />
        <Form link={data}></Form>
      </header>
    </div>
  );
}

export default Home;
