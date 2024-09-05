import React from "react";
import styles from "./Step.module.scss";
import { useLocation, useNavigate } from "react-router";

function Step({ number, path, heading }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={styles.stepContainer}
      onClick={() => {
        navigate(path);
      }}
    >
      <span className={`${pathname === path ? "active" : ""} ${styles.link}`}>
        {number}
      </span>
      <p>STEP {number}</p>
      <h3>{heading}</h3>
    </div>
  );
}

export default Step;
