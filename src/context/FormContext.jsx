import { createContext, useContext, useState } from "react";

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

  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [activeCard, setActiveCard] = useState("Arcade");
  const multiplier = isMonthlyPlan ? 1 : 10;
  const tag = isMonthlyPlan ? "mo" : "yr";

  const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const validatePhone = (phone) => {
    return /^\+1\s\d{3}\s\d{3}\s\d{3}$/.test(phone);
  };

  function handleSubmitPersonalInfoForm(e) {
    if (name.trim().length === 0) {
      setNameError("This field is required");
      e?.preventDefault();
    } else {
      setNameError("");
    }

    if (email.trim().length === 0) {
      setEmailError("This field is required");
      e?.preventDefault();
    } else if (!validateEmail(email)) {
      setEmailError("Email format is not valid");
      e?.preventDefault();
    } else {
      setEmailError("");
    }

    if (phone.trim().length === 0) {
      setPhoneError("This field is required");
      e?.preventDefault();
    } else if (!validatePhone(phone)) {
      setPhoneError("Number format is not valid");
      e?.preventDefault();
    } else {
      setPhoneError("");
    }
  }

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
