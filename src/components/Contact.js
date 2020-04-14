import React, { Component } from "react";

import classes from "./Contact.module.css";

import fbIcon from "../assets/icons/facebook-f-brands.svg";
import igIcon from "../assets/icons/instagram-brands.svg";
import lnIcon from "../assets/icons/linkedin-in-brands.svg";
import twIcon from "../assets/icons/twitter-brands.svg";

import ContactButton from "./ContactButton";

class Contact extends Component {
  handleContactButtonClicked = (id) => {
    switch (id) {
      case "fb":
        return window.open("https://www.facebook.com", "_blank");
      case "tw":
        return window.open("https://www.twitter.com", "_blank");
      case "ig":
        return window.open("https://www.instagram.com", "_blank");
      case "ln":
        return window.open("https://www.linkedin.com", "_blank");
      default:
        return null;
    }
  };

  render() {
    return (
      <div id="contactId" className={classes.contact}>
        <ContactButton
          src={fbIcon}
          clicked={() => this.handleContactButtonClicked("fb")}
        />
        <ContactButton
          src={twIcon}
          clicked={() => this.handleContactButtonClicked("tw")}
        />
        <ContactButton
          src={igIcon}
          clicked={() => this.handleContactButtonClicked("ig")}
        />
        <ContactButton
          src={lnIcon}
          clicked={() => this.handleContactButtonClicked("ln")}
        />
      </div>
    );
  }
}

export default Contact;
