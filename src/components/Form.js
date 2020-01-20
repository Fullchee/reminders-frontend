import React, { Component } from "react";
import fetchQuery from "./fetchQuery";
import ReactPlayer from "react-player";

async function getRandomLink() {
  const randomLinkQuery = `query {
  randomLink{
    id
    takeaways
    title
    url
    categories
  }
}`;
  return await fetchQuery(randomLinkQuery);
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: getRandomLink()
    };
  }

  componentDidMount() {
    getRandomLink().then(result => {
      this.setState({ link: result });
    });
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const newLink = this.state.link;
    newLink[name] = value;
    this.setState({
      link: newLink
    });
  };

  submitHandler = event => {
    event.preventDefault();
    // TODO: add a toast
    // TODO: graphql req
    console.log(this.state);
  };

  render() {
    return (
      <>
        <ReactPlayer url={this.state.link.url} />
        <form>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.link.title}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            URL
            <input
              type="url"
              name="url"
              value={this.state.link.url}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Takeaways
            <textarea
              type="text"
              name="takeaways"
              value={this.state.link.takeaways}
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
      </>
    );
  }
}

export default Form;
