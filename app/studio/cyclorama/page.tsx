"use client";

import { useState, useEffect } from "react";
import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { CallToAction } from "@/app/ui/cta";

import { Gallery } from "./gallery";
import { Equipments } from "./equipments";

import { useRef } from "react";
import { Paragraph } from "./paragraph";

const phrase =
  "Laissez libre cours à votre imagination grâce à notre cyclorama. Réalisez vos productions, votre set design et toutes vos idées sur notre fond blanc.";

export default function CycloramaPage() {
  const [scrollY, setScrollY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container pt-16 h-full" ref={containerRef}>
      <section className="h-full flex flex-col justify-between py-4">
        <div className="flex gap-8 items-baseline">
          <h1 className="text-6xl font-abc-favorit-regular text-blue">
            Cyclorama /
          </h1>
        </div>
        <p className="flex-1 font-favorit-mono antialiased leading-snug w-80 text-sm mb-16">
          Laissez libre cours à votre imagination grâce à notre cyclorama.{" "}
          Réalisez vos productions, votre set design et toutes vos idées sur
          notre fond blanc.
        </p>

        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -999,
          }}
        >
          <Suspense fallback={null}>
            <Model scale={[1.3, 1.3, 1.3]} rotation={[0, scrollY * 0.009, 0]} />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
        <div className="z-50">
          <CallToAction text="Demander un devis" overlineColor="blue" />
        </div>
      </section>

      <section className="mt-16 mb-16">
        <Paragraph phrase={phrase} />
      </section>
      <section className="w=full h-full bg-white" ref={galleryContainerRef}>
        <Gallery galleryContainerRef={galleryContainerRef} />
        <Equipments />
      </section>
      <section className="h-full">
        <p>
          Ajoutez tous les services dont vous pourriez avoir besoin au niveau de
          la production, photographes, chefs de projet, producteurs, stylistes,
          MUA, assistants de studio, casting et plus encore.
        </p>
      </section>
    </div>
  );
}
