import React from "react";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
const routes = {
  "/": () => <Form id="0"/>,
  "/search-results": () => <SearchResults />,
  "/link/:id": ({id}) => <Form id={id}/>
};
export default routes;
