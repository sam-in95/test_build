import React from "react";

import classes from "./Pofol.module.css";

const Pofol = (props) => {
  return (
    <ul className={classes.pofol_wrap}>
      {props.items.map((pofol) => (
        <li
          className={classes.pofol_item}
          key={pofol.id}
          type={pofol.type}
          data-cursor="pofol"
          data-text="view"
          onMouseEnter={(e) => {
            props.cursorData(e.target.dataset.cursor);
            // const cursorData = e.target.dataset.cursor;
            // const cursorText = e.target.dataset.text;
            // console.log(e.target.dataset.cursor, cursorText);
          }}
        >
          {pofol.text}
        </li>
      ))}
    </ul>
  );
};

export default Pofol;
