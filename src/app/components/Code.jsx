export const Code = (props) => {
  return (
    <div
      className={`${props.className} bg-blue-950 text-white p-4 rounded-md whitespace-pre-wrap`}
    >
      {props.text}
    </div>
  );
};
