import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
