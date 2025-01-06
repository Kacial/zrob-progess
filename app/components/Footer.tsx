import Image from "next/image";
import logoMix from "../content/logo_mix.png";
import instagram_icon from "../content/ig_logo.svg";
import facebook_icon from "../content/fb_logo.svg";

export const Footer = () => {
  return (
    <div className={"w-full bg-black h-auto flex items-center justify-center "}>
      <div
        className={
          "flex flex-col items-center justify-center gap-6 py-24 px-10"
        }
      >
        <Image src={logoMix} alt={"logo_mix"} className={"scale-100"} />
        <div className={"flex items-center flex-col lg:flex-row gap-5"}>
          <span className={"text-md text-white"}>rzepkaa.maciej@gmail.com</span>
          <span className={"text-md text-white"}>tel. +48 666 041 721</span>
          <div className={"flex gap-6 flex-row"}>
            <Image src={instagram_icon} alt={"instagram"} />
            <Image src={facebook_icon} alt={"facebook"} />
          </div>
        </div>
      </div>
    </div>
  );
};
