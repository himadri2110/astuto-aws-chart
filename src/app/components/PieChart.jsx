import React from "react";
import PieChart, {
  Legend,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";

const customizeText = (arg) => {
  return `${arg?.argumentText} - ${arg?.percentText} (${arg?.valueText})`;
};

const PieChartComponent = (props) => {
  return (
    <PieChart id="pie" palette="Dark Violet" dataSource={props?.children}>
      <Legend
        orientation="horizontal"
        itemTextPosition="right"
        horizontalAlignment="center"
        verticalAlignment="bottom"
        columnCount={4}
        visible={false}
      />

      <Series argumentField="title" valueField="value">
        <Label visible={true} position="columns" customizeText={customizeText}>
          <Font />
          <Connector visible={true} width={0.5} />
        </Label>
      </Series>
    </PieChart>
  );
};

export { PieChartComponent as PieChart };
