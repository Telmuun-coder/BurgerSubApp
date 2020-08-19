import React, { Fragment } from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/" togle={props.togle}>
            БУРГЕР
          </MenuItem>
          <MenuItem link="/orders" togle={props.togle}>
            Захиалгууд
          </MenuItem>
          <MenuItem link="/logout" togle={props.togle}>
            ГАРАХ
          </MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login" togle={props.togle}>
            НЭВТРЭХ
          </MenuItem>
          <MenuItem link="/signup" togle={props.togle}>
            БҮРТГҮҮЛЭХ
          </MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => ({
  userId: state.authReducer.userId,
});

export default connect(mapStateToProps)(Menu);
