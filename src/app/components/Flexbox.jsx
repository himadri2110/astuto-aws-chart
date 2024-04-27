import { renderUI } from "../utils/ui.utils";

export const Flexbox = (props) => {
  return (
    <div
      className={`${props.className} flex ${
        props.orientation === "column" ? "flex-col" : "flex-row"
      } gap-4 items-center`}
    >
      {props.children.map(renderUI)}
    </div>
  );
};
