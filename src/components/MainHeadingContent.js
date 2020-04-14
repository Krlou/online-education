import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MainHeadingLogo from "./MainHeadingLogo";
import GetStarted from "./GetStarted";
import LoginForm from "./LoginForm";

import classes from "./MainHeadingContent.module.css";
import RegistrationForm from "./RegistrationForm";
import LibraryContent from "./LibraryContent";

//redux
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class MainHeadingContent extends Component {
  conditionalShowing = () => {
    let show = this.props.show;
    switch (show) {
      case "get-started":
        return <GetStarted clicked={this.props.onGetStartedClicked} />;
      case "login":
        return <LoginForm clicked={this.props.onSignUpClicked} />;
      case "register":
        return <RegistrationForm clicked={this.props.onGetStartedClicked} />;
      case "library":
        return <LibraryContent />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className={classes.headingContent}>
        {this.conditionalShowing()}
        <MainHeadingLogo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.mainPageContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetStartedClicked: () => {
      return dispatch({ type: actionTypes.GET_STARTED }); //opciono, pored tipa mogu i drugi parametri
    },
    onSignUpClicked: () => {
      return dispatch({ type: actionTypes.SIGN_UP }); //opciono, pored tipa mogu i drugi parametri
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainHeadingContent));
