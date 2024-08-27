import React from "react";
import styles from "./Sidebar.module.scss";
import Step from "./Step";

function Sidebar() {
  function disableNavLink(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.sidebarContainer}>
      <Step
        number={1}
        onClick={disableNavLink}
        path={"/personal-info"}
        heading="YOUR INFO"
      />
      <Step
        number={2}
        onClick={disableNavLink}
        path={"/subscription-plans"}
        heading="SELECT PLAN"
      />
      <Step
        number={3}
        onClick={disableNavLink}
        path={"/add-ons"}
        heading="ADD-ONS"
      />
      <Step
        number={4}
        onClick={disableNavLink}
        path={"/finish-up"}
        heading="SUMMARY"
      />
    </div>
  );
}

export default Sidebar;
