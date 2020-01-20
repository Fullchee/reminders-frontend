import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={this.props.link.title}
            onChange={this.changeHandler}
          />
        </label>
        <label>
          URL
          <input
            type="url"
            name="url"
            value={this.props.link.url}
            onChange={this.changeHandler}
          />
        </label>
        <label>
          Takeaways
          <textarea
            type="text"
            name="takeaways"
            value={this.props.link.takeaways}
            onChange={this.changeHandler}
          />
        </label>
        <label>
          <button
            type="submit"
            name="submit"
            disabled={false /* TODO: url validation*/}
            onClick={this.submitHandler}
          >
            Submit
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
