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

  const res = await fetch(
    `https://fullchee-values-backend.herokuapp.com/`,
    options
  );
  const { data } = await res.json();
  return data;
}

export default fetchQuery;
