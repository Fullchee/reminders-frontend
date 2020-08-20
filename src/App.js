import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import history from './history';


function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/link/:id"
          render={({ match }) => <Form id={match.params.id} />}
        />
        <Route
          path="/:id"
          render={({ match }) => <Form id={match.params.id} />}
        />
        <Route path="/" render={() => <Form id="0" />} />
      </Switch>
    </Router>
  );
}

export default App;
