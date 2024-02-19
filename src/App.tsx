import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FormContainer } from "./components/Form/FormContainer";
import "./styles/App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormContainer />,
    children: [
      {
        path: ":id",
        element: <FormContainer />,
      },
      {
        path: "link/:id",
        element: <FormContainer />,
      },
      {
        path: "login",
        element: "Login page",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        hideProgressBar={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={2000}
      />
    </>
  );
}

export default App;
