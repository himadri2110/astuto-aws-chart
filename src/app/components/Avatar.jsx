import Image from "next/image";

export const Avatar = (props) => {
  return (
    <Image
      src={props.src}
      alt=""
      className={`${props.className} h-5 w-5 rounded-md`}
    />
  );
};
