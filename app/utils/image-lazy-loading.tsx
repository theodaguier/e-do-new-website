"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string | any;
  width: number | string | undefined | any;
  height: number | string | undefined | any;
  placeholderColor: string;
  onClick?: () => void;
  pointer?: boolean;
  quality?: number;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  placeholderColor,
  pointer = false,
  quality = 100,
}: LazyImageProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (inView && !isImageLoaded) {
      setIsImageLoaded(true);
    }
  }, [inView, isImageLoaded]);

  return (
    <div
      ref={ref}
      className={clsx(
        `bg-${placeholderColor} w-full`,
        "relative",
        "w-full",
        "h-full",
        "overflow-hidden",
        pointer && "cursor-pointer"
      )}
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
        quality={quality}
        layout="responsive"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
}
