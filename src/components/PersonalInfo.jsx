import React from "react";
import styles from "./PersonalInfo.module.scss";
import Button from "./Button";
import { Outlet } from "react-router";

function PersonalInfo() {
  return (
    <div className={styles.personalInfoContainer}>
      <h1>Personal info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>

      <Button path="/subscription-plans" className="btn-prev">
        Go Back
      </Button>

      <Button path="/subscription-plans" className="btn-next">
        Next Step
      </Button>
    </div>
  );
}

export default PersonalInfo;
