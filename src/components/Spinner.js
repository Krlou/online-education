import React from "react";

import classes from "./Spinner.module.css";

const spinner = () => {
  return <div className={classes.loader}></div>;
};

export default React.memo(spinner);
//React.memo for optimization: when parent rerender, spinner will not rerender.
