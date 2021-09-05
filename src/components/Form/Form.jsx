/* eslint-disable react-hooks/exhaustive-deps */
import { confirmAlert } from 'react-confirm-alert';
import { Editor } from '@tinymce/tinymce-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-dropdown-select';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import history from '../../history';
import MediaPlayer from './MediaPlayer';
import { LoadingIndicator } from './LoadingIndicator';
import Nav from '../Nav/Nav';
import { getTimeDiff, capitalizeFirstLetter } from '../../helper/utilities';
import { defaultLink, apiCalls } from './fetchFormData';
import { STATUS } from './statuses';

import './Form.scss';

function spoofPageVisibilityApi() {
  var a = Node.prototype.addEventListener;
  Node.prototype.addEventListener = function (e) {
    if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange') {
      a.apply(this, arguments);
    }
  };
}
export function Form({ id }) {
  const [keywordOptions, setKeywordOptions] = useState([]);
  const [hasLink, setHasLink] = useState(false);
  const [link, setLink] = useState(defaultLink);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { deleteLink, getKeywords, getLink, getRandomLink, sendUpdate } = apiCalls(setStatus);

  /**
   * @param {Event (which is ignored) or an integer} id
   */
  const refresh = useCallback(async (id) => {
    let link;
    if (!Number.isNaN(parseInt(id))) {
      link = await getLink(parseInt(id));
    }
    if (!link) {
      link = await getRandomLink();
    }
    setLink(link);
    setHasLink(true);
    setStatus(false);
  });

  const handleUrlChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLink({ ...link, [name]: value });
  };

  const handleEditorChange = (content, editor) => {
    setLink({ ...link, notes: content });
  };

  const updateLink = useCallback(async (event) => {
    if (event) {
      event.preventDefault();
    }

    const data = await sendUpdate(link, hasLink);
    let message = `Added/updated link: ${link.title}`;
    if (!hasLink) {
      message += ` with id: ${data.id}`;
    }
    toast(message);
    history.push(`/link/${data.id}`);
    setHasLink(true);
    setLink({ ...data, lastAccessed: getTimeDiff(data.last_accessed) });
  });

  const confirmDelete = useCallback(() => {
    confirmAlert({
      title: `Delete "${link.title}"?`,
      message: '',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteLink(link);
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
  });

  const toggleFlag = useCallback(async () => {
    setLink({ ...link, flag: !link.flag }, () => updateLink());
  });

  const clearForm = useCallback(() => {
    history.push(`/`);

    const keywords = hasLink ? link.keywords : [];
    setLink({
      notes: '',
      title: '',
      url: '',
      keywords,
      lastAccessed: '',
    });
    setHasLink(false);
  });

  /**
   * Update the keywords of the link
   */
  const keywordSelected = (selected) => {
    selected = selected.sort((a, b) => {
      return a.label > b.label ? -1 : 1;
    });
    link.keywords = selected.map((keyword) => {
      if (keyword && typeof keyword === 'object') {
        return {
          ...keyword,
          label: capitalizeFirstLetter(keyword.label),
          value: capitalizeFirstLetter(keyword.value),
        };
      } else {
        return {
          id: keyword,
          value: keyword,
          label: keyword,
        };
      }
    });
    setLink(link);
  };

  useEffect(() => {
    setKeywordOptions(getKeywords());
    spoofPageVisibilityApi();
    const disableCmdS = (e) => {
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        updateLink();
      }
      if (e.ctrlKey) {
        if (e.key === 'a') {
          e.preventDefault();
          clearForm();
        }
        if (e.key === 's') {
          e.preventDefault();
          updateLink();
        }
        if (e.key === 'r') {
          e.preventDefault();
          refresh();
        }
        if (e.key === 'd') {
          e.preventDefault();
          confirmDelete();
        }
        if (e.key === 'f') {
          e.preventDefault();
          toggleFlag();
        }
      }
    };
    document.addEventListener('keydown', disableCmdS);

    setTimeout(() => {
      const iframe = document.querySelector('iframe#tiny-mce-editor_ifr');
      if (iframe) {
        iframe.contentDocument.body.addEventListener('keydown', disableCmdS);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id && id !== link.id) {
      debugger;
      refresh(id);
    }
  }, [id]);
  console.log('🚀 ~ file: Form.jsx ~ line 197 ~ Form ~ link', link);

  return (
    <div className="app container">
      <div className="form-container">
        <Nav
          refresh={refresh}
          confirmDelete={confirmDelete}
          clearForm={clearForm}
          toggleFlag={toggleFlag}
          isFlagged={link.flag}
        />
        <MediaPlayer
          className="mediaPlayer"
          url={link.url || ''}
          onEnded={updateLink}
        ></MediaPlayer>
        <form className="form">
          <label htmlFor="id">ID</label>
          <p id="id">{link.id}</p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="input input--text"
            value={link.title || ''}
            onChange={handleUrlChange}
          />
          <label htmlFor="url">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(link.url);
                toast('Copied url to clipboard');
              }}
              className="button-link url-label"
            >
              <p style={{ paddingRight: '4px' }}>URL </p>
              <svg
                className="clipboard"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
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
            value={link.url || ''}
            onChange={handleUrlChange}
          />
          <label htmlFor="keywords">Keywords</label>
          <div id="keywords" className="keywords">
            <Select
              values={link.keywords}
              multi={true}
              options={keywordOptions || []}
              onChange={keywordSelected}
              create={true}
            />
          </div>
          <label htmlFor="lastAccessed">Last accessed</label>
          <p id="lastAccessed">{link.lastAccessed}</p>
          <label htmlFor="views">Views</label>
          <p id="views">{link.views}</p>
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
              value={link.notes || ''}
              onEditorChange={handleEditorChange}
            />
          </div>
          <button
            id="submitButton"
            type="submit"
            name="submitButton"
            className="submit-button"
            onClick={updateLink}
          >
            {hasLink ? 'Update' : 'Add'}
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
      {status === STATUS.PENDING && <LoadingIndicator />}
    </div>
  );
}

Form.propTypes = {
  client: PropTypes.object,
};
