import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaPlayer from "./MediaPlayer";
import { uuid } from "uuidv4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-dropdown-select";
import { withApollo } from "react-apollo";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import TextareaAutosize from "react-textarea-autosize";
import QUERY from "./queries";
import MUTATION from "./mutations";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        keywords: [{ id: 12, label: "Perspective", value: "Perspective" }],
        title: "This is Water - David Foster Wallace",
        url: "https://www.youtube.com/watch?v=ms2BvRbjOYo",
        takeaways:
          "Really reminded me of meditative practices. \n\nGreat advice, takes practice to follow",
        datesAccessed: ["2019-08"],
        id: "23"
      },
      keywordOptions: []
    };
  }

  componentDidMount() {
    this.getKeywords();
  }

  getKeywords = async () => {
    const res = await fetch(
      "https://fullchee-values-backend.herokuapp.com/keywords"
    );
    const json = await res.json();
    this.setState({ keywordOptions: JSON.parse(json) });
  };

  getRandomLink = async () => {
    try {
      const res = await this.props.client.query({
        query: QUERY.RANDOM_LINK
      });
      return res.data.randomLink;
    } catch (e) {
      console.error(e);
    }
  };

  refresh = () => {
    this.getRandomLink().then(link => {
      if (!link) {
        throw new Error("Start your local server!");
      }
      let i = 0;
      link.keywords = link.keywords.map(word => {
        return { id: i++, label: word, value: word };
      });
      this.setState({ link: link });
    });
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const newLink = this.state.link;
    newLink[name] = value;
    this.setState({
      link: newLink
    });
  };

  updateLink = async event => {
    event.preventDefault();
    const link = this.state.link;
    const today = new Date().toISOString().slice(0, 10);
    if (link.datesAccessed[link.datesAccessed.length - 1] !== today) {
      link.datesAccessed.push(today);
    }
    link.keywords = link.keywords.map(obj => obj.value);
    try {
      await this.props.client.query({
        query: MUTATION.UPDATE_LINK,
        variables: {
          stringifiedLink: JSON.stringify(this.state.link)
        }
      });
      toast(`Updated link: ${this.state.link.title}!`);
    } catch (e) {
      toast("Couldn't update the link");
      console.error(e.networkError.result.errors);
    }
  };

  confirmDelete = () => {
    confirmAlert({
      title: `Delete "${this.state.link.title}"?`,
      message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            this.deleteLink();
          }
        },
        {
          label: "No",
          onClick: () => {
            return;
          }
        }
      ]
    });
  };
  deleteLink = async () => {
    try {
      await this.props.client.query({
        query: MUTATION.DELETE_LINK,
        variables: {
          linkId: this.state.link.id
        }
      });
      toast(`Deleted link: ${this.state.link.title}!`);
      this.refresh();
    } catch (e) {
      toast("Couldn't delete the link");
      console.error(e.networkError.result.errors);
    }
  };

  clearForm = () => {
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
      return a.label > b.label ? -1 : 1;
    });
    const link = { ...this.state.link };
    link.keywords = selected.map(keyword => {
      if (keyword && typeof keyword === "object") {
        return keyword;
      } else {
        return {
          id: keyword,
          value: keyword,
          label: keyword
        };
      }
    });
    this.setState({ link });
  };

  render() {
    return (
      <>
        <div className="buttons">
          <button id="refresh" onClick={this.refresh}>
            Refresh
          </button>
          <button id="delete" onClick={this.confirmDelete}>
            Delete
          </button>
          <button id="Add" onClick={this.clearForm}>
            Add
          </button>
        </div>
        <MediaPlayer
          className="mediaPlayer"
          url={this.state.link.url || ""}
          onEnded={this.updateLink}
        ></MediaPlayer>
        <form className="form">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="input title"
            value={this.state.link.title || ""}
            onChange={this.changeHandler}
          />
          <label htmlFor="url">URL</label>
          <input
            id="url"
            type="url"
            name="url"
            className="input"
            value={this.state.link.url || ""}
            onChange={this.changeHandler}
          />
          <label htmlFor="takeaways">Takeaways</label>
          <TextareaAutosize
            id="takeaways"
            className="input takeaways"
            name="takeaways"
            minRows={5}
            value={this.state.link.takeaways || ""}
            onChange={this.changeHandler}
          ></TextareaAutosize>
          <label htmlFor="keywords">Keywords</label>
          <div id="keywords" className="keywords">
            <Select
              values={this.state.link.keywords}
              multi={true}
              options={this.state.keywordOptions || []}
              onChange={this.keywordSelected}
              create={true}
              onCreateNew={obj => {
                console.log(obj);
                // TODO: add a new item
              }}
            />
          </div>
          <label htmlFor="datesAccessed">Dates</label>
          <p id="datesAccessed">{this.state.link.datesAccessed}</p>
          <button
            id="submit"
            type="submit"
            name="submit"
            onClick={this.updateLink}
          >
            Update
          </button>
        </form>
        <ToastContainer />
      </>
    );
  }
}

Form.propTypes = {
  client: PropTypes.object
};

withApollo(Form);
