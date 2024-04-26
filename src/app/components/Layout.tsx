import { ReactNode } from "react";
import { useStep } from "../contexts/stepContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { optionClicked } = useStep();

  return (
    <main
      className={`min-h-screen p-8 box-border bg-slate-100 ${
        optionClicked ? "" : "flex"
      }`}
    >
      {children}
    </main>
  );
};
