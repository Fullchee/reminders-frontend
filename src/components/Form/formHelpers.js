import history from '../../history';
import { toast } from 'react-toastify';
import { getTimeDiff } from '../../helper/utilities';

export const formatLink = (link) => {
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

export const minifyLink = (link) => link;

export const getRandomLink = async () => {
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'random-link');
  const link = await res.json();
  history.push(`/link/${link.id}`);
  return formatLink(link);
};

export const getLink = async (id) => {
  const res = await fetch(process.env.REACT_APP_BACKEND_URL + `link/${id}`);
  if (res.status !== 404) {
    const link = await res.json();
    return formatLink(link);
  }
};

export const getKeywords = async () => {
  try {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'keywords');
    const json = await res.json();
    let i = 0;
    const formattedKeywords = json.map((word) => {
      return { id: i++, label: word, value: word };
    });
    return formattedKeywords;
  } catch (error) {
    console.error(error.name);
    if (error.name === 'AbortError') {
      this.setState({ waitingForBackend: true });
    }
  }
};

export const sendUpdate = async (link, hasLink) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(minifyLink({ ...link })),
  };

  const api = hasLink ? 'update-link' : 'add-link';
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${api}`, requestOptions);
  return response.json();
};

export const deleteLink = async (link) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: link.id,
    }),
  };

  fetch(process.env.REACT_APP_BACKEND_URL + 'delete-link', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      toast(`Deleted link: ${link.title}`);
    })
    .catch((error) => {
      console.error(error);
      toast("Couldn't delete the link");
    });
};

//   TODO: try { }
//  catch (error) {
//     console.error(error.name);
//     if (error.name === 'AbortError') {
//       // setState({ waitingForBackend: true });
//     }
//   }
