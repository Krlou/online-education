import React from "react";

import classes from "./NavBarItem.module.css";

const navBarItem = (props) => {
  return (
    <li
      className={
        props.isActive
          ? [classes.navBarItem, classes.active].join(" ")
          : classes.navBarItem
      }
      onClick={props.clicked}
    >
      {props.children}
    </li>
  );
};

export default navBarItem;
