import Image from "next/image";
import Cuisine from "./../../../public/assets/cyclorama/cuisine.webp";
import Cuisine2 from "./../../../public/assets/cyclorama/cuisine2.webp";
import Cyclo from "./../../../public/assets/cyclorama/cyclo.webp";
import Maquillage from "./../../../public/assets/cyclorama/poste-maq.webp";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = ({
  galleryContainerRef,
}: {
  galleryContainerRef: React.RefObject<HTMLDivElement>;
}) => {
  useEffect(() => {
    const element = galleryContainerRef.current;

    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );
  }, [galleryContainerRef]);

  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <Image
        src={Cuisine}
        width={300}
        height={300}
        alt="cyclorama cuisine studio"
        className="w-full h-[300px] object-cover cursor-pointer"
      />
      <Image
        src={Cuisine2}
        width={300}
        height={300}
        alt="cyclorama cuisine studio"
        className="w-full h-[300px] object-cover cursor-pointer"
      />
      <Image
        src={Cyclo}
        width={300}
        height={300}
        alt="cyclorama"
        className="w-full h-[300px] object-cover cursor-pointer"
      />
      <Image
        src={Maquillage}
        width={300}
        height={300}
        alt="cyclorama poste de maquillage"
        className="w-full h-[300px] object-cover cursor-pointer"
      />
    </div>
  );
};
