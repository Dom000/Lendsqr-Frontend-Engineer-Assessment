import React, { useState } from "react";
import "./header.css";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { handleIsLoggedIn, handleSidebar } from "../../features/lendsqrSlice";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Sidebar from "../sidebnav/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { sidenavs } from "../../services/json";
import { useSelect } from "@mui/base";
import { RootState } from "../../features/store";
import "animate.css";

function Header() {
  const [showlogout, setshowlogout] = useState(false);
  const dispatch = useDispatch();
  // let location = useLocation();
  // const navigate = useNavigate();
  const sideBar = useSelector((state: RootState) => state.lendsqr.sideBar);
  const handleLogout = () => {
    dispatch(handleIsLoggedIn(false));
  };
  return (
    <>
      {" "}
      <div id="header">
        <div id="menu" onClick={() => dispatch(handleSidebar(true))}>
          <HiOutlineMenuAlt2 />
        </div>
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
          <span id="noty">
            <IoIosNotificationsOutline
              style={{ fontSize: 25, cursor: "pointer", marginTop: 10 }}
            />
          </span>
          <span id="secondSpan">
            <div>
              <img id="avatar" src="/image_4.png" />
            </div>
            <span id="inner" onClick={() => setshowlogout(!showlogout)}>
              <p>Adedeji</p>
              <IoMdArrowDropdown />
              {showlogout && (
                <div onClick={handleLogout} id="logoutBox">
                  <p> Logout</p>
                </div>
              )}
            </span>
          </span>
        </div>
      </div>
      {/* sidebar  ############################### */}
      {sideBar && (
        <div
          id="mobilenavbox1"
        >
          <div id="mobilenavbox" className="animate__animated animate__slideInLeft">
            <div id="closeIcon" onClick={() => dispatch(handleSidebar(false))}>
              <AiOutlineClose style={{ fontSize: 24 }} />
            </div>
            <div id="navhead1">
              <div>
                <FaBriefcase style={{ color: "#213F7D", marginTop: 2 }} />
              </div>
              <div>
                <p style={{ color: "#213F7D", fontSize: 14 }}>
                  Switch Organization
                </p>
              </div>
              <div>
                <MdKeyboardArrowDown
                  style={{ color: "#213F7D", fontSize: 20, marginTop: 3 }}
                />
              </div>
            </div>
            {sidenavs.map((item, index) => (
              <>
                <p
                  style={{
                    color: "#545F7D",
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 18,
                  }}
                >
                  {item.title}
                </p>
                <div id="wrap2" key={index}>
                  {item.child.map((itm, indx) =>
                    item.title === null ? (
                      <div  id="navItems2">
                        <div>
                          {
                            <itm.icon
                              style={{
                                color: "#213F7D",
                                marginTop: 2,
                                marginRight: 18,
                                // opacity: itm.href === location.pathname ? 0.9 : 0.5,
                              }}
                            />
                          }
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#213F7D",
                              fontSize: 14,
                              opacity:
                                itm.href === location.pathname ? 0.9 : 0.5,
                            }}
                          >
                            {itm.pageName}
                          </p>
                        </div>
                      </div>
                    ) : itm.href === location.pathname ? (
                      <div id="navItemsActive2">
                        <div>
                          {
                            <itm.icon
                              style={{
                                color: "#213F7D",
                                marginTop: 2,
                                marginRight: 18,
                                // opacity: itm.href === location.pathname ? 0.9 : 0.5,
                              }}
                            />
                          }
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#213F7D",
                              fontSize: 14,
                              opacity:
                                itm.href === location.pathname ? 0.9 : 0.5,
                            }}
                          >
                            {itm.pageName}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div id="navItems2">
                        <div>
                          {
                            <itm.icon
                              style={{
                                color: "#213F7D",
                                marginTop: 2,
                                marginRight: 18,
                                // opacity: itm.href === location.pathname ? 0.9 : 0.5,
                              }}
                            />
                          }
                        </div>
                        <div>
                          <p
                            style={{
                              color: "#213F7D",
                              fontSize: 14,
                              opacity:
                                itm.href === location.pathname ? 0.9 : 0.5,
                            }}
                          >
                            {itm.pageName}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            ))}
          </div>
          <div id="blur"></div>
        </div>
      )}
    </>
  );
}

export default Header;
