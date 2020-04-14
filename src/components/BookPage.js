import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import Book from "./Book";
import Spinner from "./Spinner";

import classes from "./BookPage.module.css";

import { withRouter } from "react-router-dom";

class BookPage extends Component {
  state = {
    book: {},
    isReady: false,
  };

  componentDidMount() {
    axios
      .get("https://education-25aa0.firebaseio.com/books.json")
      .then((response) => {
        const books = response.data;
        const values = Object.values(books);
        let book = null;
        for (let index in values) {
          if (values[index].title === this.props.match.params.title) {
            book = values[index];
            break;
          }
        }
        this.setState({ book: book, isReady: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let show = <Spinner />;
    if (this.state.isReady) {
      show = <Book>{ReactHtmlParser(this.state.book.content)}</Book>;
    }
    return <div className={classes.bookContent}>{show}</div>;
  }
}

export default withRouter(BookPage);
