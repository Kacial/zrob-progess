import Image from "next/image";
import logoMix from "../content/logo_mix.png";
import instagram_icon from "../content/ig_logo.svg";
import facebook_icon from "../content/fb_logo.svg";
import Link from "next/link";

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
          <span className={"text-md text-white"}>zrob.progres@gmail.com</span>
          <span className={"text-md text-white"}>tel. +48 666 721 048</span>
          <div className={"flex gap-6 flex-row"}>
            <Link
              href={"https://www.instagram.com/zrobprogress/"}
              target={"_blank"}
              id={"footer_instagram_link"}
            >
              <Image src={instagram_icon} alt={"instagram"} />
            </Link>
            <Link
              href={"https://www.facebook.com/M.RzepkaRzepka"}
              target={"_blank"}
              id={"footer_facebook_link"}
            >
              <Image src={facebook_icon} alt={"facebook"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
