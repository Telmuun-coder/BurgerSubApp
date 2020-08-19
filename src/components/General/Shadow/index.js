import React from "react";
import CSS from "./style.module.css";
const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.togle} className={CSS.Shadow} />
  ) : null;
};

export default Shadow;
