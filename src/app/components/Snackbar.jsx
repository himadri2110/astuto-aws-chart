import { useEffect, useState } from "react";
import { renderUI } from "../utils/ui.utils";
import { useStep } from "../contexts/stepContext";

export const Snackbar = (props) => {
  console.log(props, "snackbar");
  const [showSnackbar, setShowSnackbar] = useState(true);
  const { setCurrentStep } = useStep();

  useEffect(() => {
    setTimeout(() => {
      setShowSnackbar(false);
      setCurrentStep(props?.nextStep);
    }, 2000);
  }, [props?.nextStep, setCurrentStep]);

  return showSnackbar ? (
    <div className={`${props.className} p-4 rounded-lg bg-white`}>
      {props.children.map(renderUI)}
    </div>
  ) : null;
};
