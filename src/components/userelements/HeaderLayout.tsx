import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { Params, useParams } from "react-router-dom";
import User from "../../pages/user/User";
import "./headerlayout.css";
function Empty() {
  return (
    <div>
      <div>
        <h3></h3>
      </div>
    </div>
  );
}

function HeaderLayout({ user }: any | null) {
  const [activerout, setCctiveRout] = React.useState(1);
  const routs = [
    {
      id: 1,
      link: "General Details",
    },
    {
      id: 2,
      link: "Documents",
    },
    {
      id: 3,
      link: "Bank Details",
    },
    {
      id: 4,
      link: "Loans",
    },
    {
      id: 5,
      link: "Savings",
    },
    {
      id: 6,
      link: "App and System",
    },
  ];

  if (user == "Something went wrong while parsing response JSON") {
    return <Empty />;
  }

  return (
    <div id="header_Box">
      <div id="innerDiv">
        <div id="avatarBox">
          {user?.profile?.avatar !== "" ? (
            <img id="avaPic" src={user?.profile?.avatar} />
          ) : (
            <AiOutlineUser style={{ fontSize: 32 }} />
          )}
        </div>
        <div className="three_">
          <p className="pbold">
            {user?.profile?.firstName + "  " + user?.profile?.lastName}
          </p>
          <p className="psmall">{user?.userName}</p>
        </div>
        <div className="three_">
          <p className="psmall tr">User’s Tier</p>
          <div id="ratings">
            <AiFillStar style={{ color: "#E9B200" }} />
            <AiOutlineStar style={{ color: "#E9B200" }} />
            <AiOutlineStar style={{ color: "#E9B200" }} />
          </div>
        </div>
        <div className="three_">
          <p className="pbold">₦{user?.accountBalance}</p>
          <p className="psmall">{user?.accountNumber}/Providus Bank</p>
        </div>
      </div>
      <div id="routesBox">
        {routs.map((itm, index) => (
          <div
            key={index}
            className={activerout === index + 1 ? "activeRoute" : "routeLinks"}
          >
            <p>{itm.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderLayout;
