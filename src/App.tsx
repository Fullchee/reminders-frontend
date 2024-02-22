import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        hideProgressBar={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={2000}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
