import Image from "next/image";

export const Avatar = (props) => {
  return (
    <Image
      src={props.src}
      alt=""
      width={30}
      height={30}
      className={`${props.className} rounded-md`}
    />
  );
};
