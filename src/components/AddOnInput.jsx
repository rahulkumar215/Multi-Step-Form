import React from "react";
import styles from "./AddOnInput.module.scss";
import { useForm } from "../context/FormContext";
import { ReactComponent as CheckIcon } from "../assets/images/icon-checkmark.svg";

function AddOnInput({ title, description, price }) {
  const { multiplier, tag, addOns, setAddOns } = useForm();

  const isChecked = addOns.some((addOn) => addOn.title === title);

  const handleCheckboxChange = () => {
    setAddOns((prev) => {
      if (prev.some((addOn) => addOn.title === title)) {
        // If already checked, remove the add-on
        return prev.filter((addOn) => addOn.title !== title);
      } else {
        // If not checked, add the add-on
        return [...prev, { title, price }];
      }
    });
  };

  return (
    <label
      htmlFor={title}
      className={`${styles.addOnInput} ${isChecked ? styles.checked : ""}`}
    >
      <input
        type="checkbox"
        id={title}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className={styles.addOnIconContainer}>
        <CheckIcon className={styles.addOnIcon} />
      </div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>
        +${price * multiplier}/{tag}
      </p>
    </label>
  );
}

export default AddOnInput;
