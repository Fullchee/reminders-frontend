import React from "react";
import "./App.css";
import Form from "./components/Form";

function App(props) {
  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <div className="container">
        <Form client={props.client} className="values"></Form>
      </div>
    </div>
  );
}

export default App;
