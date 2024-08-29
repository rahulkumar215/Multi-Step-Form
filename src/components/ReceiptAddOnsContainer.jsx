import React from "react";
import styles from "./ReceiptAddOnsContainer.module.scss";
import { useForm } from "../context/FormContext";

function ReceiptAddOnsContainer() {
  const { addOns, multiplier, tag } = useForm();
  return (
    <div className={styles.addOns}>
      {addOns.map((addOn, i) => {
        return (
          <div className={styles.addOn} key={i}>
            <p>{addOn.title}</p>
            <h4>
              +${addOn.price * multiplier}/{tag}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default ReceiptAddOnsContainer;
