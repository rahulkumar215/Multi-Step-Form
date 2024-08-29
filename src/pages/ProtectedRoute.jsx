import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

function ProtectedRoute({ children }) {
  const { hasFirstTimeOpened } = useForm();
  const navigate = useNavigate();

  console.log(hasFirstTimeOpened);

  useEffect(
    function () {
      if (hasFirstTimeOpened) navigate("/");
    },
    [hasFirstTimeOpened]
  );

  return children;
}

export default ProtectedRoute;
