"use client";

import Image from "next/image";
import logo_mix from "../content/logo_mix.png";
import instagram_icon from "@/app/content/ig_logo.svg";
import facebook_icon from "@/app/content/fb_logo.svg";
import Link from "next/link";
import { useTopToolbar } from "@/app/components/Toolbar/utils";
import { useEffect, useMemo } from "react";

export const TopToolbar = () => {
  const {
    lastScrollY,
    isVisible,
    handleScroll,
    handleMouseMove,
    scrollToSection,
  } = useTopToolbar();

  const toolbarClass = useMemo(() => {
    return isVisible
      ? "bg-black flex-row flex items-center justify-between sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out relative"
      : "bg-black flex-row flex items-center justify-between sticky top-0 h-[80px] z-20 transform transition-transform duration-300 ease-in-out -translate-y-full relative";
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
      <Image
        onClick={() => scrollToSection("top_page")}
        src={logo_mix}
        alt={"logo_mix"}
        className={"hidden sm:block scale-50"}
      />
      <div className={"flex flex-row gap-4 md:gap-6 pl-10 pr-2 md:pr-6"}>
        <button
          onClick={() => scrollToSection("top_page")}
          className={"text-zp-orange-500 text-base"}
        >
          {"Strona główna"}
        </button>
        <button
          onClick={() => scrollToSection("offer")}
          className={"text-zp-orange-500 text-base"}
        >
          {"Oferta"}
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={"text-zp-orange-500 text-base"}
        >
          {"Kontakt"}
        </button>
        <Link
          href={"https://www.instagram.com/zrobprogress/"}
          target={"_blank"}
          id={"footer_instagram_link"}
          className={"hidden sm:block"}
        >
          <Image src={instagram_icon} alt={"instagram"} />
        </Link>
        <Link
          href={"https://www.facebook.com/M.RzepkaRzepka"}
          target={"_blank"}
          id={"footer_facebook_link"}
          className={"hidden sm:block"}
        >
          <Image src={facebook_icon} alt={"facebook"} />
        </Link>
      </div>
    </div>
  );
};
