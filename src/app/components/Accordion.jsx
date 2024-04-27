import { useState } from "react";
import { renderUI } from "../utils/ui.utils";
import { Typography } from "./Typography";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { motion } from "framer-motion";

export const Accordion = (props) => {
  const [expandAccordion, setExpandAccordion] = useState(true);

  const accordionQuestion = props?.children.find(
    (child) => child.type === "accordion-question"
  );

  const accordionAnswer = props?.children.find(
    (child) => child.type === "accordion-answer"
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Question */}
      <div
        className="flex items-center gap-2"
        role="button"
        onClick={() => setExpandAccordion((prev) => !prev)}
      >
        <Typography
          {...accordionQuestion}
          className={`${props.className} text-sm text-slate-500 w-max`}
        />

        <div className="connector grow border-t-2 h-1"></div>

        <button>
          {expandAccordion ? (
            <GoChevronUp className="text-slate-400" size={20} />
          ) : (
            <GoChevronDown className="text-slate-400" size={20} />
          )}
        </button>
      </div>

      {/* Answer */}
      {expandAccordion ? (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {accordionAnswer?.children.map(renderUI)}
        </motion.div>
      ) : null}
    </div>
  );
};
