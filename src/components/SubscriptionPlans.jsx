import styles from "./SubscriptionPlans.module.scss";
import PlanCard from "./PlanCard";
import { ReactComponent as AracdeIcon } from "../assets/images/icon-arcade.svg";
import Slider from "./Slider";
import { ReactComponent as AdvancedIcon } from "../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../assets/images/icon-pro.svg";
import { useForm } from "../context/FormContext";

function SubscriptionPlans() {
  const { isMonthlyPlan, plans, multiplier } = useForm();

  return (
    <div className={`outlet ${styles.subscriptionPlanContainer}`}>
      <PlanCard
        icon={<AracdeIcon className="plans-icon" />}
        price={plans[0].price * multiplier}
        name="Arcade"
      />
      <PlanCard
        icon={<AdvancedIcon className="plans-icon" />}
        price={plans[1].price * multiplier}
        name="Advanced"
      />
      <PlanCard
        icon={<ProIcon className="plans-icon" />}
        price={plans[2].price * multiplier}
        name="Pro"
      />
      <div className={styles.planTags}>
        <h3 className={isMonthlyPlan ? styles.activePlan : ""}>Monthly</h3>
        <Slider />
        <h3 className={!isMonthlyPlan ? styles.activePlan : ""}>Yearly</h3>
      </div>
    </div>
  );
}

export default SubscriptionPlans;
