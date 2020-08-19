import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import Contact from "../../components/Contact";

const ShippingPage = (props) => {
  const goBack = () => props.history.goBack();
  const showContact = () => {
    props.history.push("/ship/contact");
  };

  return (
    <div className={css.Ship}>
      <div style={{ marginBottom: 30 }}>
        <strong>Захиалгын үнэ: {props.price}₮</strong>
      </div>
      <Burger />
      <Button do={goBack} btnType="Danger" text="ЦУЦЛАХ" />
      <Button do={showContact} btnType="Success" text="ИЛГЭЭХ" />
      <Route path="/ship/contact/">
        <Contact />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
