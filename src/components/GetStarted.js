import React from "react";

import Button from "./Button";

import classes from "./GetStarted.module.css";

const getStarted = (props) => {
  return (
    <div className={classes.getStarted}>
      <div>
        <p>The book is where the Internet is.</p>
        <p>
          <span style={{ color: "#41bea9" }}>Education </span>is university
          Internet platform,
        </p>
        <p>that enables the creation of e-books.</p>
      </div>
      <Button label="GET STARTED" clicked={props.clicked} />
    </div>
  );
};

export default React.memo(getStarted);
//React.memo for optimization: when parent rerender, getStarted will not rerender.
