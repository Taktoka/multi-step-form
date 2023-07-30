import React, { memo } from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list">
        <li>
          <span className="num active" id="1">
            1
          </span>
          <p className="step">
            step 1<span>Your Info</span>
          </p>
        </li>
        <li>
          <span className="num" id="2">
            2
          </span>
          <p className="step">
            step 2<span>Select Plan</span>
          </p>
        </li>
        <li>
          <span className="num" id="3">
            3
          </span>
          <p className="step">
            step 3<span>Add-Ons</span>
          </p>
        </li>
        <li>
          <span className="num" id="4">
            4
          </span>
          <p className="step">
            step 4<span>Summary</span>
          </p>
        </li>
      </ul>
      <ul className="mob-list">
        <li className="num active" id="1">
          1
        </li>
        <li className="num" id="2">
          2
        </li>
        <li className="num " id="3">
          3
        </li>
        <li className="num " id="4">
          4
        </li>
      </ul>
    </div>
  );
}
export default memo(Sidebar);
