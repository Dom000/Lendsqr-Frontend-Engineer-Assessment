import React from "react";
import Card from "../../components/cards/Card";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";
import "./user.css";

function Users() {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: 18,
          letterSpacing: 3,
          color: "#213F7D",
          marginBottom: 40,
        }}
      >
        Users
      </p>
      <div id="cardHolder">
        <Card
          icon={<FiUsers style={{ color: "#DF18FF" }} />}
          iconBg={"#e018ff28"}
          title="USERS"
          Subtitle={2000}
        />
        <Card
          icon={<HiOutlineUserGroup style={{ color: "#5718FF" }} />}
          iconBg={"#EEE8FF"}
          title="ACTIVE USERS"
          Subtitle={2000}
        />
        <Card
          icon={<GrDocumentText style={{ color: "#DF18FF" }} />}
          iconBg={"#e018ff28"}
          title="USERS WITH LOANS"
          Subtitle={2000}
        />
        <Card
          icon={<FiUsers style={{ color: "#DF18FF" }} />}
          iconBg={"#e018ff28"}
          title="USERS ITH SAVINGS"
          Subtitle={2000}
        />
      </div>
    </div>
  );
}

export default Users;
