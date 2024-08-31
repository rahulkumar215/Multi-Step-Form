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
        path={"/personal-info"}
        heading="YOUR INFO"
        onClick={disableNavLink}
      />
      <Step
        number={2}
        path={"/subscription-plans"}
        heading="SELECT PLAN"
        onClick={disableNavLink}
      />
      <Step
        number={3}
        path={"/add-ons"}
        heading="ADD-ONS"
        onClick={disableNavLink}
      />
      <Step
        number={4}
        path={"/finish-up"}
        heading="SUMMARY"
        onClick={disableNavLink}
      />
    </div>
  );
}

export default Sidebar;
