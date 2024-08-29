import React from "react";
import styles from "./ReceiptBasePlanContainer.module.scss";
import { useForm } from "../context/FormContext";
import { NavLink } from "react-router-dom";

function ReceiptBasePlanContainer() {
  const { activeCard, isMonthlyPlan, plans, tag, multiplier } = useForm();
  const totalBasePlan =
    plans.find((plan) => plan.planName === activeCard)?.price * multiplier;

  return (
    <div className={styles.basePlan}>
      <h3>
        {activeCard}({isMonthlyPlan ? "Monthly" : "Yearly"})
      </h3>
      <NavLink to="/subscription-plans" className={styles.link}>
        Change
      </NavLink>
      <h2>
        ${totalBasePlan}/{tag}
      </h2>
    </div>
  );
}

export default ReceiptBasePlanContainer;
