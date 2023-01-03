import React from "react";
import "./root.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebnav/Sidebar";

function Root() {
  return (
    <div id="layout">
      <div id="side">
        <Sidebar />
      </div>
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
