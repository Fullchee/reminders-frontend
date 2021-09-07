import React, { useState } from 'react';

export function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const setState = name === 'username' ? setUsername : setPassword;
    setState(value);
  };

  return (
    <div className="app container">
      <div className="form-container">
        <form class="form" onSubmit={(e) => handleLogin(e, { username, password })}>
          <h4 style={{ textAlign: 'start' }}>Log In</h4>
          <label htmlFor="username">Email</label>
          <input
            className="input input--text"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="input input--text"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
