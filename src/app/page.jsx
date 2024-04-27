"use client";

import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import uiConfig from "./data/uiConfig.json";
import { getCurrentStepData, renderUI } from "./utils/ui.utils";
import { useStep } from "./contexts/stepContext";

export default function Home() {
  const { currentStep, setCurrentStep } = useStep();

  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    // Filtering out unique steps due to effect running twice causing duplicate data
    const getUniqueSteps = (prev) =>
      new Set([...prev, getCurrentStepData(currentStep, uiConfig.data)]);

    setTotalData((prev) => Array.from(getUniqueSteps(prev)));
  }, [currentStep]);

  useEffect(() => {
    // Show 1st two steps on initial render (search & choices)
    const timerId = setTimeout(() => setCurrentStep((prev) => prev + 1), 1000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const lastItem = totalData[totalData.length - 1];

      if (lastItem?.nextStep) {
        setCurrentStep(lastItem.nextStep);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [totalData, setCurrentStep]);

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [totalData, currentStep]);

  return (
    <Layout>
      <div className="flex flex-col gap-4 mb-24 mt-auto">
        {totalData.map(renderUI)}
      </div>
    </Layout>
  );
}
