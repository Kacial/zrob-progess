import Image from "next/image";
import fotoMain from "../content/MaciekMainHQ.png";

export const TopSection = () => {
  return (
    <div className={"relative flex flex-row bg-black"}>
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
        <div className={"flex flex-col lg:flex-row justify-between gap-6"}>
          <button className={"bg-zp-orange-500 text-white font-bold p-2 w-40"}>
            Kontakt
          </button>
          <button className={"bg-white text-zp-orange-500 font-bold p-2 w-40"}>
            O mnie
          </button>
        </div>
      </div>
    </div>
  );
};
