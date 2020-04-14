import React from "react";

import NavBarItems from "./NavBarItems";

import classes from "./NavBar.module.css";

const navBar = () => {
  return (
    <nav className={classes.navBar}>
      <NavBarItems />
    </nav>
  );
};

export default navBar;
