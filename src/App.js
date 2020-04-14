import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Contact from "./components/Contact";
import UserHome from "./components/UserHome";

//code splitting: lazy loading
import asyncComponent from "./components/asyncComponent";
const AsyncBookPage = asyncComponent(() => {
  return import("./components/BookPage");
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/book/:title" component={AsyncBookPage} />
          <Route path="/home" component={UserHome} />
        </Switch>
        <Contact />
      </BrowserRouter>
    );
  }
}

export default App;
