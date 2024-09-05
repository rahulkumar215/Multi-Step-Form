import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

function ProtectedRoute({ children }) {
  const { hasFirstTimeOpened, setHasFirstTimeOpened } = useForm();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (hasFirstTimeOpened) {
        navigate("/personal-info");
        setHasFirstTimeOpened(false);
      }
    },
    [hasFirstTimeOpened, navigate, setHasFirstTimeOpened]
  );

  return children;
}

export default ProtectedRoute;
