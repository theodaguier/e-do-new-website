"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";

import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useEffect, Suspense, useMemo, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";

export const TextAnimation = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const texts = useMemo(
    () => [
      { index: 1, text: "Studio", color: "text-blue" },
      { index: 2, text: "Production", color: "text-pink" },
      { index: 3, text: "Post-production", color: "text-orange" },
    ],
    []
  );
  const indexRef = useRef(0);

  useEffect(() => {
    const textAnimation = gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.1, repeat: -1, repeatDelay: 1 }
    );

    textAnimation.eventCallback("onRepeat", () => {
      indexRef.current = (indexRef.current + 1) % texts.length;
      if (textRef.current) {
        textRef.current.innerHTML = texts[indexRef.current].text;
      }
    });
  }, [texts]);

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999999]"
      )}
    >
      <div
        ref={textRef}
        className={clsx("text-6xl z-99", texts[indexRef.current].color)}
      >
        {texts[0].text}
      </div>
    </div>
  );
};

interface ImageProps {
  url: string;
}

import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

function Image({ url, ...props }: ImageProps) {
  const texture = useLoader(TextureLoader, url);
  const ref = useRef<any>();

  const imagePlane = new PlaneGeometry(1, 1);
  const imageMaterial = new MeshBasicMaterial({ map: texture });

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = 0.5 * Math.sin(clock.getElapsedTime());
      ref.current.rotation.x = 0.5 * Math.cos(clock.getElapsedTime());
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export function Universe() {
  const numStars = 100; // Nombre d'étoiles
  const starFieldRadius = 20; // Rayon de la galaxie

  const urls = useMemo(
    () => [
      "/assets/splash-screen/1.webp",
      "/assets/splash-screen/2.webp",
      "/assets/splash-screen/3.webp",
      "/assets/splash-screen/4.webp",
      "/assets/splash-screen/5.webp",
      "/assets/splash-screen/6.webp",
      "/assets/splash-screen/7.webp",
      "/assets/splash-screen/8.webp",
      "/assets/splash-screen/9.webp",
      "/assets/splash-screen/10.webp",
      "/assets/splash-screen/11.webp",
      "/assets/splash-screen/12.webp",
      "/assets/splash-screen/13.webp",
      "/assets/splash-screen/14.webp",
    ],
    []
  );

  return (
    <Canvas>
      <Suspense fallback={null}>
        {Array.from({ length: numStars }).map((_, i) => {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const radius = Math.sqrt(Math.random()) * starFieldRadius;

          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);

          return (
            <Image key={i} url={urls[i % urls.length]} position={[x, y, z]} />
          );
        })}
      </Suspense>
    </Canvas>
  );
}

export const SplashScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <TextAnimation />
      <Universe />
    </div>
  );
};
