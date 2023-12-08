"use client";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { CallToAction } from "@/app/ui/cta";

import { Gallery } from "./gallery";
import { Equipments } from "./equipments";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { useRef } from "react";

const phrase =
  "Laissez libre cours à votre imagination grâce à notre cyclorama. Réalisez vos productions, votre set design et toutes vos idées sur notre fond blanc.";

export default function CycloramaPage() {
  const [scrollY, setScrollY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef(null);

  const container = useRef(null);

  const splitWords = (phrase: string) => {
    let body = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(<p key={word + "_" + i}>{letters}</p>);
    });

    const splitWords = (phrase: string) => {
      let body: JSX.Element[] = [];

      phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word);

        body.push(<p key={word + "_" + i}>{letters}</p>);
      });

      return body;
    };
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          className="font-abc-favorit-regular text-4xl text-blue antialiased"
          ref={(el) => {
            if (el) {
              refs.current.push(el);
            }
          }}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    opacityAnimation();
  }, []);

  const opacityAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

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
            <Model scale={[1.3, 1.3, 1.3]} rotation={[0, scrollY * 0.01, 0]} />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
        <div className="z-50">
          <CallToAction text="Réserver" overlineColor="blue" />
        </div>
      </section>

      <section className="mt-16 mb-16">
        <div ref={body} className={styles.body}>
          {splitWords(phrase)}
        </div>
      </section>
      <section className="h-full bg-white">
        <Gallery />
        <Equipments />
      </section>
    </div>
  );
}
