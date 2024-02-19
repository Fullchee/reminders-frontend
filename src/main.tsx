import React from "react";
import ReactDOM from "react-dom/client";
// @ts-expect-error need to convert to ts
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
