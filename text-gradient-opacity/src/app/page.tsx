"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, RefObject, useEffect } from "react";

const phrase =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function Home() {
  const refs: RefObject<HTMLSpanElement>[] = useRef([]);
  const container: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    createAnimation();
  }, []);

  const createAnimation = () => {
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

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
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

  return (
    <main ref={container} className="main">
      <div className="body">{splitWords(phrase)}</div>
    </main>
  );
}
