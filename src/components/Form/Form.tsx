import { confirmAlert } from "react-confirm-alert";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";

import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

import history from "../../history";
import MediaPlayer from "./MediaPlayer";
import { LoadingIndicator } from "./LoadingIndicator";
import Nav from "../Nav/Nav";
import { getTimeDiff, capitalizeFirstLetter } from "../../helper/utilities";
import { defaultLink, apiCalls } from "./fetchFormData";
import { Status } from "./statuses";
import { setupBackgroundYouTube } from "./videoBgPlayContent";
import { setupKeyboardShortcuts } from "./setupKeyboardShortcuts";
import "./Form.scss";

function connectionErrorToast() {
  toast.error("Oops! We couldn't connect to the backend!");
}

interface FormProps {
  id: number;
  handleLogout: () => void;
}

export function Form({ id, handleLogout }: FormProps) {
  const [keywordOptions, setKeywordOptions] = useState([]);
  const [hasLink, setHasLink] = useState(false);
  const [link, setLink] = useState(defaultLink);
  const [status, setStatus] = useState(Status.IDLE);
  const {
    deleteLink,
    getKeywords,
    getLink,
    getRandomLink,
    sendUpdate,
  } = apiCalls(status, setStatus);

  /**
   * @param {Event (which is ignored) or an integer} id
   */
  const refresh = async (id: number) => {
    let link;
    setStatus(Status.PENDING);
    if (!Number.isNaN(parseInt(`${id}`))) {
      link = await getLink(parseInt(`${id}`));
    }
    if (!link) {
      link = await getRandomLink();
      if (!link) {
        connectionErrorToast();
        return;
      }
    }
    setLink(link);
    setHasLink(true);
    setStatus(Status.RESOLVED);
  };

  const handleUrlChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setLink({ ...link, [name]: value });
  };

  const handleEditorChange = (content: string, _editor: any) => {
    setLink({ ...link, notes: content });
  };

  const handleStartTimeChange = (event: any) => {
    setLink({
      ...link,
      startTime: event.target.value,
      start_time: event.target.value,
    });
  };

  const updateLink = async (event: any) => {
    if (event) {
      event.preventDefault();
    }

    const backendLink = (await sendUpdate(link, hasLink)) as Link;
    let message = `Added/updated link: ${backendLink.title}`;
    if (!hasLink) {
      message += ` with id: ${backendLink.id}`;
    }
    toast.success(message);
    history.push(`/link/${backendLink.id}`);
    setLink({
      ...backendLink,
      lastAccessed: getTimeDiff((backendLink.last_accessed as string)),
    });
    setHasLink(true);
  };

  const confirmDelete = () => {
    confirmAlert({
      title: `Delete "${link.title}"?`,
      message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteLink(link);
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
  const confirmLogout = () => {
    confirmAlert({
      title: `Logout?`,
      message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            handleLogout();
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

  const toggleFlag = async () => {
    setLink((prevState) => {
      toast.info(prevState.flag ? "Unflagged!" : "Flagged!");
      return { ...prevState, flag: !prevState.flag };
    });
  };

  const clearForm = () => {
    history.push(`/`);

    const keywords = hasLink ? link.keywords : [];
    setLink({
      notes: "",
      title: "",
      url: "",
      keywords,
      lastAccessed: "",
      flag: false,
      views: 0,
    });
    setHasLink(false);
  };

  /**
   * Update the keywords of the link
   */
  const keywordSelected = (selectedKeywords: Keyword[]) => {
    selectedKeywords = selectedKeywords.sort((a, b) => {
      return a.label > b.label ? -1 : 1;
    });
    link.keywords = selectedKeywords.map((keyword: Keyword) => {
      if (keyword && typeof keyword === "object") {
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
    getKeywords().then((keywords) => {
      if (!keywords) {
        connectionErrorToast();
      } else {
        setKeywordOptions(keywords);
      }
    });
    setupBackgroundYouTube();
    setupKeyboardShortcuts({
      updateLink,
      clearForm,
      refresh,
      confirmDelete,
      toggleFlag,
    });
    // TODO: remove event listeners on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id && id !== link.id) {
      refresh(id);
      setHasLink(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="app container">
      <div className="form-container">
        <Nav
          hasLink={hasLink}
          refresh={refresh}
          confirmDelete={confirmDelete}
          clearForm={clearForm}
          toggleFlag={toggleFlag}
          isFlagged={link.flag}
          confirmLogout={confirmLogout}
        />
        <MediaPlayer
          startTime={link.startTime || 0}
          url={link.url || ""}
          // TODO:
          // onEnd={updateLink}
        ></MediaPlayer>
        <form className="form">
          {hasLink && (
            <>
              <label htmlFor="id">ID</label>
              <p id="id">{link.id}</p>
            </>
          )}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="input input--text"
            value={link.title || ""}
            onChange={handleUrlChange}
          />
          <label htmlFor="url">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(link.url);
                toast.info("Copied url to clipboard");
              }}
              className="button-link url-label"
            >
              <p style={{ paddingRight: "4px" }}>URL </p>
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
            value={link.url || ""}
            onChange={handleUrlChange}
          />
          {hasLink && (
            <>
              <label htmlFor="startTime">Start time</label>
              <input
                id="startTime"
                name="startTime"
                type="number"
                value={link.startTime}
                className="input input--text"
                onChange={handleStartTimeChange}
              />
            </>
          )}
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
          <label htmlFor="notes" style={{ color: "white" }}>
            Notes
          </label>
          <div className="text-editor">
            <Editor
              id="tiny-mce-editor"
              apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  `undo redo | formatselect | bold italic ` +
                  `| bullist numlist outdent indent | removeformat | image ` +
                  `| alignleft aligncenter alignright | help |`,
              }}
              textareaName="notes"
              value={link.notes || ""}
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
            {hasLink ? "Update" : "Add"}
          </button>
        </form>
      </div>
      {status === Status.PENDING && <LoadingIndicator />}
    </div>
  );
}

Form.propTypes = {
  handleLogout: PropTypes.func,
  id: PropTypes.any,
};
