import React from "react";
import { connect } from "react-redux";

import styles from "./_.module.css";
import BurgerControl from "../BurgerControl";
import * as actions from "../../redux/actions/burgerPageActions";

const BurgerControls = (props) => {
  const dis = { ...props.burgerOrts };
  for (let key in dis) dis[key] = dis[key] <= 0;
  return (
    <div className={styles.BuildControls}>
      <p style={{ fontWeight: "bold" }}>Бүргэрийн үнэ: {props.total}</p>
      <BurgerControl
        dis={dis}
        type="Salad"
        orts="Салад"
        ortsNemeh={props.ortsNem}
        ortsHasah={props.ortsHas}
      />
      <BurgerControl
        dis={dis}
        type="Bacon"
        orts="Гахайн мах"
        ortsNemeh={props.ortsNem}
        ortsHasah={props.ortsHas}
      />
      <BurgerControl
        dis={dis}
        type="Cheese"
        orts="Бяслага"
        ortsNemeh={props.ortsNem}
        ortsHasah={props.ortsHas}
      />
      <BurgerControl
        dis={dis}
        type="Meat"
        orts="Үхрийн мах"
        ortsNemeh={props.ortsNem}
        ortsHasah={props.ortsHas}
      />
      <button
        onClick={props.modalTogle}
        disabled={props.total === 1000 ? true : false}
        className={styles.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    burgerOrts: state.burgerReducer.ingredient,
    total: state.burgerReducer.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ortsNem: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHas: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerControls);
