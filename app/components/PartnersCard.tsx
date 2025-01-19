import Image from "next/image";
import ola from "../content/ola_s Large.png";
import lilinna from "../content/dr lilianna jawburz glowna Large.png";
import bartoszB from "../content/mgr bartosz burzynki glowna Large.png";
import bartoszK from "../content/mgr karpinski glowna.png";
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
        return bartoszB;
      case "Lilianna Jaworska-Burzyńska":
        return lilinna;
      case "Bartosz Karpiński":
        return bartoszK;
      default:
        return ola;
    }
  };

  return (
    <div className="w-full max-w-[365px] bg-white shadow-custom">
      <div className="flex flex-col gap-1 items-start">
        <Image
          src={getPerson(name)}
          alt="person"
          className="w-full h-auto object-cover aspect-[4/3]"
        />
        <span className="min-h-[40px] md:px-4 text-sm sm:text-base lg:text-xl text-black font-bold">
          {name}
        </span>
        <Link
          href={page}
          target="_blank"
          className="md:px-4 text-xs sm:text-base lg:text-xl text-zp-orange-500"
        >
          {page}
        </Link>
      </div>
    </div>
  );
};
