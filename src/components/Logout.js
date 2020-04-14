import React, { Component } from "react";

import classes from "./Logout.module.css";
import { NavLink } from "react-router-dom";

class Logout extends Component {
  clearLocalStorage = () => {
    this.props.clicked();
    localStorage.removeItem("state");
  };

  render() {
    return (
      <li className={classes.logoutItem} onClick={this.clearLocalStorage}>
        <NavLink to="/">{this.props.label}</NavLink>
      </li>
    );
  }
}

export default Logout;
