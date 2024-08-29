import React from "react";
import styles from "./Total.module.scss";
import { useForm } from "../context/FormContext";

function Total() {
  const { plans, addOns, isMonthlyPlan, tag, activeCard, multiplier } =
    useForm();

  const activePlan = plans.find((plan) => plan.planName === activeCard);
  const totalAddOns =
    addOns?.reduce((acc, cur) => acc + cur.price, 0) * multiplier;
  const totalBasePlan = activePlan?.price * multiplier;
  const total = totalAddOns + totalBasePlan;
  return (
    <div className={styles.totalContainer}>
      <p>Total (per {isMonthlyPlan ? "month" : "year"})</p>
      <h1>
        +${total}/{tag}
      </h1>
    </div>
  );
}

export default Total;
