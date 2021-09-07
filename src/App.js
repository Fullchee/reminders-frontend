import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Form } from './components/Form/Form';
import history from './history';
import { LoginForm } from './components/LoginForm';
import SearchResults from './components/Search/SearchResults';

function App() {
  const [username, setUsername] = useState(() => localStorage.getItem('username'));

  const handleLogin = async (e, data) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      debugger;
      if (!res.ok) {
        // TODO: show an error message?
        toast.error('Incorrect username or password');
      }
      const json = await res.json();
      localStorage.setItem('token', json.token);
      localStorage.setItem('username', json.user.username);
      setUsername(json.user.username);
    } catch (e) {
      debugger;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername('');
  };

  return (
    <>
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
          <Route path="/search" component={SearchResults} />
          <Route
            path="/:id"
            render={({ match }) => (
              <Form handleLogout={handleLogout} username={username} id={match.params.id} />
            )}
          />
        </Switch>
      </Router>
      <ToastContainer
        hideProgressBar={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={2000}
      />
    </>
  );
}

export default App;
