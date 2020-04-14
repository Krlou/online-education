import React, { Component } from "react";

import classes from "./RegistrationForm.module.css";

import Input from "./Input";
import Button from "./Button";

import userIcon from "../assets/icons/user-solid.svg";
import passIcon from "../assets/icons/unlock-solid.svg";
import adrIcon from "../assets/icons/address-card-solid.svg";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class RegistrationForm extends Component {
  state = {
    registrationForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First name",
          spellCheck: "false",
        },
        value: "",
        validation: {
          require: true,
          minLength: 2,
          maxLength: 20,
        },
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last name",
          spellCheck: "false",
        },
        value: "",
        validation: {
          require: true,
          minLength: 2,
          maxLength: 20,
        },
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your E-mail",
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

  handleSignUpClicked = (event) => {
    event.preventDefault();
    //check user inputs
    if (
      this.checkValidity(
        this.state.registrationForm.email.value,
        this.state.registrationForm.email.validation
      ) &&
      this.checkValidity(
        this.state.registrationForm.password.value,
        this.state.registrationForm.password.validation
      ) &&
      this.checkValidity(
        this.state.registrationForm.firstName.value,
        this.state.registrationForm.firstName.validation
      ) &&
      this.checkValidity(
        this.state.registrationForm.lastName.value,
        this.state.registrationForm.lastName.validation
      )
    ) {
      //send data to server and redirect to home
      axios
        .post("https://education-25aa0.firebaseio.com/users.json", {
          email: this.state.registrationForm.email.value,
          password: this.state.registrationForm.password.value,
          firstName: this.state.registrationForm.firstName.value,
          lastName: this.state.registrationForm.lastName.value,
        })
        .then((response) => {
          const userInfo = {
            firstName: this.state.registrationForm.firstName.value,
            lastName: this.state.registrationForm.lastName.value,
          };
          this.props.onRegister(userInfo);
          this.props.history.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  inputChangedHandler = (event, id) => {
    //save value to registrationForm[id].value
    let regForm = { ...this.state.registrationForm };
    regForm[id].value = event.target.value;
    this.setState({ registrationForm: regForm });
  };

  render() {
    let formElements = [];
    for (let key in this.state.registrationForm) {
      formElements.push({ ...this.state.registrationForm[key], id: key });
    }
    let icons = [adrIcon, adrIcon, userIcon, passIcon];
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
      <form className={classes.registerForm}>
        <p className={classes.formHeading}>REGISTER</p>
        {form}
        <Button label="SIGN UP" clicked={this.handleSignUpClicked} />
        <p className={classes.signin}>
          Already have an account?{" "}
          <span onClick={this.props.clicked}>Sign in</span>
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (userInfo) => {
      return dispatch({ type: actionTypes.LOGGED, userInfo: { ...userInfo } });
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(RegistrationForm));
