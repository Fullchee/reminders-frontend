async function fetchQuery(query) {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: query
    })
  };

  const res = await fetch(`http://localhost:5000/`, options);
  const { data } = await res.json();
  return data.randomLink;
}

export default fetchQuery;
