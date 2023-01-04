import React from "react";
import "./filter.css";

function FilterAction() {
  return (
    <div id="filterBox">
      <div className="innerFt">
        <p>Organization</p>
        <select placeholder="kk" className="selectInpt">
          <option>select</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
      <div className="innerFt">
        <p>Username</p>
        <input
          placeholder="Username"
          type={"text"}
          className="selectInpt inpts"
        />
      </div>
      <div className="innerFt">
        <p>Email</p>
        <input
          placeholder="Email"
          type={"email"}
          className="selectInpt inpts"
        />
      </div>
      <div className="innerFt">
        <p>Date</p>
        <input type={"date"} className="selectInpt inpts" />
      </div>
      <div className="innerFt">
        <p>Phone Number</p>
        <input
          placeholder="Phone Number"
          type={"tel"}
          className="selectInpt inpts"
        />
      </div>

      <div className="innerFt">
        <p>Organization</p>
        <select className="selectInpt">
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
      <div id="btnDiv">
        <button id="btn1Fil">Reset</button>
        <button id="btn2Fil">Filter</button>
      </div>
    </div>
  );
}

export default FilterAction;
