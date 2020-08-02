import React from "react";
import "./App.css";
import Form from "./components/Form";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <Form client={props.client} className="values"></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
