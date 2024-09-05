import { createContext, useCallback, useContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [runEffect, setRunEffect] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [activeCard, setActiveCard] = useState("Arcade");
  const [hasFirstTimeOpened, setHasFirstTimeOpened] = useState(true);

  const resetState = useCallback(function resetState() {
    setName("");
    setNameError("");
    setEmail("");
    setEmailError("");
    setPhone("");
    setPhoneError("");
    setRunEffect(false);
    setAddOns([]);
    setIsMonthlyPlan(true);
    setActiveCard("Arcade");
    setHasFirstTimeOpened(true);
  }, []);

  const plans = [
    {
      planName: "Arcade",
      price: 9,
    },
    {
      planName: "Advanced",
      price: 12,
    },
    {
      planName: "Pro",
      price: 15,
    },
  ];

  const multiplier = isMonthlyPlan ? 1 : 10;
  const tag = isMonthlyPlan ? "mo" : "yr";

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\+1\s\d{3}\s\d{3}\s\d{3}$/;
    return phonePattern.test(phone);
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-Z\s]*$/;
    return namePattern.test(name);
  };

  const handleSubmitPersonalInfoForm = useCallback(
    function handleSubmitPersonalInfoForm(e) {
      let isValid = true;

      if (name.trim().length === 0) {
        setNameError("This field is required");
        isValid = false;
      } else if (!validateName(name)) {
        setNameError("No special symbols allowed");
        isValid = false;
      } else {
        setNameError("");
      }

      if (email.trim().length === 0) {
        setEmailError("This field is required");
        isValid = false;
      } else if (!validateEmail(email)) {
        setEmailError("Email format is not valid");
        isValid = false;
      } else {
        setEmailError("");
      }

      if (phone.trim().length === 0) {
        setPhoneError("This field is required");
        isValid = false;
      } else if (!validatePhone(phone)) {
        setPhoneError("Number format is not valid");
        isValid = false;
      } else {
        setPhoneError("");
      }

      if (!isValid) {
        e?.preventDefault();
      }

      return isValid;
    },
    [email, name, phone]
  );

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        phone,
        nameError,
        emailError,
        phoneError,
        runEffect,
        isMonthlyPlan,
        activeCard,
        plans,
        multiplier,
        tag,
        addOns,
        hasFirstTimeOpened,
        setHasFirstTimeOpened,
        setAddOns,
        setName,
        setEmail,
        setPhone,
        setNameError,
        setEmailError,
        setPhoneError,
        validateEmail,
        validatePhone,
        handleSubmitPersonalInfoForm,
        setRunEffect,
        setIsMonthlyPlan,
        setActiveCard,
        resetState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("FormContext was used outside of the FormProvider");
  return context;
}

export { FormProvider, useForm };
