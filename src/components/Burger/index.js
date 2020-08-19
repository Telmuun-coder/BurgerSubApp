import React from "react";
import { connect } from "react-redux";

import BurgerIngrediant from "../BurgerIngrediant";
import styles from "./style.module.css";
import { withRouter } from "react-router-dom";
const Burger = (props) => {
  //Обьектыг массив болгож хувиргаж байна.
  const items = Object.entries(props.ingredient);

  let content = [];

  items.forEach((e) => {
    for (let i = 0; i < e[1]; i++)
      content.push(<BurgerIngrediant key={e[0] + i} type={e[0]} />);
  });

  if (content.length === 0)
    content = <p style={{ fontWeight: "bold" }}>Хачираа сонго мой</p>;
  return (
    <div className={styles.Burger}>
      <BurgerIngrediant type="BreadTop" />
      {content}
      <BurgerIngrediant type="BreadBottom" />
    </div>
  );
};
const mapStatetoProps = (state) => ({
  ingredient: state.burgerReducer.ingredient,
});

export default connect(mapStatetoProps)(withRouter(Burger));
