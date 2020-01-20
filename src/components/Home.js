import React, { useState, useEffect } from "react";
import Form from "./Form";

function Home() {
  const [data, setData] = useState({});

  /*
   * Runs when component mounts & updates
   */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getRandomLink();
  //     setData(result);
  //   };
  //   fetchData();
  // }, []); // []: just run on load

  return (
    <div className="App">
      <header className="App-header">
        <Form></Form>
      </header>
    </div>
  );
}

export default Home;
