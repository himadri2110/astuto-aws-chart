import {
  Choices,
  Search,
  Container,
  Flexbox,
  Typography,
  Avatar,
  Snackbar,
  Accordion,
  Code,
  ChartFooter,
  Button,
  PieChart,
  SankeyChart,
} from "../components";

export const getCurrentStepData = (step, data) => {
  return data.find((item) => item.id === step);
};

export const renderUI = (data) => {
  switch (data?.type) {
    case "choices":
      return <Choices key={data.id} {...data} />;
    case "search":
      return <Search key={data.id} {...data} />;

    case "container":
      return <Container key={data.id} {...data} />;
    case "flexbox":
      return <Flexbox key={data.id} {...data} />;
    case "avatar":
      return <Avatar key={data.id} {...data} />;
    case "text":
      return <Typography key={data.id} {...data} />;
    case "snackbar":
      return <Snackbar key={data.id} {...data} />;
    case "accordion":
      return <Accordion key={data.id} {...data} />;

    case "code":
      return <Code key={data.id} {...data} />;
    case "chart-footer":
      return <ChartFooter key={data.id} {...data} />;

    case "text-button":
      return <Button.Text key={data.id} {...data} />;

    case "pie-chart":
      return <PieChart key={data.id} {...data} />;
    case "sankey-chart":
      return <SankeyChart key={data.id} {...data} />;
    default:
      return null;
  }
};
