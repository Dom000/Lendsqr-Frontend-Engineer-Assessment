import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.scss'
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import ErrorPage from "./error-page";
import Users from "./pages/user/Users";
import UserDetails from "./pages/user/UserDetails";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";

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
function App() {
  const [count, setCount] = useState(0);
  const islogedIn = useSelector((state: RootState) => state.lendsqr.isLoggedIn);
  return (
    <div className="App">
      {islogedIn ? (
        <>
          <Header />
          <RouterProvider router={router} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
