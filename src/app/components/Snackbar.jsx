import { useEffect, useState } from "react";
import { renderUI } from "../utils/ui.utils";
import { useStep } from "../contexts/stepContext";
import { motion } from "framer-motion";

export const Snackbar = (props) => {
  const [showSnackbar, setShowSnackbar] = useState(true);
  const { setCurrentStep } = useStep();

  useEffect(() => {
    setTimeout(() => {
      setShowSnackbar(false);
      setCurrentStep(props?.nextStep);
    }, 2000);
  }, [props?.nextStep, setCurrentStep]);

  return showSnackbar ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className={`${props.className} p-4 rounded-lg bg-white`}
    >
      {props.children.map(renderUI)}
    </motion.div>
  ) : null;
};
