import React, { memo } from "react";
import { ReactComponent as Checked } from "../../assets/images/icon-thank-you.svg";
import "./finish.css";

function Finish() {
  return (
    <div className=" final">
      <div className="container">
        {" "}
        <div className="checked">
          <Checked />
        </div>
        <h1> Thank you!</h1>
        <p>
          {" "}
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
export default memo(Finish);
