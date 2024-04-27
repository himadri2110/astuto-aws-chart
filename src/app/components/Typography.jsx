export const Typography = (props) => {
  console.log(props, "typo");
  return <p className={`${props.className} w-full`}>{props.text}</p>;
};
