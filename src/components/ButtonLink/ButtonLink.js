import React, { Component } from "react";
import scrollDown from "./arrowdown.svg";
import './ButtonLink.css';

class ButtonLink extends Component {
  render() {
    return (
      <div className="ButtonLink-Wrapper">
        <a
          className="ButtonLink"
          href="https://github.com/stlajay/gitopenfirms/blob/main/README.md"
        >
          <span> Know More </span>
        </a>
        <div className="Scroll-Down-Wrapper">
          <img className="Scroll-Down" onClick={() => { window.scrollBy({ top: window.innerHeight - 80, left: 0, behavior: "smooth" }); }} src={scrollDown} alt="Scroll Down!" width="64" height="64" />
        </div>
      </div>
    );
  }
}

export default ButtonLink;