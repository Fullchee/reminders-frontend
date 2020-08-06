import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaPlayer from "./MediaPlayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-dropdown-select";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Nav from "./Nav";
import { Editor } from "@tinymce/tinymce-react";

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
        id: 0,
      },
      keywordOptions: [],
    };
  }

  componentDidMount() {
    this.getKeywords();
    if (this.props.id !== "0") {
      this.refresh(this.props.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.refresh(this.props.id);
    }
  }

  getKeywords = async () => {
    const res = await fetch(
      "https://fullchee-reminders-backend.herokuapp.com/keywords"
    );
    const json = await res.json();
    let i = 0;
    const formattedKeywords = json.map((word) => {
      return { id: i++, label: word, value: word };
    });
    this.setState({ keywordOptions: formattedKeywords });
  };

  formatLink = (link) => {
    if (!link.keywords) {
      link.keywords = [];
    } else {
      link.keywords = link.keywords.split(",");
    }
    let i = 0;
    link.keywords = link.keywords.map((word) => {
      return { id: i++, label: word, value: word };
    });
    return link;
  };

  minifyLink = (link) => {
    if (!link.keywords) {
      console.error(link);
    }
    const keywordArray = [];
    link.keywords.forEach((obj) => {
      keywordArray.push(obj.value);
    });
    link.keywords = keywordArray.join(",");
    return link;
  };

  getRandomLink = async () => {
    const res = await fetch(
      "https://fullchee-reminders-backend.herokuapp.com/random-link"
    );
    const link = await res.json();
    window.history.replaceState(null, "New Page Title", `/link/${link.id}`);
    return this.formatLink(link);
  };

  getLink = async (id) => {
    const res = await fetch(
      `https://fullchee-reminders-backend.herokuapp.com/link/${id}`
    );
    const link = await res.json();
    return this.formatLink(link);
  };

  refresh = async (id) => {
    let link;
    if (!Number.isNaN(parseInt(id))) {
      link = await this.getLink(parseInt(id));
    } else {
      link = await this.getRandomLink();
    }
    if (!link) {
      throw new Error("Got an empty link.");
    }
    this.setState({ link: link });
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newLink = this.state.link;
    newLink[name] = value;
    this.setState({
      link: newLink,
    });
  };
  handleEditorChange = (content, editor) => {
    const newLink = this.state.link;
    newLink["takeaways"] = content;
    this.setState({
      link: newLink,
    });
  };

  updateLink = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.minifyLink({ ...this.state.link })),
    };
    debugger;

    fetch(
      "https://fullchee-reminders-backend.herokuapp.com/update-link",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        toast(`Updated link: ${this.state.link.title}!`);
      })
      .catch((error) => {
        console.error(error);
        toast("Couldn't update the link");
      });
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
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  deleteLink = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.link.id,
      }),
    };

    fetch(
      "https://fullchee-reminders-backend.herokuapp.com/delete-link",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        toast(`Deleted link: ${this.state.link.title}!`);
      })
      .catch((error) => {
        console.error(error);
        toast("Couldn't delete the link");
      });
  };

  clearForm = () => {
    this.setState({
      link: {
        takeaways: "",
        title: "",
        url: "",
        keywords: [],
        datesAccessed: [],
      },
    });
  };

  /**
   * Update the keywords of the link
   */
  keywordSelected = (selected) => {
    selected = selected.sort((a, b) => {
      return a.label > b.label ? -1 : 1;
    });
    const link = { ...this.state.link };
    link.keywords = selected.map((keyword) => {
      if (keyword && typeof keyword === "object") {
        return {
          ...keyword,
          label: this.capitalizeFirstLetter(keyword.label),
          value: this.capitalizeFirstLetter(keyword.value),
        };
      } else {
        return {
          id: keyword,
          value: keyword,
          label: keyword,
        };
      }
    });
    this.setState({ link });
  };
  capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <Nav
            refresh={this.refresh}
            confirmDelete={this.confirmDelete}
            clearForm={this.clearForm}
          />
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
              className="input input--text"
              value={this.state.link.title || ""}
              onChange={this.changeHandler}
            />
            <label htmlFor="url">URL</label>
            <input
              id="url"
              type="url"
              name="url"
              className="input input--text"
              value={this.state.link.url || ""}
              onChange={this.changeHandler}
            />
            <label htmlFor="keywords">Keywords</label>
            <div id="keywords" className="keywords">
              <Select
                values={this.state.link.keywords}
                multi={true}
                options={this.state.keywordOptions || []}
                onChange={this.keywordSelected}
                create={true}
                onCreateNew={(obj) => {
                  console.log(obj);
                  // TODO: add a new item
                }}
              />
            </div>
            <label htmlFor="datesAccessed">Dates</label>
            <p id="datesAccessed">{this.state.link.datesAccessed}</p>
            <label htmlFor="takeaways" style={{ color: "white" }}>
              Takeaways
            </label>
            <div className="text-editor">
              <Editor
                apiKey="mhoop81tplrihnhuphy89bsw7qjq01dhzkjdzgb61ruf4itq"
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | image insertdatetime",
                }}
                name="takeaways"
                value={this.state.link.takeaways || ""}
                onEditorChange={this.handleEditorChange}
              />
            </div>
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
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  client: PropTypes.object,
};
