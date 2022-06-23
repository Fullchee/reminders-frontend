import history from "../../history";
import { toast } from "react-toastify";
import { getTimeDiff } from "../../helper/utilities";
import { Status } from "./statuses";

const formatLink = (link: Link) => {
  if (!link?.keywords?.length) {
    link.keywords = [];
  }
  let i = 0;
  link.keywords = link.keywords.map((word: string) => {
    return { id: i++, label: word, value: word };
  });
  link.lastAccessed = getTimeDiff((link.last_accessed as string));
  link.startTime = link.start_time;
  return link;
};

const minifyLink = (link: Link) => link;

const get = async (setStatus: (s: Status) => void, linkUrl: string) => {
  setStatus(Status.PENDING);
  try {
    const res = await fetch(linkUrl);
    const json = await res.json();
    setStatus(Status.RESOLVED);
    return json;
  } catch (error) {
    console.error(error);
    setStatus(Status.REJECTED);
    // @ts-ignore
    if (error.name === "AbortError") {
      console.error("AbortError");
    }
  }
};

const getRandomLink = (setStatus: (s: Status) => void) => async () => {
  const link = await get(
    setStatus,
    process.env.REACT_APP_BACKEND_URL + "random-link"
  );
  if (!link) {
    console.error("Couldn't find a link");
    return;
  }
  history.push(`/link/${link.id}`);
  return formatLink(link);
};

const getLink = (setStatus: (s: Status) => void) => async (id: number) => {
  setStatus(Status.PENDING);
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + `link/${id}`);
  if (res.status !== 404) {
    const link = await res.json();
    setStatus(Status.RESOLVED);
    return formatLink(link);
  } else {
    setStatus(Status.REJECTED);
  }
};

const getKeywords = (setStatus: (s: Status) => void) => async () => {
  const json = await get(
    setStatus,
    process.env.REACT_APP_BACKEND_URL + "keywords"
  );
  if (!json) {
    console.error("Couldn't find keywords");
    return;
  }
  let i = 0;
  const formattedKeywords = json.map((word: string) => {
    return { id: i++, label: word, value: word };
  });
  return formattedKeywords;
};

const sendUpdate = (setStatus: (s: Status) => void) => async (
  link: Link,
  hasLink: boolean
) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(minifyLink({ ...link })),
  };

  const api = hasLink ? "update-link" : "add-link";
  try {
    setStatus(Status.PENDING);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}${api}`,
      requestOptions
    );
    setStatus(Status.RESOLVED);
    const json = await response.json();
    return formatLink(json);
  } catch (error) {
    console.error(error);
    setStatus(Status.REJECTED);
  }
};

const deleteLink = (setStatus: (s: Status) => void) => async (link: Link) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: link.id,
    }),
  };

  try {
    setStatus(Status.PENDING);
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + "delete-link",
      requestOptions
    );
    await res.json();
    setStatus(Status.RESOLVED);
    toast.success(`Deleted link: ${link.title}`);
  } catch (error) {
    console.error(error);
    setStatus(Status.REJECTED);
    toast.error("Couldn't delete the link");
  }
};

export const apiCalls = (status: Status, setStatus: (s: Status) => void) => {
  return {
    getRandomLink: getRandomLink(setStatus),
    getLink: getLink(setStatus),
    getKeywords: getKeywords(setStatus),
    sendUpdate: sendUpdate(setStatus),
    deleteLink: deleteLink(setStatus),
  };
};

export const defaultLink: Link = {
  keywords: [{ id: 12, label: "Perspective", value: "Perspective" }],
  title: "Carl Sagan - Pale Blue Dot",
  url: "https://www.youtube.com/watch?v=wupToqz1e2g?t=10",
  notes:
    "Look again at that dot. That's here. That's home. That's us. <div>On it everyone you love, <br>everyone you know, <br>everyone you ever heard of, <br>every human being who ever was, lived out their lives.</div>",
  lastAccessed: "3 months ago",
  id: 0,
  flag: false,
  views: 3,
  startTime: 10,
};
