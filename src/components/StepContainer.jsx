import React, { useEffect, useState } from "react";
import styles from "./StepContainer.module.scss";
import Button from "./Button";
import { Outlet } from "react-router";
import Spinner from "./Spinner";

function StepContainer({ data }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    },
    [data]
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.stepContainer}>
      <h1>{data.h1}</h1>
      <h2>{data.h2}</h2>

      {data.prevpath ? (
        <Button path={data.prevpath} className="btn-prev">
          Go Back
        </Button>
      ) : (
        ""
      )}

      {data.nextpath ? (
        <Button path={data.nextpath} className="btn-next">
          Next Step
        </Button>
      ) : (
        <Button path="/complete" className="btn-next">
          Confirm
        </Button>
      )}
    </div>
  );
}

export default StepContainer;
