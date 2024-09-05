import React, { useState } from "react";
import styles from "./InputContainer.module.scss";

function InputContainer({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  error,
}) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={`${error ? styles.warning : ""} ${styles.inputContainer}`}>
      <label htmlFor="name">{label}</label>
      <span>{error}</span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputContainer;
