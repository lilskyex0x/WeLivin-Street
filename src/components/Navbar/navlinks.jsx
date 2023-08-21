/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { Children, Component } from "react";
import logo from "../../assets/logo/logo.png";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../../index.css";

export const CustomLink = ({ to, children, ...props }) => {
  const resultPath = useResolvedPath(to);
  const isActive = useMatch({ path: resultPath.pathname, end: true})
  
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export class LogoNav extends Component {
  render() {
    return (
      <div className="logoNav">
        <Link to="/">
          <img src={logo} alt="logo" width={70} height={70} />
        </Link>
        <nav className="navBar">
          <ul className="navLinks">
            <CustomLink to="/new">New</CustomLink>
            <CustomLink to="/used">Used</CustomLink>
            <CustomLink to="/research">Research</CustomLink>
            <CustomLink to="/sell">Sell your car</CustomLink>
          </ul>
        </nav>
      </div>
    );
  }
}
