import React from "react";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";

function Button({ path, className, children, onClick }) {
  return (
    <NavLink
      to={path}
      className={`${styles.btn} ${styles[className]}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default Button;
