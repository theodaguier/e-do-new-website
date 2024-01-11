import { LazyImage } from "@/app/utils/image-lazy-loading";
import { images } from "../data";
import Image from "next/image";

export function Gallery() {
  return (
    <>
      {/* Simulez un contenu suffisamment grand pour nécessiter le défilement */}
      {images.map((image, index) => (
        <LazyImage
          key={index}
          src={image.img}
          alt={image.alt}
          width={1000}
          height={1000}
          placeholderColor="orange"
        />
      ))}
    </>
  );
}
