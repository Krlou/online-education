import React, { Component } from "react";
import axios from "axios";

import classes from "./LibraryContent.module.css";

import Spinner from "./Spinner";
import TableLink from "./TableLink";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class LibraryContent extends Component {
  state = {
    libraryTable: [],
    loading: true,
  };

  componentDidMount() {
    //get data from server and init libraryTable
    axios
      .get("https://education-25aa0.firebaseio.com/books.json")
      .then((response) => {
        const books = response.data;
        const values = Object.values(books);
        this.setState({ libraryTable: values, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let table = this.state.libraryTable;
    let rows = table.map((item, index) => {
      return (
        <tr key={index}>
          <th style={{ color: "#ff6768", textAlign: "left" }}>{index + 1}</th>
          <td>
            {this.props.isLogged ? (
              <TableLink param={item.title} clicked={this.props.onOpenBook}>
                {item.title}
              </TableLink>
            ) : (
              item.title
            )}
          </td>
          <td>
            {this.props.isLogged ? (
              <TableLink param={item.title} clicked={this.props.onOpenBook}>
                {item.author}
              </TableLink>
            ) : (
              item.author
            )}
          </td>
          <td>
            {this.props.isLogged ? (
              <TableLink param={item.title} clicked={this.props.onOpenBook}>
                {item.course}
              </TableLink>
            ) : (
              item.course
            )}
          </td>
        </tr>
      );
    });

    return this.state.loading ? (
      <Spinner />
    ) : (
      <div
        className={classes.scroll}
        style={{ height: "250px", overflow: "auto" }}
      >
        <table className={classes.table}>
          <thead>
            <tr className={classes.tableHeader}>
              <th style={{ color: "#41bea9" }}>#</th>
              <th style={{ color: "#ff6768" }}>Title</th>
              <th style={{ color: "#ff6768" }}>Author</th>
              <th style={{ color: "#ff6768" }}>Course</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenBook: () => {
      return dispatch({ type: actionTypes.OPEN_BOOK });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryContent);
