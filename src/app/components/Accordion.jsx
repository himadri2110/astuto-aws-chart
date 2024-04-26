import { useState } from "react";
import { renderUI } from "../utils/ui.utils";
import { Typography } from "./Typography";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export const Accordion = (props) => {
  const [expandAccordion, setExpandAccordion] = useState(true);

  const accordionQuestion = props?.children.find(
    (child) => child.type === "accordion-question"
  );

  const accordionAnswer = props?.children.find(
    (child) => child.type === "accordion-answer"
  );
  console.log(accordionQuestion, "accordion typo");
  return (
    <div className="flex flex-col gap-4">
      {/* Question */}
      <div className="flex items-center gap-2">
        <Typography
          {...accordionQuestion}
          className={`${props.className} text-sm text-slate-500`}
        />

        <div className="connector grow border-t-2 h-1"></div>

        <button onClick={() => setExpandAccordion((prev) => !prev)}>
          {expandAccordion ? (
            <GoChevronUp className="text-slate-400" size={20} />
          ) : (
            <GoChevronDown className="text-slate-400" size={20} />
          )}
        </button>
      </div>

      {/* Answer */}
      {expandAccordion ? (
        <div>{accordionAnswer?.children.map(renderUI)}</div>
      ) : null}
    </div>
  );
};
