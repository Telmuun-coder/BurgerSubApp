import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => (
  <li className={css.MenuItem} onClick={props.togle}>
    <NavLink exact={props.exact} activeClassName={css.active} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
