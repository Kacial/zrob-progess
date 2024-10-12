import Image from "next/image";
import maciekBw from "../content/mackie-mb&w.png";

export const FirstChapter = () => {
  return (
    <div className={"w-full flex flex-col h-auto"}>
      <div
        className={
          "bg-black flex flex-row items-center justify-between px-10 py-24"
        }
      >
        <span className={"text-5xl text-white font-bold w-1/2"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <span className={"text-lg text-white w-1/2"}>
          Lorem ipsum dolor sit amet consectetur. Pharetra mauris duis augue
          suspendisse sem turpis. Erat pulvinar ut natoque tincidunt quam semper
          consectetur commodo diam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris mattis lectus a mauris dictum eleifend. Etiam
          commodo diam orci, vitae convallis tellus ultricies sit amet. Sed eget
          augue at metus euismod ultrices. Donec rutrum euismod purus, eu
          fermentum tortor mattis sit amet.
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
          Droga samuraja to długa i ciężka droga. Wiele kamieni na niej. Mało
          napojów na niej. I mało przepaści. Ale dużo schodów.
        </span>
      </div>
      <div className={"h-24 bg-white"}></div>
    </div>
  );
};
