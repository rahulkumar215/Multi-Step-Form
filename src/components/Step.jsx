import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Step.module.scss";

function Step({ number, onClick, path, heading }) {
  return (
    <div className={styles.stepContainer}>
      <NavLink to={path} onClick={onClick} className={styles.link}>
        {number}
      </NavLink>
      <p>STEP {number}</p>
      <h3>{heading}</h3>
    </div>
  );
}

export default Step;
