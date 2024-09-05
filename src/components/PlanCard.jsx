import React from "react";
import styles from "./PlanCard.module.scss";
import { useForm } from "../context/FormContext";

function PlanCard({ icon, price, name }) {
  const { isMonthlyPlan, tag, setActiveCard, activeCard } = useForm();
  return (
    <label
      htmlFor={name.toLowerCase()}
      className={`${styles.planCard} ${
        activeCard === name ? styles.activeCard : ""
      }`}
    >
      <input
        type="radio"
        name="plans"
        id={name.toLowerCase()}
        onClick={() => setActiveCard(name)}
      />
      {icon}
      <h3>{name}</h3>
      <h4>
        ${price}/{tag}
      </h4>
      {!isMonthlyPlan && <h5>2 months free</h5>}
    </label>
  );
}

export default PlanCard;
