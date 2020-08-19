import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("telmuun@gmail.com");
  const [password, setPassword] = useState("123456");
  const [password2, setPassword2] = useState("123456");
  const [error, setError] = useState(null);
  const signup = () => {
    if (password === password2) {
      props.signupUser(email, password);
    } else setError("Нууц үг таарсангүй!");
  };
  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="orders" />}
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="password"
        placeholder="Confirm password"
        onChange={(e) => setPassword2(e.target.value)}
        value={password2}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {props.errOfRes && <div style={{ color: "red" }}>{props.errOfRes}</div>}
      {props.saving && <Spinner />}
      <Button do={signup} btnType="Success" text="Бүртгүүлэх" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
const mapStateToProps = (state) => {
  return {
    saving: state.authReducer.saving,
    errOfRes: state.authReducer.signupError,
    userId: state.authReducer.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
