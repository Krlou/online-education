import React from "react";

import NavBar from "./NavBar";
import NavLogo from "./NavLogo";

import classes from "./Header.module.css";

const header = () => {
  return (
    <header className={classes.headerSection}>
      <NavLogo />
      <NavBar />
    </header>
  );
};

export default header;
