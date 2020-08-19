import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HanburgerMenu from "../HanburgerMenu";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <div className={css.HideHan} style={{ height: "100%" }}>
      <HanburgerMenu togleSidebar={props.togleSidebar}></HanburgerMenu>
    </div>
    <Logo></Logo>

    <nav className={css.HideOnMobile}>
      <Menu></Menu>
    </nav>
  </header>
);

export default Toolbar;
