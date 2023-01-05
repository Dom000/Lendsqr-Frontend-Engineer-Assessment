import React from "react";
import { sidenavs } from "../../services/json.js";
import { FaBriefcase } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";

console.log(sidenavs);

function Sidebar() {
  let location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  return (
    <div id="navbox">
      <div id="navhead">
        <div>
          <FaBriefcase style={{ color: "#213F7D", marginTop: 2 }} />
        </div>
        <div>
          <p style={{ color: "#213F7D", fontSize: 14 }}>Switch Organization</p>
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
          <div id="wrap" key={index}>
            {item.child.map((itm, indx) =>
              item.title === null ? (
                <a href={itm.href}>
                  <div onClick={() => navigate(itm.href)} id="navItems2">
                    <div>
                      {
                        <itm.icon
                          style={{
                            color: "#213F7D",
                            marginTop: 2,
                            marginRight: 18,
                            opacity: itm.href === location.pathname ? 0.9 : 0.5,
                          }}
                        />
                      }
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#213F7D",
                          fontSize: 14,
                          opacity: itm.href === location.pathname ? 0.9 : 0.5,
                        }}
                      >
                        {itm.pageName}
                      </p>
                    </div>
                  </div>
                </a>
              ) : itm.href === location.pathname ? (
                <a href={itm.href}>
                  <div id="navItemsActive">
                    <div>
                      {
                        <itm.icon
                          style={{
                            color: "#213F7D",
                            marginTop: 2,
                            marginRight: 18,
                            opacity: itm.href === location.pathname ? 0.9 : 0.5,
                          }}
                        />
                      }
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#213F7D",
                          fontSize: 14,
                          opacity: itm.href === location.pathname ? 0.9 : 0.5,
                        }}
                      >
                        {itm.pageName}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <a href={itm.href}>
                  <div onClick={() => navigate(itm.href)} id="navItems">
                    <div>
                      {
                        <itm.icon
                          style={{
                            color: "#213F7D",
                            marginTop: 2,
                            marginRight: 18,
                            opacity: itm.href === location.pathname ? 0.9 : 0.5,
                          }}
                        />
                      }
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#213F7D",
                          fontSize: 14,
                          opacity: itm.href === location.pathname ? 0.9 : 0.5,
                        }}
                      >
                        {itm.pageName}
                      </p>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default Sidebar;
