import { Form } from "@src/components/Form/Form";
import "@src/components/Form/Form.scss";
import MediaPlayer from "@src/components/Form/MediaPlayer";
import { apiCalls } from "@src/components/Form/fetchFormData";
import { defaultLink } from "@src/components/Form/formConstants";
import { setupKeyboardShortcuts } from "@src/components/Form/setupKeyboardShortcuts";
import { Status } from "@src/components/Form/statuses";
import { setupBackgroundYouTube } from "@src/components/Form/videoBgPlayContent";
import { Nav } from "@src/components/Nav/Nav";
import { getTimeDiff } from "@src/helper/utilities";
import { Link } from "@src/types";
import React, { useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

function connectionErrorToast() {
  toast.error("We couldn't connect to the backend!");
}

interface FormContainerProps {
  id?: number;
}

export function FormContainer({ id }: FormContainerProps) {
  const navigate = useNavigate();
  const [hasLink, setHasLink] = useState(false);
  const [link, setLink] = useState(defaultLink);
  const [status, setStatus] = useState(Status.IDLE);
  const { deleteLink, getLink, getRandomLink, sendUpdate } = apiCalls(
    status,
    setStatus,
  );
  const ref = useRef(null);

  /**
   * @param {Event (which is ignored) or an integer} id
   */
  const refresh = async (id: number) => {
    let link;
    setStatus(Status.PENDING);
    // @ts-ignore
    if (ref?.current?.staticStart) {
      // @ts-ignore
      ref.current.staticStart();
    }
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
    // @ts-ignore
    if (ref?.current?.complete) {
      // @ts-ignore
      ref.current.complete();
    }
  };

  const handleUrlChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setLink({ ...link, [name]: value });
  };

  const handleEditorChange = (content: string) => {
    setLink({ ...link, notes: content });
  };

  const handleStartTimeChange = (event: any) => {
    setLink({
      ...link,
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
    navigate(`/link/${backendLink.id}`);
    setLink({
      ...backendLink,
      last_accessed: getTimeDiff(backendLink.last_accessed as string),
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
            alert("not implemented");
            // handleLogout();
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
    navigate(`/`);

    const keywords = hasLink ? link.keywords : [];
    setLink({
      notes: "",
      title: "",
      url: "",
      keywords,
      last_accessed: "",
      flag: false,
      views: 0,
      start_time: 0,
    });
    setHasLink(false);
  };

  useEffect(() => {
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

  useEffect(() => {
    document.title = `${link.title} - Reminders`;
  }, [link.title]);

  return (
    <div className="app container">
      <LoadingBar color="#4158d0" ref={ref} />
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
          startTime={link.start_time || 0}
          url={link.url || ""}
          // TODO:
          // onEnd={updateLink}
        ></MediaPlayer>
        <Form
          link={link}
          hasLink={hasLink}
          handleUrlChange={handleUrlChange}
          toast={toast}
          handleStartTimeChange={handleStartTimeChange}
          handleEditorChange={handleEditorChange}
          updateLink={updateLink}
        />
      </div>
    </div>
  );
}
