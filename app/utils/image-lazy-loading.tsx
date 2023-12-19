"use client";

import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholderColor: string;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  placeholderColor,
}: LazyImageProps) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (inView && !isImageLoaded) {
      setIsImageLoaded(true);
    }
  }, [inView, isImageLoaded]);

  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        isImageLoaded && "bg-transparent"
      )}
    >
      <div ref={ref} style={{ position: "relative", width, height }}>
        {isImageLoaded ? (
          <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={true}
          />
        ) : (
          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
              placeholderColor,
              isImageLoaded && "opacity-0"
            )}
          />
        )}
      </div>
    </div>
  );
}
