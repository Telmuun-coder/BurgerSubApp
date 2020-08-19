import React from "react";
import styles from "./style.module.css";

const BurgerControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.orts}</div>
      <button
        disabled={props.dis[props.type]}
        className={styles.Less}
        onClick={() => props.ortsHasah(props.type)}
      >
        Хасах
      </button>
      <button
        className={styles.More}
        onClick={() => props.ortsNemeh(props.type)}
      >
        Нэмэх
      </button>
    </div>
  );
};

export default BurgerControl;
