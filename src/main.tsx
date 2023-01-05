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
import { store } from "../src/features/store";
import { Provider, useSelector } from "react-redux";
import User from "./pages/user/User";
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
        children: [
          {
            path: "/user/:id",
            element: <User />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Header />
      <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);
