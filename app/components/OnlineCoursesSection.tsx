import Image from "next/image";
import barbellBG from "../content/Rectangle 38.png";
import { CourseCard } from "@/app/components/CourseCard";

export const OnlineCoursesSection = () => {
  return (
    <div className="w-full h-auto relative">
      <Image src={barbellBG} alt="barbellBg" />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute w-full h-full left-1 top-0">
        <div className="w-full h-full flex flex-row items-center justify-around">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};
