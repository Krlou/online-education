import React, { Component } from "react";

import NavBarItem from "./NavBarItem";
import Logout from "./Logout";

import classes from "./NavBarItems.module.css";

//redux
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { NavLink } from "react-router-dom";

class NavBarItems extends Component {
  render() {
    return (
      <ul className={classes.navBarItems}>
        {!this.props.isLogged && this.props.showGetStarted ? (
          <NavBarItem clicked={this.props.onGetStartedClicked}>
            GET STARTED
          </NavBarItem>
        ) : null}
        {!this.props.isLogged ? (
          <NavBarItem
            isActive={this.props.libraryIsActive}
            clicked={this.props.onLibraryClicked}
          >
            LIBRARY
          </NavBarItem>
        ) : null}
        {this.props.isLogged ? (
          <NavBarItem
            isActive={this.props.isHome}
            clicked={this.props.onHomeClicked}
          >
            {this.props.isBook ? <NavLink to="/home">HOME</NavLink> : "HOME"}
          </NavBarItem>
        ) : null}
        {this.props.isLogged ? (
          <NavBarItem
            clicked={this.props.onCreateBookClicked}
            isActive={this.props.isCreateBook}
          >
            {this.props.isBook ? (
              <NavLink to="/home">CREATE BOOK</NavLink>
            ) : (
              "CREATE BOOK"
            )}
          </NavBarItem>
        ) : null}
        {this.props.isLogged ? (
          <Logout label="LOGOUT" clicked={this.props.onLogout} />
        ) : null}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showGetStarted: state.showGetStartedNav,
    libraryIsActive: state.libraryIsActive,
    isHome: state.isHome,
    isCreateBook: state.isCreateBook,
    isLogged: state.isLogged,
    isBook: state.isBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLibraryClicked: () => {
      return dispatch({ type: actionTypes.SHOW_LIBRARY });
    },
    onGetStartedClicked: () => {
      return dispatch({ type: actionTypes.HOME });
    },
    onCreateBookClicked: () => {
      return dispatch({ type: actionTypes.CREATE_BOOK });
    },
    onLogout: () => {
      return dispatch({ type: actionTypes.LOGOUT });
    },
    onHomeClicked: () => {
      return dispatch({ type: actionTypes.USER_HOME });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItems);
