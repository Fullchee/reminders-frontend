import React from "react";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
const routes = {
  "/": () => <Form />,
  "/search-results": () => <SearchResults />,
};
export default routes;
