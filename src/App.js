import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import history from './history';
import LoginForm from './components/LoginForm';

function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" render={() => <LoginForm />} />
        <Route path="/link/:id" render={({ match }) => <Form id={match.params.id} />} />
        <Route path="/:id" render={({ match }) => <Form id={match.params.id} />} />
        <Route path="/" render={() => <Form id="0" />} />
      </Switch>
    </Router>
  );
}

export default App;
