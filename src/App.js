import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername('');
  };

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) =>
            username ? (
              <Form handleLogout={handleLogout} username={username} id={match.params.id} />
            ) : (
              <Form handleLogout={handleLogout} username={username} id={match.params.id} />
              // <LoginForm handleLogin={handleLogin} />
            )
          }
        />
        <Route exact path="/login" render={() => <LoginForm handleLogin={handleLogin} />} />
        <Route
          path="/link/:id"
          render={({ match }) => (
            <Form handleLogout={handleLogout} username={username} id={match.params.id} />
          )}
        />
        <Route
          path="/:id"
          render={({ match }) => (
            <Form handleLogout={handleLogout} username={username} id={match.params.id} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
