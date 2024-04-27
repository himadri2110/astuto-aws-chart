import { Chart } from "react-google-charts";

const colors = [
  "#4f77f0",
  "#a6cee3",
  "#ffbd17",
  "#b2df8a",
  "#33a02c",
  "#fb9a99",
  "#fdbf6f",
  "#ea66e5",
  "#1f78b4",
  "#e22ea3",
  "#d92616",
  "#cab2d6",
  "#8e2edc",
  "#ffff99",
];

const options = {
  sankey: {
    node: {
      colors,
    },
    link: {
      colorMode: "gradient",
      colors: colors,
    },
  },
};

export const SankeyChart = (props) => {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="500px"
      data={props?.children?.data}
      options={options}
    />
  );
};
