import { confirmAlert } from 'react-confirm-alert';
import { Editor } from '@tinymce/tinymce-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Select from 'react-dropdown-select';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import history from '../../history';
import MediaPlayer from './MediaPlayer';
import { ThreeDotsWave } from './ThreeDotsWave';
import Nav from '../Nav/Nav';
import { getTimeDiff } from '../../helper/utilities';

import './Form.scss';

function spoofPageVisibilityApi() {
  var a = Node.prototype.addEventListener;
  Node.prototype.addEventListener = function (e) {
    if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange') {
      a.apply(this, arguments);
    }
  };
}

// https://dmitripavlutin.com/timeout-fetch-request/
async function fetchWithTimeout(resource, options = { timeout: 2000 }) {
  const timeout = options?.timeout || 2000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      link: {
        keywords: [{ id: 12, label: 'Perspective', value: 'Perspective' }],
        title: 'Carl Sagan - Pale Blue Dot',
        url: 'https://www.youtube.com/watch?v=wupToqz1e2g',
        notes:
          "Look again at that dot. That's here. That's home. That's us. <div>On it everyone you love, <br>everyone you know, <br>everyone you ever heard of, <br>every human being who ever was, lived out their lives.</div>",
        lastAccessed: '3 months ago',
        id: 0,
        hasLink: true,
        flag: false,
      },
      keywordOptions: [],
      waitingForBackend: false,
    };
  }

  componentDidMount() {
    const form = this;
    this.getKeywords();
    spoofPageVisibilityApi();
    const disableCmdS = (e) => {
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        form.updateLink();
      }
    };
    document.addEventListener('keydown', disableCmdS);

    setTimeout(() => {
      const iframe = document.querySelector('iframe#tiny-mce-editor_ifr');
      if (iframe) {
        iframe.contentDocument.body.addEventListener('keydown', disableCmdS);
      }
    }, 1000);
    this.refresh(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.refresh(this.props.id);
    }
  }

  getKeywords = async () => {
    try {
      const res = await fetchWithTimeout(process.env.REACT_APP_BACKEND_URL + 'keywords');
      const json = await res.json();
      let i = 0;
      const formattedKeywords = json.map((word) => {
        return { id: i++, label: word, value: word };
      });

      if (this.state.waitingForBackend) {
        toast('Backend is up!');
      }

      this.setState({ keywordOptions: formattedKeywords, waitingForBackend: false });
    } catch (error) {
      console.error(error.name);
      if (error.name === 'AbortError') {
        if (this.state.waitingForBackend) {
          toast('Waiting for backend to wake up');
        }
        this.setState({ waitingForBackend: true });
      }
    }
  };

  formatLink = (link) => {
    if (!link?.keywords?.length) {
      link.keywords = [];
    }
    let i = 0;
    link.keywords = link.keywords.map((word) => {
      return { id: i++, label: word, value: word };
    });
    link.lastAccessed = getTimeDiff(link.last_accessed);
    return link;
  };

  minifyLink = (link) => link;

  getRandomLink = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'random-link');
    const link = await res.json();
    history.push(`/link/${link.id}`);
    return this.formatLink(link);
  };

  getLink = async (id) => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + `link/${id}`);
    if (res.status !== 404) {
      const link = await res.json();
      return this.formatLink(link);
    }
  };

  /**
   * @param {Event (which is ignored) or an integer} id
   */
  refresh = async (id) => {
    let link;
    if (!Number.isNaN(parseInt(id))) {
      link = await this.getLink(parseInt(id));
    }
    if (!link) {
      link = await this.getRandomLink();
    }
    this.setState({ link: link, hasLink: true });
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
    newLink.notes = content;
    this.setState({
      link: newLink,
    });
  };

  updateLink = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.minifyLink({ ...this.state.link })),
    };

    const api = this.state.hasLink ? 'update-link' : 'add-link';
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${api}`, requestOptions);
    const data = await response.json();
    let message = `Added/updated link: ${this.state.link.title}`;
    if (!this.state.hasLink) {
      message += ` with id: ${data.id}`;
    }
    toast(message);
    history.push(`/link/${data.id}`);
    this.setState({
      hasLink: true,
      link: { ...data, lastAccessed: getTimeDiff(data.last_accessed) },
    });
  };

  confirmDelete = () => {
    confirmAlert({
      title: `Delete "${this.state.link.title}"?`,
      message: '',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.deleteLink();
          },
        },
        {
          label: 'No',
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  setIsFlagged = async () => {
    this.setState({ link: { ...this.state.link, flag: !this.state.link.flag } }, () =>
      this.updateLink(),
    );
  };

  deleteLink = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.link.id,
      }),
    };

    fetch(process.env.REACT_APP_BACKEND_URL + 'delete-link', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        toast(`Deleted link: ${this.state.link.title}`);
      })
      .catch((error) => {
        console.error(error);
        toast("Couldn't delete the link");
      });
  };

  clearForm = () => {
    history.push(`/`);
    this.setState({
      link: {
        notes: '',
        title: '',
        url: '',
        keywords: [],
        lastAccessed: '',
      },
      hasLink: false,
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
      if (keyword && typeof keyword === 'object') {
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
      <div className="app container">
        <div className="form-container">
          {this.state.waitingForBackend && (
            <div className="overlay">
              <div className="form-loading-container">
                <ThreeDotsWave />
              </div>
            </div>
          )}
          <Nav
            refresh={this.refresh}
            confirmDelete={this.confirmDelete}
            clearForm={this.clearForm}
            setIsFlagged={this.setIsFlagged}
            isFlagged={this.state.link.flag}
          />
          <MediaPlayer
            className="mediaPlayer"
            url={this.state.link.url || ''}
            onEnded={this.updateLink}
          ></MediaPlayer>
          <form className="form">
            <label htmlFor="id">ID</label>
            <p id="id">{this.state?.link.id}</p>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              className="input input--text"
              value={this.state.link.title || ''}
              onChange={this.changeHandler}
            />
            <label htmlFor="url">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(this.state.link.url);
                  toast('Copied url to clipboard');
                }}
                className="button-link url-label"
              >
                <p style={{ paddingRight: '4px' }}>URL </p>
                <svg
                  class="clipboard"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"
                  ></path>
                </svg>
              </button>
            </label>

            <input
              id="url"
              type="url"
              name="url"
              className="input input--text"
              value={this.state.link.url || ''}
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
              />
            </div>
            <label htmlFor="lastAccessed">Last accessed</label>
            <p id="lastAccessed">{this.state.link.lastAccessed}</p>
            <label htmlFor="views">Views</label>
            <p id="views">{this.state?.link.views}</p>
            <label htmlFor="notes" style={{ color: 'white' }}>
              Notes
            </label>
            <div className="text-editor">
              <Editor
                id="tiny-mce-editor"
                apiKey="mhoop81tplrihnhuphy89bsw7qjq01dhzkjdzgb61ruf4itq"
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    `undo redo | formatselect | bold italic strikethrough |` +
                    `alignleft aligncenter alignright |` +
                    `bullist numlist outdent indent | removeformat | help | image`,
                }}
                textAreaName="notes"
                value={this.state.link.notes || ''}
                onEditorChange={this.handleEditorChange}
              />
            </div>
            <button
              id="submitButton"
              type="submit"
              name="submitButton"
              className="submit-button"
              onClick={this.updateLink}
            >
              {this.state.hasLink ? 'Update' : 'Add'}
            </button>
          </form>
          <ToastContainer
            hideProgressBar={true}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            draggable={false}
            autoClose={2000}
          />
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  client: PropTypes.object,
};
