import React, { Component } from "react";
import fetchQuery from "./fetchQuery";
import MediaPlayer from "./MediaPlayer";

async function getRandomLink() {
  const randomLinkQuery = `query {
  randomLink{
    id
    takeaways
    title
    url
    datesAccessed
  }
}`;
  const result = await fetchQuery(randomLinkQuery);
  console.log(JSON.stringify(result.randomLink));
  return result.randomLink;
  // return JSON.parse(`{"id":"48","takeaways":"the nature of randomness","title":"What is NOT Random","url":"https://https://www.youtube.com/watch?v=sMb00lz-IfE","datesAccessed":["2018-04-02"]}`);
}

function linkToString(link) {
  let result = "";
  for (let key in link) {
    result += `${key}: "${link[key]}", `;
  }
  return result.slice(0, -2);
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: getRandomLink()
    };
  }

  refresh = () => {
    getRandomLink().then(result => {
      this.setState({ link: result });
    });
  };

  componentDidMount() {
    this.refresh();
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
    const createUpdateQuery = stringLink => {
      return `mutation{
        updateLink(${stringLink}) {
          id
        }
      }`;
    };
    const updateQuery = createUpdateQuery(linkToString(this.state.link));

    fetchQuery(updateQuery).then(data => {
      // TODO: toast or UI notification
    });
  };

  deleteHandler = () => {
    const deleteQuery = `mutation {
      deleteLink(id:${this.state.link.url.id}) {
        id
      }
    }`;
    fetchQuery(deleteQuery).then(() => {
      this.refresh();
    });
  };

  addHandler = () => {};

  render() {
    return (
      <>
        <button id="refresh" onClick={this.refresh}>
          Refresh
        </button>
        <button id="delete" onClick={this.deleteHandler}>
          Delete
        </button>
        <button id="Add" onClick={this.addHandler}>
          Add
        </button>
        <MediaPlayer url={this.state.link.url}></MediaPlayer>
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
