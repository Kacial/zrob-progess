import { TopSection } from "@/app/components/TopSection";
import { FirstChapter } from "@/app/components/FirstChapter";
import { PricingSection } from "@/app/components/PricingSection";
import { PartnersSection } from "@/app/components/PartnersSection";
import { Layout } from "@/app/components/Layout";

export default function Home() {
  return (
    <div className={"w-full bg-white"}>
      <Layout>
        <TopSection />
        <FirstChapter />
        <PricingSection />
        <PartnersSection />
      </Layout>
    </div>
  );
}
