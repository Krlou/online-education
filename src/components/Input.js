import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.formElem}>
      <img src={props.src} alt="" />
      <input
        type={props.type}
        placeholder={props.placeholder}
        spellCheck={props.spellCheck}
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );
};

export default input;
