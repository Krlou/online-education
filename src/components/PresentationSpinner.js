import React from "react";

import classes from "./PresentationSpinner.module.css";

const presentationSpinner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgArea}>
        <div className={[classes.singleImg, classes.img1].join(" ")}>
          <div>
            Start with{" "}
            <span style={{ color: "#41bea9" }}>typing some text</span> in
            editor.
          </div>
        </div>
        <div className={[classes.singleImg, classes.img2].join(" ")}>
          <div>
            Add <span style={{ color: "#41bea9" }}>images</span>,
            <span style={{ color: "#41bea9" }}> links</span> and{" "}
            <span style={{ color: "#41bea9" }}>videos</span>.
          </div>
        </div>
        <div className={[classes.singleImg, classes.img3].join(" ")}>
          <div>
            Use various <span style={{ color: "#41bea9" }}>fonts</span>,{" "}
            <span style={{ color: "#41bea9" }}>sizes</span>, and{" "}
            <span style={{ color: "#41bea9" }}>styles</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default presentationSpinner;
