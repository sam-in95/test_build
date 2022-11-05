import React from "react";

import classes from "./BannerStar.module.css";

const BannerStar = () => {
  return (
    <div className={classes.star_wrap}>
      <div className={classes.stars}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div>
    </div>
  );
};

export default BannerStar;
