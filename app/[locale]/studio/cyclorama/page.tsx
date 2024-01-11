"use client";

import { useState, useEffect } from "react";
import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { CallToAction } from "@/app/ui/cta";

import { phrase, infos, dimensions, pricing } from "./data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Gallery } from "./gallery";
import { Equipments } from "./equipments";

import { useRef } from "react";
import { Paragraph } from "./paragraph";

export default function CycloramaPage() {
  const [scrollY, setScrollY] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const equipmenentsContainerRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(-1);

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
    <div className="container h-full flex flex-col gap-16" ref={containerRef}>
      <section className="h-screen flex flex-col justify-between py-4">
        <div className="flex gap-8 items-baseline pt-16">
          <h1 className="text-6xl text-blue font-abc-favorit-regular">
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
      <div className="bg-white flex flex-col gap-16">
        <section className="mt-16 mb-16">
          <Paragraph phrase={phrase} />
        </section>
        <section className="w=full h-full bg-white" ref={galleryContainerRef}>
          <Gallery
            galleryContainerRef={galleryContainerRef}
            setIndex={setIndex}
            index={index}
          />
        </section>
        <section
          className="w=full flex-1 flex flex-col gap-8 bg-white"
          ref={equipmenentsContainerRef}
        >
          <div className="flex flex-1">
            <h2 className="flex-1 text-grey-light">Equipements</h2>
            <Equipments infos={infos} />
          </div>
          <div className="flex flex-1">
            <h2 className="flex-1 text-grey-light">Dimensions</h2>
            <Equipments infos={dimensions} />
          </div>
          <div className="flex flex-1">
            <h2 className="flex-1 text-grey-light">Tarifs</h2>
            <Equipments infos={pricing} />
          </div>
          <div className="flex flex-1">
            <span className="flex-1"></span>
            <p className="flex-1 text-xs">
              * Ajoutez tous les services dont vous pourriez avoir besoin au
              niveau de la production, photographes, chefs de projet,
              producteurs, stylistes, MUA, assistants de studio, casting et plus
              encore.
            </p>
          </div>
        </section>
        <section className="w=full flex-1 flex flex-col text-center gap-4 bg-white">
          <h3 className="text-xl">
            Vous souhaitez plus d&apos;informations sur notre cyclorama ?
          </h3>
          <p className="text-md">
            Téléchargez{" "}
            <a className="text-grey-dark cursor-pointer">notre plaquette</a> ou{" "}
            <a className="text-grey-dark cursor-pointer">contactez-nous</a>.
          </p>
        </section>
      </div>
      <section className="h-[115vh]"></section>
      <section>
        <CallToAction text="Demander un devis" overlineColor="blue" />
      </section>
    </div>
  );
}
