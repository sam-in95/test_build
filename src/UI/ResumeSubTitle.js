import React from "react";

import classes from "./ResumeSubTitle.module.css";

const ResumeSubTitle = (props) => {
  return <p className={classes.subTitle}>{props.subTitle}</p>;
};

export default ResumeSubTitle;
