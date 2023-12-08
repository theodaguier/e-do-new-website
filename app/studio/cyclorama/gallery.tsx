import Image from "next/image";
import Cuisine from "./../../../public/assets/cyclorama/cuisine.webp";
import Cuisine2 from "./../../../public/assets/cyclorama/cuisine2.webp";
import Cyclo from "./../../../public/assets/cyclorama/cyclo.webp";
import Maquillage from "./../../../public/assets/cyclorama/poste-maq.webp";

export const Gallery = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <Image
        src={Cuisine}
        width={300}
        height={300}
        alt="cyclorama cuisine studio"
        className="w-full h-full object-cover"
      />
      <Image
        src={Cuisine2}
        width={300}
        height={300}
        alt="cyclorama cuisine studio"
        className="w-full h-full object-cover"
      />
      <Image
        src={Cyclo}
        width={300}
        height={300}
        alt="cyclorama"
        className="w-full h-full object-cover"
      />
      <Image
        src={Maquillage}
        width={300}
        height={300}
        alt="cyclorama poste de maquillage"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
