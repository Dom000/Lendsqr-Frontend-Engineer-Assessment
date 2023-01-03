import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Root from "./Layout/Root";
import ErrorPage from "./error-page";
import Users from "./pages/user/Users";
import UserDetails from "./pages/user/UserDetails";
// import "../src/components/Header/Header.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
