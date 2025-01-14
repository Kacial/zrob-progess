import Image from "next/image";
import ola from "../content/ola_s Large.png";
import lilinna from "../content/dr lilianna jawburz glowna Large.png";
import bartosz from "../content/mgr bartosz burzynki glowna Large.png";
import Link from "next/link";

type PartnersProps = {
  name: string;
  page: string;
};

export const PartnersCard: React.FC<PartnersProps> = ({ name, page }) => {
  const getPerson = (name: string) => {
    switch (name) {
      case "Ola Śliwińska":
        return ola;
      case "Bartosz Burzyński":
        return bartosz;
      case "Lilianna Jaworska-Burzyńska":
        return lilinna;
      default:
        return ola;
    }
  };

  return (
    <div className="w-[365px] h-[456px] bg-white shadow-custom">
      <div className="flex flex-col gap-1 items-start">
        <Image src={getPerson(name)} alt="ola_S" />
        <span className="px-4 text-xl text-black font-bold">{name}</span>
        <Link
          href={page}
          target="_blank"
          className="px-4 text-xl text-zp-orange-500"
        >
          {page}
        </Link>
      </div>
    </div>
  );
};
