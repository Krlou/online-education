import React from "react";

import classes from "./TableLink.module.css";

const tableLink = (props) => {
  return (
    <a
      className={classes.tableLink}
      href={`/book/${props.param}`}
      onClick={props.clicked}
    >
      {props.children}
    </a>
  );
};

export default tableLink;
