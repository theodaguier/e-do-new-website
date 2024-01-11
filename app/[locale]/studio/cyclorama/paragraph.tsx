import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./page.module.scss";

export const Paragraph = ({ phrase }: { phrase: string }) => {
  const body = useRef(null);
  const container = useRef(null);
  const refs = useRef<HTMLSpanElement[]>([]);

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(<p key={word + "_" + i}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          className="font-abc-favorit-regular text-4xl antialiased"
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
    splitWords(phrase);
    opacityAnimation();
  }, []);

  const opacityAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  return (
    <div ref={body} className={styles.body}>
      {splitWords(phrase)}
    </div>
  );
};
