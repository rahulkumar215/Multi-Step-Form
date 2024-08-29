import React from "react";
import styles from "./AddOns.module.scss";
import AddOnInput from "./AddOnInput";

function AddOns() {
  return (
    <div className={`outlet ${styles.addOnsContainer}`}>
      <AddOnInput
        title="Online Service"
        description="Access to multiplayer games"
        price={1}
      />
      <AddOnInput
        title="Large Storage"
        description="Extra 1TB of cloud save"
        price={2}
      />
      <AddOnInput
        title="Customizable profile"
        description="Custom theme on your profile"
        price={2}
      />
    </div>
  );
}

export default AddOns;
