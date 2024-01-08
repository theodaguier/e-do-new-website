import { LazyImageWithCaption } from "../utils/image-lazy-loading";
import { images } from "./data";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image: any, index: any) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => router.push(`/production/project/`)}
        >
          <LazyImageWithCaption
            key={index}
            src={image.img}
            alt={image.alt}
            hovered={true}
            width={1000}
            height={1000}
            placeholderColor="orange"
            title="test"
            year="2023"
          />
        </div>
      ))}
    </div>
  );
}
