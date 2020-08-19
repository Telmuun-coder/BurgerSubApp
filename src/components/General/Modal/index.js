import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";
const Modal = (props) => (
  <div>
    <Shadow show={props.modal} togle={props.modalTogle} />
    <div
      style={{
        transform: props.modal ? "translateY(0)" : "translateY(100vh)",
        opacity: props.modal ? 1 : 0,
      }}
      className={css.Modal}
    >
      {props.children}
    </div>
  </div>
);

export default Modal;
