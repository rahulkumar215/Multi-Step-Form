import styles from "./StepContainer.module.scss";
import { Outlet } from "react-router";
import Complete from "./Complete";

function StepContainer({ data, isComplete }) {
  return (
    <div className={styles.stepContainer}>
      {isComplete && <Complete />}
      {!isComplete && (
        <>
          <h1>{data.h1}</h1>
          <h2>{data.h2}</h2>

          <Outlet />
        </>
      )}
    </div>
  );
}

export default StepContainer;
