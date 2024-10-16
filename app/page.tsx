import { Footer } from "@/app/components/Footer";
import { TopSection } from "@/app/components/TopSection";
import { TopToolbar } from "@/app/components/TopToolbar";
import { FirstChapter } from "@/app/components/FirstChapter";

export default function Home() {
  return (
    <div className={"w-full"}>
      <TopToolbar />
      <TopSection />
      <FirstChapter />
      <Footer />
    </div>
  );
}
