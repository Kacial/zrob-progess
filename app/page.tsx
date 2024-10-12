import Image from "next/image";
import main from "../app/content/main.png";
import main_content from "../app/content/main inside.png";
import { Footer } from "@/app/components/Footer";
import { TopSection } from "@/app/components/TopSection";
import { TopToolbar } from "@/app/components/TopToolbar";
import { FirstChapter } from "@/app/components/FirstChapter";

export default function Home() {
  return (
    <div className={"w-full"}>
      {/*<Image src={main} alt={"general"}/>*/}
      <TopToolbar />
      <TopSection />
      <FirstChapter />
      {/*<Image src={main_content} alt={"inside_content"} />*/}
      <Footer />
    </div>
  );
}
