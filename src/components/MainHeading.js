import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./MainHeading.module.css";

import MainHeadingContent from "./MainHeadingContent";

const mainHeading = () => {
  return (
    <div className={classes.mainHeading}>
      <MainHeadingContent />
    </div>
  );
};

export default withRouter(mainHeading);
