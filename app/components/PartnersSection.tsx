import { PartnersCard } from "@/app/components/PartnersCard";

export const PartnersSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <span className="text-6xl font-bold text-black">Nasi partnerzy</span>
      <div className="w-full h-full flex flex-row items-center justify-around m-8">
        <PartnersCard person="ola" />
        <PartnersCard person="lilianna" />
        <PartnersCard person="bartosz" />
      </div>
    </div>
  );
};
