/* eslint-disable no-unused-vars */
import React, { Children, Component } from "react";
import logo from "../../assets/logo/logo.png";
import "../../index.css";

class CustomLink extends Component {
  render(){
    const path = window.location.pathname
    const { href, children } = this.props;
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href}>{children}</a>
      </li>
    );
  }
}

export class LogoNav extends Component {
  render() {
    return (
      <div className="logoNav">
        <a href="/">
          <img src={logo} alt="logo" width={70} height={70} />
        </a>
        <nav className="navBar">
          <ul className="navLinks">
            <CustomLink href="/new">New</CustomLink>
            <CustomLink href="/used">Used</CustomLink>
            <CustomLink href="/research">Research</CustomLink>
            <CustomLink href="/sell">Sell your car</CustomLink>
          </ul>
        </nav>
      </div>
    );
  }
}