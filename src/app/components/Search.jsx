export const Search = (props) => {
  return (
    <input
      type="text"
      placeholder={props.data.placeholder}
      disabled={props.data.disabled}
      className={`${props.className} fixed bottom-8 left-8 right-8 outline-transparent border-2 rounded-xl p-4 text-lg`}
    />
  );
};
