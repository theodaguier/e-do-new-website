import Image from "next/image";

import { images } from "./data";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LazyImage from "@/app/utils/image-lazy-loading";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = ({
  galleryContainerRef,
  setIndex,
}: {
  galleryContainerRef: React.RefObject<HTMLDivElement>;
  setIndex: (index: number) => void;
}) => {
  useEffect(() => {
    const element = galleryContainerRef.current;

    gsap.fromTo(
      element,
      {
        y: 100,
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
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-96 w-full overflow-hidden"
          onClick={() => {
            setIndex(index);
          }}
        >
          <LazyImage
            src={image.img.src}
            alt={image.alt}
            width={1000}
            height={500}
            placeholderColor="blue"
          />
        </div>
      ))}
    </div>
  );
};
