import React, { memo, useEffect, useRef, useState } from "react";
import "./plans.css";
import { ReactComponent as Arcade } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as Advanced } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as Pro } from "../../assets/images/icon-pro.svg";
import { useData } from "../CustomData";
import { NavLink } from "react-router-dom";

function Plans() {
  const { data, hndleClicked, val, SetVal } = useData();
  const [shift, setShift] = useState(false);

  const shiftRef = useRef();
  const mainRef = useRef();
  const divRefs = useRef([]);

  useEffect(() => {
    setShift(!shift);
    if (localStorage.getItem("shift")) {
      SetVal(localStorage.getItem("shift"));
    }
  }, []);

  function hndleShift() {
    setShift((shift) => !shift);

    shift
      ? (shiftRef.current.style.left = "12px")
      : (shiftRef.current.style.left = "2px");
  }
  localStorage.setItem("shift", shift);

  const hndleBox = (e) => {
    const refArray = divRefs.current;
    refArray.map((_, index) => {
      refArray[index].classList.remove("active");
    });
    e.classList.add("active");
    let plan = e.classList[0];
    let fee = e.childNodes[1].childNodes[1].innerText;
    const storedItem = {
      plan: plan,
      fee: fee,
    };

    localStorage.setItem("storedItem", JSON.stringify(storedItem));
  };

  return (
    <div className="plans">
      <div className="container">
        {" "}
        <h1 className="title">Select your plan</h1>
        <p className="desc">
          {" "}
          You have the option of monthly or yearly billing.
        </p>
        <div className="contents">
          {" "}
          {data.monthly ? (
            <div
              className="monthly"
              style={shift === true ? { display: "flex" } : { display: "none" }}
            >
              <div
                className="arcade box"
                id="0"
                ref={(el) => (divRefs.current[0] = el)}
                onClick={(e) => hndleBox(divRefs.current[0])}
              >
                <Arcade />
                <p className="type">
                  {data.monthly[0].type}
                  <span className="fee">{data.monthly[0].fee}</span>
                </p>
              </div>
              <div
                className="advanced box"
                id="1"
                ref={(el) => (divRefs.current[1] = el)}
                onClick={(e) => hndleBox(divRefs.current[1])}
              >
                <Advanced />
                <p className="type">
                  {data.monthly[1].type}
                  <span className="fee">{data.monthly[1].fee}</span>
                </p>
              </div>
              <div
                className="pro box"
                id="2"
                ref={(el) => (divRefs.current[2] = el)}
                onClick={(e) => hndleBox(divRefs.current[2])}
              >
                <Pro />
                <p className="type">
                  {data.monthly[2].type}
                  <span className="fee">{data.monthly[2].fee}</span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {data.yearly ? (
            <div
              className="yearly"
              style={
                shift === false ? { display: "flex" } : { display: "none" }
              }
            >
              <div
                className="arcade box"
                id="3"
                ref={(el) => (divRefs.current[3] = el)}
                onClick={(e) => hndleBox(divRefs.current[3])}
              >
                <Arcade />
                <p className="type">
                  {data.yearly[0].type}
                  <span className="fee">{data.yearly[0].fee}</span>
                  <span className="offer">{data.yearly[0].offer}</span>
                </p>
              </div>
              <div
                className="advanced box"
                id="4"
                ref={(el) => (divRefs.current[4] = el)}
                onClick={(e) => hndleBox(divRefs.current[4])}
              >
                <Advanced />
                <p className="type">
                  {data.yearly[1].type}
                  <span className="fee">{data.yearly[1].fee}</span>
                  <span className="offer">{data.yearly[1].offer} </span>
                </p>
              </div>
              <div
                className="pro box"
                id="5"
                ref={(el) => (divRefs.current[5] = el)}
                onClick={(e) => hndleBox(divRefs.current[5])}
              >
                <Pro />
                <p className="type">
                  {data.yearly[2].type}
                  <span className="fee">{data.yearly[2].fee}</span>
                  <span className="offer">{data.yearly[2].offer}</span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="shift">
            <p
              className="m"
              style={
                shift === false
                  ? { color: "hsl(231, 11%, 63%)" }
                  : { color: "hsl(213, 96%, 18%)" }
              }
            >
              Monthly
            </p>
            <div className="dot" ref={mainRef} onClick={hndleShift}>
              <span ref={shiftRef}></span>
            </div>
            <p
              className="y"
              style={
                shift === true
                  ? { color: "hsl(231, 11%, 63%)" }
                  : { color: "hsl(213, 96%, 18%)" }
              }
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="back">
          <NavLink to="/" id="1" onClick={(e) => hndleClicked(e)}>
            Go Back
          </NavLink>
        </button>
        <button className="next">
          <NavLink id="3" to="/add-ons" onClick={(e) => hndleClicked(e)}>
            Next Step
          </NavLink>
        </button>
      </div>
    </div>
  );
}
export default memo(Plans);
