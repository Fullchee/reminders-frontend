import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="app container">
        <div className="form-container">
          <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <h4>Log In</h4>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="submit-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
