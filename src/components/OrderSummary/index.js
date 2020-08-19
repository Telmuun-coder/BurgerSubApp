import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны бүтээсэн бүргэрийн орц:</p>
      <ul>
        {Object.keys(props.ingredient).map((e) => (
          <li key={props.names[e]}>
            {props.names[e]} : {props.ingredient[e]}
          </li>
        ))}
      </ul>
      <p>
        Захиалгын дүн: <strong>{props.price}₮</strong>
      </p>
      <Button do={props.modalTogle} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button do={props.urgeljluul} btnType="Success" text="ҮРГЭЛЖЛҮҮЛЭХ" />
    </div>
  );
};
const mapStateToprops = (state) => ({
  price: state.burgerReducer.totalPrice,
  ingredient: state.burgerReducer.ingredient,
});

export default connect(mapStateToprops)(OrderSummary);
