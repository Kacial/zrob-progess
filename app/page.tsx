import { Footer } from "@/app/components/Footer";
import { TopSection } from "@/app/components/TopSection";
import { TopToolbar } from "@/app/components/TopToolbar";
import { FirstChapter } from "@/app/components/FirstChapter";
import { OnlineCoursesSection } from "@/app/components/OnlineCoursesSection";
import { PricingSection } from "@/app/components/PricingSection";
import { PartnersSection } from "@/app/components/PartnersSection";

export default function Home() {
  return (
    <div className={"w-full"}>
      <TopToolbar />
      <TopSection />
      <FirstChapter />
      <OnlineCoursesSection />
      <PricingSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
