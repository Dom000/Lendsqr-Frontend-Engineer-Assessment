import React, { ReactElement } from "react";
import "./card.css";
import { FiUsers } from "react-icons/fi";

interface card_props {
  icon: ReactElement;
  title: string;
  Subtitle: string | number;
  style?: object;
  iconBg: string;
}

function Card({ icon, title, Subtitle, style, iconBg }: card_props) {
  return (
    <div id="card" style={{ ...style }}>
      <div
        style={{
          background: iconBg,
          padding: 10,
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.5,
        }}
      >
        {icon}
      </div>
      <div id="cardTitle">{title} </div>
      <div id="cardSubtitle">{Subtitle} </div>
    </div>
  );
}

export default Card;
