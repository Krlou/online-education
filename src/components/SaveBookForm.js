import React, { Component } from "react";

import bookIcon from "../assets/icons/book-solid.svg";
import courseIcon from "../assets/icons/buffer-brands.svg";

import Input from "./Input";
import Button from "./Button";

import classes from "./SaveBookForm.module.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class SaveBookForm extends Component {
  state = {
    bookForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter book title",
          spellCheck: "false",
        },
        value: "",
      },
      course: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter course",
          spellCheck: "false",
        },
        value: "",
      },
    },
  };

  saveBook = (event) => {
    event.preventDefault();
    const bookObj = {
      title: this.state.bookForm.title.value,
      course: this.state.bookForm.course.value,
    };
    this.props.clicked(event, bookObj);
    //redirect to home page
    this.props.onBookSaved();
    this.props.history.push("/home");
  };

  inputChangedHandler = (event, id) => {
    let bookForm = { ...this.state.bookForm };
    bookForm[id].value = event.target.value;
    this.setState({ bookForm: bookForm });
  };

  render() {
    let formElements = [];
    for (let key in this.state.bookForm) {
      formElements.push({ ...this.state.bookForm[key], id: key });
    }
    let icons = [bookIcon, courseIcon];
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
      <form className={classes.saveBookForm}>
        {form}
        <Button label="SAVE BOOK" clicked={this.saveBook} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBookSaved: () => {
      return dispatch({ type: actionTypes.SAVE_BOOK_END });
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(SaveBookForm));
