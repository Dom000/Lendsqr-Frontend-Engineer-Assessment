import React, { ReactEventHandler } from "react";
import "./actiontab.css";
import { AiOutlineEye } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";

interface actions_ {
  onClick: ReactEventHandler;
  onClick2?: ReactEventHandler;
  onClick3?: ReactEventHandler;
  onDismiss?: ReactEventHandler;
}

function ActionTab({ onClick, onClick2, onClick3, onDismiss }: actions_) {
  return (
    <div onMouseOut={onDismiss} id="actionbox">
      <div onClick={onClick} className="actionflex">
        <AiOutlineEye style={{ marginTop: 5 }} />
        <p>View Details</p>
      </div>
      <div onClick={onClick2} className="actionflex">
        <BiUserPlus style={{ marginTop: 5 }} />
        <p>Blacklist User</p>
      </div>
      <div onClick={onClick3} className="actionflex">
        <FiUserCheck style={{ marginTop: 5 }} />
        <p>Activate User</p>
      </div>
    </div>
  );
}

export default ActionTab;
