import React from "react";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div id="header">
      <div>
        <img id="headerLogo" src="/logo.png" />
      </div>
      <div id="searchbox">
        <div id="mainschbx">
          <input id="inptsearch" placeholder="Search for anything" />
          <span id="spansearch">
            <AiOutlineSearch />
          </span>
        </div>
      </div>
      <div id="thirdbox">
        <p id="doc">Docs</p>
        <span>
          <IoIosNotificationsOutline
            style={{ fontSize: 25, cursor: "pointer",marginTop:10 }}
          />
        </span>
        <span id="secondSpan">
          <div>
            <img id="avatar" src="/image_4.png" />
          </div>
          <span id="inner">
            <p>Adedeji</p>
            <IoMdArrowDropdown />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
