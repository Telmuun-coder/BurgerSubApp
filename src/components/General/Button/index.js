import React from "react";
import css from "./style.module.css";

const Button = (props) => (
  <button onClick={props.do} className={`${css.Button} ${css[props.btnType]}`}>
    {props.text}
  </button>
);

export default Button;
