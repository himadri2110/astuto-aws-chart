import React from "react";
import { useStep } from "../contexts/stepContext";
import { Button } from "./Button";

export const Choices = (props) => {
  const { setCurrentStep, setOptionClicked } = useStep();

  return (
    <div className="grid grid-cols-2 gap-4">
      {props.children.map((choice) => (
        <Button
          className={`${choice?.className} p-4 ${
            choice.disabled ? "cursor-not-allowed" : ""
          }`}
          key={choice.id}
          {...choice}
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
            setOptionClicked(true);
          }}
        />
      ))}
    </div>
  );
};
