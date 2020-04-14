import React from "react";

import classes from "./Book.module.css";

const book = (props) => {
  return (
    <div className={[classes.book, classes.scroll].join(" ")}>
      {props.children}
    </div>
  );
};

export default book;
