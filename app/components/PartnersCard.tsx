import Image from "next/image";
import ola from "../content/ola_s Large.png";
import lilinna from "../content/dr lilianna jawburz glowna Large.png";
import bartosz from "../content/mgr bartosz burzynki glowna Large.png";

type PartnersProps = {
  person: string;
};

export const PartnersCard: React.FC<PartnersProps> = (person) => {
  const getPerson = (person: PartnersProps) => {
    switch (person.person) {
      case "ola":
        return ola;
      case "bartosz":
        return bartosz;
      case "lilianna":
        return lilinna;
      default:
        return ola;
    }
  };

  return (
    <div className="w-[365px] h-[456px] bg-white shadow-custom">
      <div className="flex flex-col gap-1 items-start">
        <Image src={getPerson(person)} alt="ola_S" />
        <span className="px-4 text-xl text-black font-bold">Jan Browar</span>
        <span className="px-4 text-xl text-zp-orange-500">
          www.jakasstrona.pl
        </span>
      </div>
    </div>
  );
};
