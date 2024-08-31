import React from "react";
import styles from "./NavButton.module.scss";
import Button from "./Button";

function NavButtons({ data, handleSubmit, handleComplete }) {
  return (
    <div className={styles.navBtnContainer}>
      {data.prevpath ? (
        <Button path={data.prevpath} className="btn-prev">
          Go Back
        </Button>
      ) : (
        ""
      )}

      {data.nextpath ? (
        <Button
          path={data.nextpath}
          className="btn-next"
          onClick={handleSubmit}
        >
          Next Step
        </Button>
      ) : (
        <Button path="/complete" className="btn-next" onClick={handleComplete}>
          Confirm
        </Button>
      )}
    </div>
  );
}

export default NavButtons;
