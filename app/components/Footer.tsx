import Image from "next/image";
import logoMix from "../content/logo_mix.png";
import instagram_icon from "../content/ig_logo.svg";
import facebook_icon from "../content/fb_logo.svg";

export const Footer = () => {
  return (
    <div
      className={
        "w-full bg-black md:h-[350px] flex items-center justify-center"
      }
    >
      <div className={"flex flex-col items-center justify-center gap-6"}>
        <Image src={logoMix} alt={"logo_mix"} />
        <div className={"flex items-center flex-row gap-x-6"}>
          <span className={"text-md text-white"}>rzepkaa.maciej@gmail.com</span>
          <span className={"text-md text-white"}>tel. +48 666 041 721</span>
          <Image src={instagram_icon} alt={"instagram"} />
          <Image src={facebook_icon} alt={"facebook"} />
        </div>
      </div>
    </div>
  );
};
