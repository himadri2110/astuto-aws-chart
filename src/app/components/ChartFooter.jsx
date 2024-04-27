import { renderUI } from "../utils/ui.utils";

export const ChartFooter = (props) => {
  return <div className="">{props?.children.map(renderUI)}</div>;
};
