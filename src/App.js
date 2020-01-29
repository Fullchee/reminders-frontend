import React from "react";
import "./App.css";
import Form from "./components/Form";

function App(props) {
  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <header className="App-header">
        <Form client={props.client}></Form>
      </header>
    </div>
  );
}

export default App;
