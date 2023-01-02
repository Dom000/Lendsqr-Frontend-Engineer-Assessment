import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>hi</div>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
