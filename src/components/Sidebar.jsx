import React from "react";
import styles from "./Sidebar.module.scss";
import Step from "./Step";

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <Step number={1} path={"/personal-info"} heading="YOUR INFO" />
      <Step number={2} path={"/subscription-plans"} heading="SELECT PLAN" />
      <Step number={3} path={"/add-ons"} heading="ADD-ONS" />
      <Step number={4} path={"/finish-up"} heading="SUMMARY" />
    </div>
  );
}

export default Sidebar;
