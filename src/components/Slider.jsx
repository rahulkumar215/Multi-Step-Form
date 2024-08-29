import styles from "./Slider.module.scss";
import { useForm } from "../context/FormContext";

function Slider() {
  const { isMonthlyPlan, setIsMonthlyPlan } = useForm();

  return (
    <div
      className={styles.sliderContainer}
      onClick={() => setIsMonthlyPlan((prev) => !prev)}
    >
      <span
        className={`${styles.sliderCircle} ${
          isMonthlyPlan ? styles.monthly : styles.yearly
        }`}
      ></span>
    </div>
  );
}

export default Slider;
