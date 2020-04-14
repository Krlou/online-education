import React from "react";

import logo from "../assets/images/logo.png";

import classes from "./MainHeadingLogo.module.css";

const mainHeadingLogo = () => {
  return (
    <div className={classes.headingLogo}>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default React.memo(mainHeadingLogo);
//React.memo for optimization: when parent rerender, mainHeadingLogo will not rerender.
