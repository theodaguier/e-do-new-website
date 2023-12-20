import { LazyImageWithCaption } from "../utils/image-lazy-loading";
import { images } from "./data";
import { useState } from "react";

export function Gallery() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image: any, index: any) => (
        <div className="" key={index}>
          <LazyImageWithCaption
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
