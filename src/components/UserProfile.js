import React from "react";

import classes from "./UserProfile.module.css";

import userImg from "../assets/images/user.jpg";

const userProfile = () => {
  return (
    <div className={classes.userProfile}>
      <div>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default React.memo(userProfile);
//React.memo for optimization: when parent rerender, userProfile will not rerender.
