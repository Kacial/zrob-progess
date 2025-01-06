import Image from "next/image";
import logo_mix from "../content/logo_mix.png";
import instagram_icon from "@/app/content/ig_logo.svg";
import facebook_icon from "@/app/content/fb_logo.svg";

export const TopToolbar = () => {
  return (
    <div
      className={
        "hidden bg-black flex-row lg:flex items-center justify-between"
      }
    >
      <Image src={logo_mix} alt={"logo_mix"} className={"scale-50"} />
      <div className={"flex flex-row gap-6 pr-6"}>
        <span className={"text-zp-orange-500 text-base"}>Strona główna</span>
        <span className={"text-zp-orange-500 text-base"}>O mnie</span>
        <span className={"text-zp-orange-500 text-base"}>Oferta</span>
        <span className={"text-zp-orange-500 text-base"}>Kontakt</span>
        <Image src={instagram_icon} alt={"instagram"} />
        <Image src={facebook_icon} alt={"facebook"} />
      </div>
    </div>
  );
};
