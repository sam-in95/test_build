import React from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  return <h2 className={classes.title}>{props.title}</h2>;
};

export default SectionTitle;
