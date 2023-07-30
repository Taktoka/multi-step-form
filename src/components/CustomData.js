import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
  const [spans, setSpans] = useState([]);
  const [data, setData] = useState([]);
  const [shift, setShift] = useState(false);
  const [val, SetVal] = useState();

  useEffect(() => {
    setSpans(document.querySelectorAll(".num"));
    axios.get("data.json").then((res) => {
      return setData(res.data);
    });
  }, []);

  const hndleClicked = (e) => {
    spans.forEach((span) => {
      if (span.id === e.target.id) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });
  };

  return {
    data,
    hndleClicked,
    shift,
    setShift,
    val,
    SetVal,
  };
};
