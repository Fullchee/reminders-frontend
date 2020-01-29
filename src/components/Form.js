import React, { Component } from "react";
import fetchQuery from "./fetchQuery";
import MediaPlayer from "./MediaPlayer";
import { uuid } from "uuidv4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import virtues from "../virtues";
import Select from "react-dropdown-select";

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
  return result.randomLink;
  // return JSON.parse(`{"id":"48","takeaways":"the nature of randomness","title":"What is NOT Random","url":"https://https://www.youtube.com/watch?v=sMb00lz-IfE","datesAccessed":["2018-04-02"]}`);
}

/**
 * @param {Link} link
 * @returns {string}
 * Eg:
 */
function linkToString(link) {
  let result = "";
  for (let key in link) {
    // switch(key) {
    //   case(datesAccessed):
    //     result += ${key}:
    // }
    if (key === "keywords") {
      result += `${key}: "${JSON.stringify(link[key])}`;
    } else {
      result += `${key}: "${link[key]}", `;
    }
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
    const createUpdateQuery = stringLink => {
      return `mutation{
        updateLink(${stringLink}) {
          id
        }
      }`;
    };
    const link = this.state.link;
    // TODO: enable this when everything's ready
    // link.datesAccessed.push(new Date().toISOString().slice(0, 10));
    debugger;
    const updateQuery = createUpdateQuery(linkToString(this.state.link));

    fetchQuery(updateQuery).then(data => {
      toast("updated");
    });
  };

  deleteHandler = () => {
    const deleteQuery = `mutation {
      deleteLink(id:${this.state.link.url.id}) {
        id
      }
    }`;
    fetchQuery(deleteQuery).then(() => {
      toast("deleted!");
      this.refresh();
    });
  };

  addHandler = () => {
    this.setState({
      link: {
        id: uuid(),
        takeaways: "",
        title: "",
        url: "",
        keywords: [],
        datesAccessed: []
      }
    });
  };

  /**
   * Update the keywords of the link
   */
  keywordSelected = selected => {
    selected = selected.sort((a, b) => {
      debugger;
      return a.label > b.label ? 1 : -1;
    });
    debugger;
    const link = { ...this.state.link };
    link.keywords = selected.map(obj => obj.value);
    this.setState(link);
  };

  render() {
    return (
      <>
        <div className="buttons">
          <button id="refresh" onClick={this.refresh}>
            Refresh
          </button>
          <button id="delete" onClick={this.deleteHandler}>
            Delete
          </button>
          <button id="Add" onClick={this.addHandler}>
            Add
          </button>
        </div>
        <MediaPlayer
          className="mediaPlayer"
          url={this.state.link.url}
        ></MediaPlayer>
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
            Keywords
            <Select
              values={this.state.link.keywords}
              className="keywords"
              multi={true}
              addPlaceholder="+ click to add"
              options={virtues}
              onChange={this.keywordSelected}
              create={true}
              onCreateNew={obj => {
                console.log(obj);
                debugger;
              }}
            />
          </label>

          <label>
            Dates
            <p>{this.state.link.datesAccessed}</p>
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
        <ToastContainer />
      </>
    );
  }
}

export default Form;
