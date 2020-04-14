import React, { Component } from "react";

import Editor from "./Editor";
import PresentationSpinner from "./PresentationSpinner";

import classes from "./CreateBookContent.module.css";

class CreateBookContent extends Component {
  render() {
    return (
      <div className={classes.createBookContent}>
        <PresentationSpinner />
        <div>
          <Editor placeholder="Start adding text, images and videos..." />
        </div>
      </div>
    );
  }
}

export default CreateBookContent;
