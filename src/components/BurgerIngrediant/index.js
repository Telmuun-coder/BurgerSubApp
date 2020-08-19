import React from "react";
import Styles from "./style.module.css";
const BurgerIngrediant = (props) => {
  if (props.type === "BreadTop")
    return (
      <div className={Styles.BreadTop}>
        <div className={Styles.Seed}></div>
        <div className={`${Styles.Seed} ${Styles.Second}`}></div>
        <div className={`${Styles.Seed} ${Styles.Third}`}></div>
        <div className={`${Styles.Seed} ${Styles.Fourth}`}></div>
      </div>
    );
  else return <div className={Styles[props.type]}></div>;
};

export default BurgerIngrediant;
