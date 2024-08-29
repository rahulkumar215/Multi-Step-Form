import React from "react";
import styles from "./FinishUp.module.scss";
import { useForm } from "../context/FormContext";
import { NavLink } from "react-router-dom";
import ReceiptBasePlanContainer from "./ReceiptBasePlanContainer";
import ReceiptAddOnsContainer from "./ReceiptAddOnsContainer";
import Total from "./Total";

function FinishUp() {
  const { addOns } = useForm();

  return (
    <div className={`outlet ${styles.finishUpContainer}`}>
      <div className={styles.receiptContainer}>
        <ReceiptBasePlanContainer />
        {addOns.length > 0 && <ReceiptAddOnsContainer />}
      </div>
      <Total />
    </div>
  );
}

export default FinishUp;
