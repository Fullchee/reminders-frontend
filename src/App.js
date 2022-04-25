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
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}token-auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        // TODO: show an error message?
        toast.error('Incorrect username or password');
      }
      const json = await res.json();
      localStorage.setItem('token', json.token);
      localStorage.setItem('username', json.user.username);
      setUsername(json.user.username);
      toast.success(`Welcome back ${json.user.username}!`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername('');
  };

  const form = <Form handleLogout={handleLogout} username={username} />;
  const getFormWithId = (id) => <Form handleLogout={handleLogout} username={username} id={id} />;
  const loginForm = <LoginForm handleLogin={handleLogin} />;

  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" render={() => (username ? form : loginForm)} /> */}
          <Route exact path="/" render={() => form} />
          <Route exact path="/login" render={() => (username ? form : loginForm)} />
          <Route
            path="/link/:id"
            // render={({ match }) => (username ? getFormWithId(match.params.id) : loginForm)}
            render={({ match }) => getFormWithId(match.params.id)}
          />
          <Route path="/search" component={SearchResults} />
          <Route
            path="/:id"
            // render={({ match }) => (username ? getFormWithId(match.params.id) : loginForm)}
            render={({ match }) => getFormWithId(match.params.id)}
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
