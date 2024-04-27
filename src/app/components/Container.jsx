import { renderUI } from "../utils/ui.utils";

export const Container = (props) => {
  const type = props?.subType;

  return (
    <div
      className={`${props?.className} ${
        type === "question" ? "bg-slate-200" : "bg-white"
      } p-4 rounded-lg flex flex-col gap-4`}
    >
      {props?.children.map(renderUI)}
    </div>
  );
};
