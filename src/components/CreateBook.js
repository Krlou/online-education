import React from "react";

import CreateBookContent from "./CreateBookContent";

import classes from "./CreateBook.module.css";

const createBook = () => {
  return (
    <div className={classes.createBook}>
      <CreateBookContent />
    </div>
  );
};

export default createBook;
