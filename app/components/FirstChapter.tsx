import Image from "next/image";
import maciekBw from "../content/mackie-b&wHQ.png";

export const FirstChapter = () => {
  return (
    <div className={"w-full flex flex-col h-auto"}>
      <div
        className={
          "bg-black flex flex-row items-center justify-between px-10 py-24"
        }
      >
        <span className={"text-5xl text-white font-bold w-1/2"}>O mnie:</span>
        <span className={"text-lg text-white w-1/2"}>
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
      <div className={"relative"}>
        <Image src={maciekBw} alt={"maciekBW"} />
        <span
          className={
            "text-3xl text-white w-2/4 font-bold absolute right-28 bottom-10"
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
