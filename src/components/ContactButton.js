import React from "react";

import classes from "./ContactButton.module.css";

const contactButton = (props) => {
  return (
    <div className={classes.contactButton} onClick={props.clicked}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default contactButton;
