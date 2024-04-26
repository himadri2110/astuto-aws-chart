import { renderUI } from "../utils/ui.utils";

export const ChartFooter = (props) => {
  console.log(props, "chart");
  return <div className="">{props?.children.map(renderUI)}</div>;
};
