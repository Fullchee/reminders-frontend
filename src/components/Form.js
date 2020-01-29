import React, { Component } from "react";
import MediaPlayer from "./MediaPlayer";
import { uuid } from "uuidv4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import virtues from "../virtues";
import Select from "react-dropdown-select";
import { withApollo } from "react-apollo";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import QUERY from "./queries";
import MUTATION from "./mutations";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        id: "",
        tile: "",
        url: "",
        keywords: [],
        takeaways: "",
        datesAccessed: []
      }
    };
  }

  componentDidMount() {
    this.refresh();
  }

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
    this.getRandomLink().then(result => {
      this.setState({ link: result });
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
    // TODO: enable this when everything's ready
    // link.datesAccessed.push(new Date().toISOString().slice(0, 10));
    try {
      await this.props.client.query({
        query: MUTATION.UPDATE_LINK,
        variables: {
          stringifiedLink: JSON.stringify(this.state.link)
        }
      });
      toast(`Updated link: ${this.state.link.title}!`);
    } catch (e) {
      debugger;
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
        ></MediaPlayer>
        <form>
          <div>
            <label>
              Title
              <input
                type="text"
                name="title"
                value={this.state.link.title || ""}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              URL
              <input
                type="url"
                name="url"
                value={this.state.link.url || ""}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              <div>Takeaways</div>
              <textarea
                type="text"
                name="takeaways"
                value={this.state.link.takeaways || ""}
                onChange={this.changeHandler}
              />
            </label>
          </div>
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
            <button type="submit" name="submit" onClick={this.updateLink}>
              Submit
            </button>
          </label>
        </form>
        <ToastContainer />
      </>
    );
  }
}

withApollo(Form);

export default Form;
