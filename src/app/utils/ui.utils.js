import { Choices } from "../components/Choices";
import { Search } from "../components/Search";
import { Container } from "../components/Container";
import { Flexbox } from "../components/Flexbox";
import { Typography } from "../components/Typography";
import { Avatar } from "../components/Avatar";
import { Snackbar } from "../components/Snackbar";
import { Accordion } from "../components/Accordion";
import { Code } from "../components/Code";
import { ChartFooter } from "../components/ChartFooter";
import { Button } from "../components/Button";

export const getCurrentStepData = (step, data) => {
  return data.find((item) => item.id === step);
};

export const renderUI = (data) => {
  switch (data.type) {
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
    default:
      return null;
  }
};
