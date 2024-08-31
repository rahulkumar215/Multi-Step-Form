import React, { useEffect, useState } from "react";
import styles from "./StepContainer.module.scss";
import Button from "./Button";
import { Outlet, useNavigate } from "react-router";
import Spinner from "./Spinner";
import { useForm } from "../context/FormContext";
import Complete from "./Complete";

function StepContainer({ data, isLoading, isComplete }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (isComplete) {
    return <Complete />;
  }

  return (
    <div className={styles.stepContainer}>
      {isLoading && <Spinner />}
      {isComplete && <Complete />}
      <h1>{data.h1}</h1>
      <h2>{data.h2}</h2>

      <Outlet />
    </div>
  );
}

export default StepContainer;
