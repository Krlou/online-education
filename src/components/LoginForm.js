import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import classes from "./LoginForm.module.css";

import Input from "./Input";
import Button from "./Button";

import userIcon from "../assets/icons/user-solid.svg";
import passIcon from "../assets/icons/unlock-solid.svg";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class LoginForm extends Component {
  state = {
    loginForm: {
      username: {
        elementType: "input", //onlz if form have other fields then input, this will be in use
        elementConfig: {
          type: "email",
          placeholder: "Enter your email",
          spellCheck: "false",
        },
        value: "",
        validation: {
          require: true,
          isEmail: true,
        },
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter your password",
          spellCheck: "false",
        },
        value: "",
        validation: {
          require: true,
          minLength: 6,
          maxLength: 18,
        },
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  handleSignInClicked = (event) => {
    event.preventDefault();
    //check user inputs
    if (
      this.checkValidity(
        this.state.loginForm.username.value,
        this.state.loginForm.username.validation
      ) &&
      this.checkValidity(
        this.state.loginForm.password.value,
        this.state.loginForm.password.validation
      )
    ) {
      axios
        .post("https://education-25aa0.firebaseio.com/users.json", {
          username: this.state.loginForm.username.value,
          password: this.state.loginForm.password.value,
        })
        .then((response) => {
          //save user info (probably jwt) in localstorage or redux state(if in use)
          const userInfo = {
            firstName: "Luka",
            lastName: "Krsmanovic",
          };
          this.props.onLogin(userInfo);
          this.props.history.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  inputChangedHandler = (event, id) => {
    //save value to loginForm[id].value
    let logForm = { ...this.state.loginForm };
    logForm[id].value = event.target.value;
    this.setState({ loginForm: logForm });
  };

  render() {
    let formElements = [];
    for (let key in this.state.loginForm) {
      formElements.push({ ...this.state.loginForm[key], id: key });
    }
    let icons = [userIcon, passIcon];
    let form = formElements.map((formElem, index) => {
      return (
        <Input
          key={formElem.id}
          src={icons[index]}
          type={formElem.elementConfig.type}
          placeholder={formElem.elementConfig.placeholder}
          spellCheck={formElem.elementConfig.spellCheck}
          value={formElem.value}
          changed={(event) => this.inputChangedHandler(event, formElem.id)}
        />
      );
    });

    return (
      <form className={classes.loginForm}>
        <p className={classes.formHeading}>LOG IN</p>
        {form}
        <Button label="SIGN IN" clicked={this.handleSignInClicked} />
        <p className={classes.signup}>
          Don't have an account?{" "}
          <span onClick={this.props.clicked}>Sign up</span>
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (userInfo) => {
      return dispatch({ type: actionTypes.LOGGED, userInfo: { ...userInfo } });
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
