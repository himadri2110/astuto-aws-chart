import { iconMapper } from "./../utils/icon.utils";

export const Button = (props) => {
  return <button {...props}>{props.text}</button>;
};

Button.Text = (props) => {
  return (
    <button
      className={`${props.className} flex items-center text-sm gap-1 mt-2`}
    >
      {props?.iconPosition === "left" && <span>{iconMapper[props.icon]}</span>}

      <span>{props.text}</span>

      {props?.iconPosition === "right" && <span>{iconMapper[props.icon]}</span>}
    </button>
  );
};

Button.Text.displayName = "text-button";
