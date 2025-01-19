import { PartnersCard } from "@/app/components/PartnersCard";

export const PartnersSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <span className="text-4xl md:text-6xl font-bold text-black">
        Nasi partnerzy
      </span>
      <div className="w-auto h-full xl:flex grid grid-cols-2 flex-col gap-5 lg:gap-20 xl:gap-10 lg:flex-row items-center justify-center p-4 lg:p-8">
        <PartnersCard name="Ola Śliwińska" page="https://nafalizdrowia.pl/" />
        <PartnersCard
          name="Lilianna Jaworska-Burzyńska"
          page="https://crburzynscy.pl/"
        />
        <PartnersCard name="Bartosz Burzyński" page="https://crburzynscy.pl/" />
        <PartnersCard name="Bartosz Karpiński" page="https://crburzynscy.pl/" />
      </div>
    </div>
  );
};
