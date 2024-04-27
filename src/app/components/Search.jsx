export const Search = (props) => {
  return (
    <input
      type="text"
      placeholder={props.data.placeholder}
      disabled={props.data.disabled}
      className={`${props.className} absolute bottom-8 max-w-full w-[95.5%] outline-transparent border-2 rounded-xl p-4 text-lg sm:w-[90%]`}
    />
  );
};
