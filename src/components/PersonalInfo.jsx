import React, { useEffect, useState } from "react";
import styles from "./PersonalInfo.module.scss";
import InputContainer from "./InputContainer";
import { useForm } from "../context/FormContext";
// import { useIsMount } from "../hooks/useIsMount";

function PersonalInfo() {
  // const isFirstMount = useIsMount();
  const {
    name,
    email,
    phone,
    nameError,
    emailError,
    phoneError,
    setName,
    setEmail,
    setPhone,
    runEffect,
    handleSubmitPersonalInfoForm,
  } = useForm();

  useEffect(
    function () {
      if (runEffect) {
        handleSubmitPersonalInfoForm();
      }
    },
    [runEffect, name, email, phone]
  );

  return (
    <div className={`outlet ${styles.personalInfoContainer}`}>
      <InputContainer
        type="text"
        id="name"
        label="Name"
        placeholder="e.g. Stephen King"
        value={name}
        setValue={setName}
        error={nameError}
      />
      <InputContainer
        type="email"
        id="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        value={email}
        setValue={setEmail}
        error={emailError}
      />
      <InputContainer
        type=""
        id="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={phone}
        setValue={setPhone}
        error={phoneError}
      />
    </div>
  );
}

export default PersonalInfo;

// {/* <div className={`outlet ${styles.personalInfoContainer}`}>

// <div className={styles.inputContainer}>
//   <label htmlFor="name">Name</label>
//   <span>This field is required</span>
//   <input type="text" id="name" placeholder="e.g. Stephen King" />
// </div>
// <div className={styles.inputContainer}>
//   <label htmlFor="email">Email Address</label>
//   <span>This field is required</span>
//   <input
//     type="email"
//     id="email"
//     placeholder="e.g. stephenking@lorem.com"
//   />
// </div>
// <div className={styles.inputContainer}>
//   <label htmlFor="phone">Phone Number</label>
//   <span>This field is required</span>
//   <input type="" id="phone" placeholder="e.g. +1 234 567 890" />
// </div>
// </div> */}
