import React, { memo } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Info from "../Info/Info";
import Plans from "../Plans/Plans";
import AddOns from "../Add-ons/Add-ons";
import Summary from "../Summary/Summary";
import Finish from "../Finish/Finish";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./form.css";

function Form() {
  return (
    <BrowserRouter>
      <div className="form">
        {" "}
        <Sidebar />{" "}
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/finish" element={<Finish />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default memo(Form);
