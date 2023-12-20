"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string | any;
  width: number | string | undefined | any;
  height: number | string | undefined | any;
  placeholderColor: string;
  pointer?: boolean;
  quality?: number;
}

interface LazyImageWithCaptionProps {
  src: string;
  alt: string | any;
  width: number | string | undefined | any;
  height: number | string | undefined | any;
  placeholderColor: string;
  pointer?: boolean;
  hovered?: boolean;
  quality?: number;
  title?: string;
  year?: string;
}

export function LazyImage({
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
        `bg-${placeholderColor}`,
        "w-full",
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

export function LazyImageWithCaption(
  props: LazyImageWithCaptionProps
): JSX.Element {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView && !isImageLoaded) {
      setIsImageLoaded(true);
    }
  }, [inView, isImageLoaded]);

  return (
    <div>
      <div
        ref={ref}
        className={clsx(
          `bg-${props.placeholderColor}`,
          "transition-all duration-300",
          isHovered && `text-orange` // Changez la couleur du texte en orange lorsque l'image est survolée
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="w-full h-full object-cover"
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          priority={true}
          quality={props.quality}
          layout="responsive"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
      <div className="flex justify-between">
        <h3
          className={clsx(
            "font-favorit-mono text-xs uppercase antialiased",
            isHovered && `text-${props.placeholderColor}`
          )}
        >
          {props.title}
        </h3>
        <h3
          className={clsx(
            "font-favorit-mono text-xs uppercase antialiased",
            isHovered && `text-${props.placeholderColor}`
          )}
        >
          {props.year}
        </h3>
      </div>
    </div>
  );
}
