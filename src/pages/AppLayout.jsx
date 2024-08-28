import "./AppLayout.scss";
import Sidebar from "../components/Sidebar";
import StepContainer from "../components/StepContainer";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

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

  const [renderData, setRenderData] = useState(
    data.filter((obj) => obj.path.includes(pathname))
  );

  useEffect(
    function () {
      setRenderData(data.filter((obj) => obj.path.includes(pathname))[0]);
    },
    [pathname]
  );

  return (
    <div className="container">
      <Sidebar />
      <StepContainer data={renderData} />
    </div>
  );
}

export default AppLayout;
