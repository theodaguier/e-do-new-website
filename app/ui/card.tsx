"use client";

import { LazyImage } from "../utils/image-lazy-loading";
import { useState } from "react";

type MachineCardType = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const MachineCard = ({
  title,
  description,
  image,
  imageAlt,
}: MachineCardType) => {
  const [hovered, setHovered] = useState<Boolean>(false);

  return (
    <div
      className="flex-1 h-full flex flex-col justify-between gap-4 cursor-pointer hover:transition-transform duration-300 ease-in-out hover:-translate-y-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LazyImage
        className="h-full"
        height="500"
        src={image}
        alt={imageAlt}
        style={{
          objectFit: "cover",
        }}
        placeholderColor="blue"
        width="500"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-baseline">
          <h2 className="font-abc-favorit-regular antialiased text-xl">
            {title}
          </h2>
          {hovered && <div className="w-2 h-2 rounded-full bg-blue"></div>}
        </div>
        <p className="font-abc-favorit-regular antialiased text-base text-grey-light">
          {description}
        </p>
      </div>
    </div>
  );
};
