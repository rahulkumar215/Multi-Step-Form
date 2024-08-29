import React from "react";
import styles from "./Complete.module.scss";
import { ReactComponent as ThankYouIcon } from "../assets/images/icon-thank-you.svg";

function Complete() {
  return (
    <div className={styles.completeContainer}>
      <ThankYouIcon className={styles.thankYouIcon} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Complete;
