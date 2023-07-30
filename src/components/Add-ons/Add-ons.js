import React, { memo, useEffect, useRef, useState } from "react";
import { ReactComponent as Checked } from "../../assets/images/icon-checkmark.svg";
import "./add-ons.css";
import { useData } from "../CustomData";
import { NavLink } from "react-router-dom";

function AddOns() {
  const { data, hndleClicked, val, SetVal } = useData();
  const add_Ons = [];

  const addsRef = useRef([]);

  useEffect(() => {
    if (localStorage.getItem("shift")) {
      SetVal(localStorage.getItem("shift"));
    }
  }, []);

  let clicked = true;
  const selectAdd = (ref) => {
    let addOn = ref.childNodes[1].childNodes[1].innerText;
    let fee = ref.childNodes[2].innerText;

    let item = {
      addOn: addOn,
      fee: fee,
    };

    if (
      ref.classList.contains("active") &&
      ref.childNodes[0].classList.contains("selected")
    ) {
      add_Ons.pop(item);
      localStorage.setItem("addOns", JSON.stringify(add_Ons));
      ref.classList.remove("active");
      ref.childNodes[0].classList.remove("selected");
    } else {
      ref.classList.add("active");
      ref.childNodes[0].classList.add("selected");
      add_Ons.push(item);
      localStorage.setItem("addOns", JSON.stringify(add_Ons));
    }
  };

  return (
    <div className="add-ons">
      <div className="container">
        {" "}
        <h1 className="title">Pick add-ons</h1>
        <p className="desc"> Add-ons help enhance your gaming experience. </p>
        {data.adds_monthly ? (
          <div className={val === "true" ? "monthly" : "hide"}>
            <div
              className="online-serv box"
              ref={(el) => (addsRef.current[0] = el)}
              onClick={(e) => selectAdd(addsRef.current[0])}
            >
              <div className="check">
                <Checked />
              </div>
              <div>
                {" "}
                <h4> {data.adds_monthly[0].service}</h4>
                <p>{data.adds_monthly[0].desc}</p>
              </div>
              <p className="price">{data.adds_monthly[0].fee}</p>
            </div>
            <div
              className="storage box"
              ref={(el) => (addsRef.current[1] = el)}
              onClick={(e) => selectAdd(addsRef.current[1])}
            >
              <div className="check">
                <Checked />
              </div>
              <div>
                {" "}
                <h4>{data.adds_monthly[1].service}</h4>
                <p>{data.adds_monthly[1].desc}</p>
              </div>
              <p className="price">{data.adds_monthly[1].fee}</p>
            </div>
            <div
              className="profile box"
              ref={(el) => (addsRef.current[2] = el)}
              onClick={(e) => selectAdd(addsRef.current[2])}
            >
              <div className="check">
                <Checked />
              </div>
              <div>
                {" "}
                <h4>{data.adds_monthly[2].service}</h4>
                <p>{data.adds_monthly[2].desc}</p>
              </div>
              <p className="price">{data.adds_monthly[2].fee}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {data.adds_yearly ? (
          <div className={val === "false" ? "yearly" : "hide"}>
            <div
              className="online-serv box"
              ref={(el) => (addsRef.current[3] = el)}
              onClick={(e) => selectAdd(addsRef.current[3])}
            >
              <div className="check">
                <Checked />
              </div>
              <div>
                {" "}
                <h4>{data.adds_yearly[0].service}</h4>
                <p>{data.adds_yearly[0].desc}</p>
              </div>
              <p className="price">{data.adds_yearly[0].fee}</p>
            </div>
            <div
              className="storage box"
              ref={(el) => (addsRef.current[4] = el)}
              onClick={(e) => selectAdd(addsRef.current[4])}
            >
              <div className="check">
                <Checked />
              </div>
              <div>
                {" "}
                <h4> {data.adds_yearly[1].service}</h4>
                <p> {data.adds_yearly[1].desc}</p>
              </div>
              <p className="price">{data.adds_yearly[1].fee}</p>
            </div>
            <div
              className="profile box"
              ref={(el) => (addsRef.current[5] = el)}
              onClick={(e) => selectAdd(addsRef.current[5])}
            >
              <div className="check">
                {" "}
                <Checked />
              </div>
              <div>
                {" "}
                <h4>{data.adds_yearly[2].service}</h4>
                <p>{data.adds_yearly[2].desc}</p>
              </div>
              <p className="price">{data.adds_yearly[2].fee}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="actions">
        <button className="back">
          <NavLink to="/plans" id="2" onClick={(e) => hndleClicked(e)}>
            Go Back
          </NavLink>
        </button>
        <button className="next">
          <NavLink id="4" to="/summary" onClick={(e) => hndleClicked(e)}>
            Next Step
          </NavLink>
        </button>
      </div>
    </div>
  );
}
export default memo(AddOns);
