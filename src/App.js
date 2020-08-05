import { useRoutes } from "hookrouter";
import React from "react";
import "./App.css";
import Routes from "./router";

function App(props) {
  const routeResult = useRoutes(Routes);
  return (
    <div className="App">
      <div className="container">{routeResult}</div>
    </div>
  );
}

export default App;
