import { ReactNode } from "react";
import { useStep } from "../contexts/stepContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { optionClicked } = useStep();

  return (
    <main
      className={`min-h-screen max-w-[1300px] my-0 mx-auto overflow-hidden p-8 box-border bg-slate-100 relative ${
        optionClicked ? "" : "flex"
      }`}
    >
      {children}
    </main>
  );
};
