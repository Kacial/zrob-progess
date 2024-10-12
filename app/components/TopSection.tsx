import Image from "next/image";
import fotoMain from "../content/Rectangle 1.png";

export const TopSection = () => {
  return (
    <div className={"w-full flex flex-row bg-black "}>
      <div className={"w-1/2"}>
        <Image src={fotoMain} alt={"fotoMain"} />
      </div>
      <div
        className={"w-1/2 flex flex-col items-start justify-center mx-8 gap-6"}
      >
        <span className={"text-4xl font-bold text-white"}>
          Maciej Rzepka - zrób ze mną progres
        </span>
        <div className={"flex flex-row justify-between gap-6"}>
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
