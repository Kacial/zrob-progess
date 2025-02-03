"use client";

import Image from "next/image";
import fotoMain from "../content/MaciekMainHQ.png";
import { useAboutModal } from "@/app/components/utils";
import React from "react";
import { AboutModal } from "@/app/components/AboutChapter/AboutModal";

export const TopSection = () => {
  const { isOpen, openModal, closeModal } = useAboutModal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={"top_page"} className={"relative flex flex-row bg-black"}>
      <Image
        src={fotoMain}
        alt={"fotoMainMobileCovre"}
        className={"block lg:hidden object-cover h-[750px]"}
      />
      <div className={"hidden lg:block w-1/2"}>
        <Image src={fotoMain} alt={"fotoMain"} />
      </div>
      <div
        className={
          "absolute lg:static bottom-10 lg:w-1/2 flex flex-col lg:items-start justify-end lg:justify-center mx-12 gap-6"
        }
      >
        <span className={"text-4xl font-bold text-white"}>
          Maciej Rzepka - zrób ze mną progres
        </span>
        {isOpen && <AboutModal closeModal={() => closeModal()} />}
        <div className={"flex flex-col lg:flex-row justify-between gap-6"}>
          <button
            onClick={() => scrollToSection("contact")}
            className={
              "bg-zp-orange-500 text-white font-bold p-2 w-40 text-center"
            }
          >
            Kontakt
          </button>
          <button
            className={"bg-white text-zp-orange-500 font-bold p-2 w-40"}
            onClick={() => openModal()}
          >
            O mnie
          </button>
        </div>
      </div>
    </div>
  );
};
