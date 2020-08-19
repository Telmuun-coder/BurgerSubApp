import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import { Redirect } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("telmuun@gmail.com");
  const [password, setPassword] = useState("123456");
  const login = () => {
    props.loginUser(email, password);
  };
  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="/orders" />}
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
      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
      <Button do={login} btnType="Success" text="НЭВТРЭХ" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.authReducer.isLogin,
  error: state.authReducer.loginError,
  userId: state.authReducer.userId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
