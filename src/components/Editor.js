import React, { Component } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css"; //css

import classes from "./Editor.module.css";
import SaveBookForm from "./SaveBookForm";

import axios from "axios";
import Modal from "./Modal";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Editor extends Component {
  state = {
    editorHtml: "",
  };

  handleSaveBookClicked = (event, bookObj) => {
    event.preventDefault();
    //send data to server
    axios
      .post("https://education-25aa0.firebaseio.com/books.json", {
        author:
          this.props.userInfo.firstName + " " + this.props.userInfo.lastName,
        ...bookObj,
        content: this.state.editorHtml,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <ReactQuill
            className={classes.editor}
            theme="snow"
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={".app"}
            placeholder={this.props.placeholder}
          />
          <Modal
            show={this.props.showModal}
            modalClosed={this.props.onBackdropClicked}
          >
            <SaveBookForm clicked={this.handleSaveBookClicked} />
          </Modal>
          <div className={classes.saveButtonContainer}>
            <button
              className={classes.saveButton}
              onClick={this.props.onSaveBook}
            >
              SAVE BOOK
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    showModal: state.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveBook: () => {
      return dispatch({ type: actionTypes.SAVE_BOOK_START });
    },
    onBackdropClicked: () => {
      return dispatch({ type: actionTypes.CLOSE_BACKDROP });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
