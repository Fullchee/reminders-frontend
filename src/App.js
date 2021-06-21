import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Redirect, Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import history from './history';
import LoginForm from './components/LoginForm';

function App(props) {
  const [username, setUsername] = useState(() => localStorage.getItem('username'));

  const handleLogin = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('username', json.user.username);
        setUsername(json.user.username);
      });
  };

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) =>
            username ? (
              <Form username={match.params.username} id={match.params.id} />
            ) : (
              <LoginForm handleLogin={handleLogin} />
            )
          }
        />
        <Route exact path="/login" render={() => <LoginForm handleLogin={handleLogin} />} />
        <Route
          path="/link/:username/:id"
          render={({ match }) => <Form username={match.params.username} id={match.params.id} />}
        />
        <Route
          path="/:username/:id"
          render={({ match }) => <Form username={match.params.username} id={match.params.id} />}
        />
        <Route
          path="/:username"
          render={({ match }) => <Form username={match.params.username} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
