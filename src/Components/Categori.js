import React, { useState, useRef } from "react";

import classes from "./Categori.module.css";

const Categori = (props) => {
  const cateType = [
    { text: "ALL", id: "1", type: " " },
    { text: "UI/UX", id: "2", type: "UIUX" },
    { text: "WEB", id: "3", type: "WEB" },
    { text: "ETC", id: "4", type: "ETC" },
  ];

  const [isOn, setIsOn] = useState(false);

  const cateBtn = useRef();

  const filterHandler = (e) => {
    props.filter(e.target.type);
  };

  const alertHandler = (e) => {
    setIsOn(false);
    console.log(isOn);
    cateBtn.className = `${classes.btnOff}`;
    e.target.className = `${classes.btnOn}`;
  };

  return (
    <div className={classes.categori}>
      <ul>
        {cateType.map((cate) => (
          <li
            key={cate.id}
            type={cate.type}
            ref={cateBtn}
            className={cate.text}
            onClick={(e) => {
              filterHandler(e);
              alertHandler(e);
            }}
          >
            {cate.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categori;
