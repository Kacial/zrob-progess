import { PricingCard } from "@/app/components/PricingCard";

export const PricingSection = () => {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center my-10">
      <span className="text-6xl font-bold text-black">Cennik usług</span>
      <div className="w-full h-full flex flex-col gap-10 lg:flex-row items-center justify-around m-8">
        <PricingCard type={"training"} />
        <PricingCard type={"onlineTraining"} />
      </div>
    </div>
  );
};
