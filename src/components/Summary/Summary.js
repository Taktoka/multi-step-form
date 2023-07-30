import React, { memo, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./summary.css";
import { useData } from "../CustomData";

function Summary() {
  const { hndleClicked, val, SetVal } = useData();
  let sum = [];
  let item;
  let add_Ons;
  let result = 0;
  let price;
  if (localStorage.getItem("storedItem")) {
    item = JSON.parse(localStorage.getItem("storedItem"));
    price = parseInt(item.fee.replace(/[^0-9]/g, ""));
  }

  if (localStorage.getItem("addOns")) {
    add_Ons = JSON.parse(localStorage.getItem("addOns"));
  }

  useEffect(() => {
    if (localStorage.getItem("shift")) {
      SetVal(localStorage.getItem("shift"));
    }
  }, []);
  for (let i = 0; i < add_Ons.length; i += 1) {}

  const details = add_Ons.map((add, index) => {
    let str = parseInt(add_Ons[index].fee.replace(/[^0-9]/g, ""));
    sum.push(str);
    result += str;

    return (
      <p key={Math.random()}>
        {add.addOn} <span className="add_price">{add.fee}</span>
      </p>
    );
  });

  return (
    <div className="summary ">
      <div className="container">
        {" "}
        <h1 className="title">Finishing up</h1>
        <p className="desc">
          {" "}
          Double-check everything looks OK before confirming.
        </p>
        <div className="details">
          <div className="choosen-plan ">
            <p>
              {item.plan} {val === "true" ? "(monthly)" : "(yearly)"}{" "}
              <span className="price">{item.fee}</span>
            </p>
            <NavLink to="/plans">Change</NavLink>
          </div>
          <div className="choosen-add ">{details}</div>
        </div>
        <div className="total">
          {" "}
          <p className="total desc">
            Total (per {val === "true" ? "month" : "year"}){" "}
          </p>
          <p className="total_price">
            +${result + price}/{val === "true" ? "mo" : "yr"}
          </p>
        </div>
      </div>
      <div className="actions">
        <button className="back">
          <NavLink to="/add-ons" id="3" onClick={hndleClicked}>
            Go Back
          </NavLink>
        </button>
        <button className="confirm">
          <NavLink to="/finish" id="4" onClick={hndleClicked}>
            Confirm
          </NavLink>
        </button>
      </div>
    </div>
  );
}
export default memo(Summary);
