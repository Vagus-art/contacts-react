import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const { CNav, CNavMenu, CNavMenuItem, CLink, Brand } = classes;

export default function Navbar() {
  return (
    <div className={CNav}>
      <ul className={CNavMenu}>
        <li className={CNavMenuItem}>
          <Link className={CLink} to="/">
            Home
          </Link>
        </li>
        <li className={CNavMenuItem}>
          <Link className={CLink} to="/about">
            About
          </Link>
        </li>
        <li className={`${CNavMenuItem} ${Brand}`}>
          <Link className={CLink} to="/">
            React-pg-crud
          </Link>
        </li>
      </ul>
    </div>
  );
}
