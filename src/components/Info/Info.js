import React, { memo, useEffect, useRef, useState } from "react";
import { useData } from "../CustomData";
import { useNavigate } from "react-router-dom";
import "./info.css";

function Info() {
  const { hndleClicked } = useData();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const nameref = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();
  const inputRefs = useRef([]);

  const navigate = useNavigate();

  const seeRef = (ref) => {
    ref.current.style.display = "block";
  };

  const hndleSub = (e) => {
    e.preventDefault();
    if (inputRefs.current[0].value === "") {
      seeRef(nameref);
      inputRefs.current[0].style.borderColor = " hsl(354, 84%, 57%)";
    } else if (inputRefs.current[1].value === "") {
      seeRef(mailRef);
      inputRefs.current[1].style.borderColor = " hsl(354, 84%, 57%)";
    } else if (inputRefs.current[2].value === "") {
      seeRef(phoneRef);
      inputRefs.current[2].style.borderColor = " hsl(354, 84%, 57%)";
    } else {
      navigate("/plans");
      hndleClicked(e);
    }
  };

  return (
    <div className="info ">
      <div className="container">
        {" "}
        <h1 className="title"> Personal info</h1>
        <p className="desc">
          {" "}
          Please provide your name, email address, and phone number.
        </p>
        <form>
          <label htmlFor="name">
            Name
            <label ref={nameref} className=" required ">
              This field is required
            </label>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            title="This field is required"
            type="text"
            id="name"
            placeholder=" e.g. Stephen King"
            ref={(el) => (inputRefs.current[0] = el)}
          />

          <label htmlFor="mail">
            {" "}
            Email Address{" "}
            <label ref={mailRef} className="required">
              This field is required
            </label>
          </label>
          <input
            onChange={(e) => setMail(e.target.value)}
            title="This field is required"
            type="email"
            id="mail"
            placeholder="e.g. stephenking@lorem.com"
            ref={(el) => (inputRefs.current[1] = el)}
          />

          <label htmlFor="phone">
            {" "}
            Phone Number{" "}
            <label ref={phoneRef} className="required ">
              This field is required
            </label>
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            id="phone"
            placeholder=" e.g. +1 234 567 890"
            ref={(el) => (inputRefs.current[2] = el)}
          />
        </form>
      </div>
      <div className="actions">
        <button
          className="next"
          id="2"
          type="submit"
          value="Next Step"
          onClick={hndleSub}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
export default memo(Info);
