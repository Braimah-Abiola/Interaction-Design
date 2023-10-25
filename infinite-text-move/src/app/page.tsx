"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercent = useRef(0);
  const direction = useRef(-1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current;
  };

  return (
    <main className="main">
      <Image src="/images/img.jpg" fill alt="background" />

      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Vogue Magazine -</p>
          <p ref={secondText}>Vogue Magazine -</p>
        </div>
      </div>
    </main>
  );
}
