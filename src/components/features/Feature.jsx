import React from "react";
import styles from "./Feature.module.css";

const Feature = (props) => {
  const { index, title, body } = props.feature;

  return (
    <li className={styles.feature}>
      <div className={styles["number-wrapper"]}>{`0${index}`}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default Feature;
