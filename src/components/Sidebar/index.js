import React from "react";
import css from "./style.module.css";
import Shadow from "../General/Shadow";
import Menu from "../Menu";
import Logo from "../Logo";

const Sidebar = (props) => {
  let classes = [css.Sidebar, css.Close];
  if (props.showSidebar) classes = [css.Sidebar, css.Open];
  return (
    <div>
      <Shadow show={props.showSidebar} togle={props.togleSidebar} />
      <div className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu togle={props.togleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
