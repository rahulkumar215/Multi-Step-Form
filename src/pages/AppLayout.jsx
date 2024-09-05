import "./AppLayout.scss";
import Sidebar from "../components/Sidebar";
import StepContainer from "../components/StepContainer";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavButtons from "../components/NavButtons";
import { useForm } from "../context/FormContext";

const data = [
  {
    path: "/personal-info",
    h1: "Personal info",
    h2: "Please provide your name, email address, and phone number.",
    nextpath: "/subscription-plans",
  },
  {
    path: "/subscription-plans",
    h1: "Select your plan",
    h2: "You have the option of monthly or yearly billing.",
    nextpath: "/add-ons",
    prevpath: "/personal-info",
  },
  {
    path: "/add-ons",
    h1: "Pick add-ons",
    h2: "Add-ons help enhance your gaming experience. Online service.",
    nextpath: "/finish-up",
    prevpath: "/subscription-plans",
  },
  {
    path: "/finish-up",
    h1: "Finishing up",
    h2: "Double-check everything looks OK before confirming.",
    prevpath: "/add-ons",
  },
];

function AppLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isComplete, setIsComplete] = useState(false);
  const [renderData, setRenderData] = useState(
    data.filter((obj) => obj.path.includes(pathname))
  );

  const { handleSubmitPersonalInfoForm, setRunEffect, resetState } = useForm();

  useEffect(
    function () {
      setRenderData(data.filter((obj) => obj.path.includes(pathname))[0]);
      if (renderData.path !== "/finish-up" && isComplete) {
        setIsComplete(false);
      }
    },
    [pathname, renderData.path, isComplete]
  );

  function handleSubmit(e) {
    if (renderData.nextpath === "/subscription-plans") {
      handleSubmitPersonalInfoForm(e);
      setRunEffect(true);
    }
  }

  function handleComplete(e) {
    if (!handleSubmitPersonalInfoForm(e)) {
      navigate("/personal-info", { replace: true });
      return;
    }

    e.preventDefault();
    navigate("/finish-up", { replace: true });
    setIsComplete(true);
    setTimeout(() => {
      resetState();
      setRunEffect(false);
    }, 5000);
  }

  return (
    <div className="container">
      <Sidebar />
      <StepContainer data={renderData} isComplete={isComplete} />
      {!isComplete && (
        <NavButtons
          data={renderData}
          handleSubmit={handleSubmit}
          handleComplete={handleComplete}
        />
      )}
    </div>
  );
}

export default AppLayout;
