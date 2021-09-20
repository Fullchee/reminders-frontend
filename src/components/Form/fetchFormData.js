import history from '../../history';
import { toast } from 'react-toastify';
import { getTimeDiff } from '../../helper/utilities';
import { STATUS } from './statuses';

const formatLink = (link) => {
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

const minifyLink = (link) => link;

const get = async (setStatus, link) => {
  setStatus(STATUS.PENDING);
  try {
    debugger;
    const res = await fetch(link);
    const json = await res.json();
    setStatus(STATUS.RESOLVED);
    return json;
  } catch (error) {
    debugger;
    console.error(error);
    setStatus(STATUS.REJECTED);
    if (error.name === 'AbortError') {
      debugger;
    }
  }
};

const getRandomLink = (setStatus) => async () => {
  const link = await get(setStatus, process.env.REACT_APP_BACKEND_URL + 'random-link');
  if (!link) {
    debugger;
    return;
  }
  history.push(`/link/${link.id}`);
  return formatLink(link);
};

const getLink = (setStatus) => async (id) => {
  setStatus(STATUS.PENDING);
  debugger;
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + `link/${id}`);
  if (res.status !== 404) {
    const link = await res.json();
    setStatus(STATUS.RESOLVED);
    return formatLink(link);
  } else {
    console.log('🚀 ~ file: fetchFormData.js ~ line 48 ~ getLink ~ res', res);
    debugger;
    setStatus(STATUS.REJECTED);
  }
};

const getKeywords = (setStatus) => async () => {
  const json = await get(setStatus, process.env.REACT_APP_BACKEND_URL + 'keywords');
  if (!json) {
    debugger;
    return;
  }
  let i = 0;
  const formattedKeywords = json.map((word) => {
    return { id: i++, label: word, value: word };
  });
  return formattedKeywords;
};

const sendUpdate = (setStatus) => async (link, hasLink) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(minifyLink({ ...link })),
  };

  const api = hasLink ? 'update-link' : 'add-link';
  try {
    setStatus(STATUS.PENDING);
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${api}`, requestOptions);
    setStatus(STATUS.RESOLVED);
    const json = await response.json();
    return formatLink(json);
  } catch (error) {
    console.error(error);
    debugger;
    setStatus(STATUS.REJECTED);
  }
};

const deleteLink = (setStatus) => async (link) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: link.id,
    }),
  };

  try {
    setStatus(STATUS.PENDING);
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'delete-link', requestOptions);
    await res.json();
    setStatus(STATUS.RESOLVED);
    toast.success(`Deleted link: ${link.title}`);
  } catch (error) {
    console.error(error);
    setStatus(STATUS.REJECTED);
    toast.error("Couldn't delete the link");
  }
};

export const apiCalls = (status, setStatus) => {
  return {
    getRandomLink: getRandomLink(setStatus),
    getLink: getLink(setStatus),
    getKeywords: getKeywords(setStatus),
    sendUpdate: sendUpdate(setStatus),
    deleteLink: deleteLink(setStatus),
  };
};

export const defaultLink = {
  keywords: [{ id: 12, label: 'Perspective', value: 'Perspective' }],
  title: 'Carl Sagan - Pale Blue Dot',
  url: 'https://www.youtube.com/watch?v=wupToqz1e2g',
  notes:
    "Look again at that dot. That's here. That's home. That's us. <div>On it everyone you love, <br>everyone you know, <br>everyone you ever heard of, <br>every human being who ever was, lived out their lives.</div>",
  lastAccessed: '3 months ago',
  id: 0,
  flag: false,
  views: 3,
};
