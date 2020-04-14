import React, { Component } from "react";

import { connect } from "react-redux";

import classes from "./UserHome.module.css";
import UserProfile from "./UserProfile";
import LibraryContent from "./LibraryContent";
import CreateBookContent from "./CreateBookContent";

class UserHome extends Component {
  state = {};

  conditionalShowing = () => {
    let show = this.props.show;
    switch (show) {
      case "create-book":
        return <CreateBookContent />;
      case "library":
        return (
          <React.Fragment>
            <LibraryContent />
            <UserProfile />
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className={classes.userHome}>
        <div className={classes.userHomeContent}>
          {this.conditionalShowing()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    show: state.homePageContent,
  };
};

export default connect(mapStateToProps, null)(UserHome);
