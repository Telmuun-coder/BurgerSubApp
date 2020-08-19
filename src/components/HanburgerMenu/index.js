import React from "react";
import css from "./style.module.css";

const HanburgerMenu = (props) => (
  <div onClick={props.togleSidebar} className={css.Menu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HanburgerMenu;
