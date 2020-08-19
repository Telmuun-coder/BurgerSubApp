import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Захиалгын үнэ: <strong> {props.data.dun}₮</strong>
      </p>
      <p>
        Орц: <br />
        Гахайн мах: {props.data.orts.Bacon} <br />
        Үхрийн мах: {props.data.orts.Meat} <br />
        Бяслаг: {props.data.orts.Cheese} <br />
        Салад: {props.data.orts.Salad}
      </p>
      <p>{props.data.info.name}</p>
    </div>
  );
};

export default Order;
