/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import logo from "../../assets/logo/logo.png";
import '../../index.css'

export class LogoNav extends Component {
  render() {
    return (
      <div className="logoNav">
        <img src={logo} alt="logo" width={70} height={70} />
        <nav className="navBar">
          <ul className="navLinks">
            <li>New</li>
            <li>Used</li>
            <li>Research</li>
            <li>Sell Your Car</li>
          </ul>
        </nav>
      </div>
    );
  }
}
