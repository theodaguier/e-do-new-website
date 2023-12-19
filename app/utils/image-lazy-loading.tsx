"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
    <div ref={ref} className={`bg-${placeholderColor} w-full`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
}
