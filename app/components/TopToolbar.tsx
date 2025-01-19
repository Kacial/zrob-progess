"use client";

import Image from "next/image";
import logo_mix from "../content/logo_mix.png";
import instagram_icon from "@/app/content/ig_logo.svg";
import facebook_icon from "@/app/content/fb_logo.svg";
import Link from "next/link";
import { useTopToolbar } from "@/app/components/Toolbar/utils";
import { useEffect, useMemo } from "react";

export const TopToolbar = () => {
  const { lastScrollY, isVisible, handleScroll, handleMouseMove } =
    useTopToolbar();

  const toolbarClass = useMemo(() => {
    return isVisible
      ? "hidden bg-black flex-row md:flex items-center justify-between sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out relative"
      : "hidden bg-black flex-row md:flex items-center justify-between sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out -translate-y-full relative";
  }, [isVisible]);

  // const { width } = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, lastScrollY]);

  return (
    <div className={toolbarClass}>
      <Image src={logo_mix} alt={"logo_mix"} className={"scale-50"} />
      <div className={"flex flex-row gap-4 md:gap-6 pr-2 md:pr-6"}>
        <Link href={"/"} className={"text-zp-orange-500 text-sm md:text-base"}>
          {"Strona główna"}
        </Link>
        <Link
          href={"/about"}
          className={"text-zp-orange-500 text-sm md:text-base"}
        >
          {"O mnie"}
        </Link>
        <Link
          href={"/offer"}
          className={"text-zp-orange-500 text-sm md:text-base"}
        >
          {"Oferta"}
        </Link>
        <Link
          href={"/contact"}
          className={"text-zp-orange-500 text-sm md:text-base"}
        >
          {"Kontakt"}
        </Link>
        <Image src={instagram_icon} alt={"instagram"} />
        <Image src={facebook_icon} alt={"facebook"} />
      </div>
    </div>
  );
};
