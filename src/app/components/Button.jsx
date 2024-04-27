import { iconMapper } from "./../utils/icon.utils";

export const Button = (props) => {
  return (
    <button {...props} className={`${props.className} px-4 py-3`}>
      {props.text}
    </button>
  );
};

Button.Text = (props) => {
  return (
    <button
      className={`${props.className} flex items-center text-sm gap-1 mt-2 text-green-600`}
    >
      {props?.iconPosition === "left" && <span>{iconMapper[props.icon]}</span>}

      <span>{props?.text}</span>

      {props?.iconPosition === "right" && <span>{iconMapper[props.icon]}</span>}
    </button>
  );
};

Button.Text.displayName = "text-button";
