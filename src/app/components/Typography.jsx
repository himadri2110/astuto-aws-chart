export const Typography = (props) => {
  console.log(props, "typo");
  return <p className={`${props.className} text-left`}>{props.text}</p>;
};
