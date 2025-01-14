import Image from "next/image";
import maciekBw from "../content/mackie-b&wHQ.png";
import maciekMobileBw from "../content/chapterMobileBg.png";

export const FirstChapter = () => {
  return (
    <div className={"w-full flex flex-col h-auto"}>
      <div
        className={
          "bg-black flex flex-col lg:flex-row lg:items-center justify-between px-10 py-24 gap-6"
        }
      >
        <span className={"text-4xl lg:text-5xl text-white font-bold lg:w-1/2"}>
          O mnie:
        </span>
        <span className={"text-sm lg:text-lg text-white lg:w-1/2"}>
          Trener przygotowania motorycznego i terapii ruchowej z ponad 10-letnim
          doświadczeniem oraz absolwent Akademii Wychowania Fizycznego we
          Wrocławiu. Specjalizuję się w kompleksowym podejściu do rozwoju
          fizycznego, łącząc trening motoryczny z terapią ruchową. Współpracuję
          z zespołem wyspecjalizowanych terapeutów, co pozwala nam wspólnie
          planować i realizować spersonalizowane cykle terapeutyczno-ruchowe.
          Dzięki temu mogę skutecznie wspierać moich podopiecznych w osiąganiu
          ich celów zdrowotnych i sportowych.
        </span>
      </div>
      <div className={"h-9 bg-zp-orange-500"}></div>
      <div className={"h-36 bg-white"}></div>
      <div className={"relative flex justify-center"}>
        <Image src={maciekBw} alt={"maciekBW"} className={"hidden md:block"} />
        <Image
          src={maciekMobileBw}
          alt={"maciekMobileBW"}
          className={"block md:hidden"}
        />
        <span
          className={
            "text-2xl lg:text-3xl text-white lg:w-2/4 font-bold absolute lg:right-28 bottom-10 px-10"
          }
        >
          Success is not final, failure is not fatal: it is the courage to
          continue that counts.
        </span>
      </div>
      <div className={"h-24 bg-white"}></div>
    </div>
  );
};
