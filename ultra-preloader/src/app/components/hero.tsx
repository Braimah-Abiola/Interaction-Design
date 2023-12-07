import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { animateTitle, animateImage, revealMenu } from "../anim";
import Logo from "./logo";

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__top">
        <div data-menu-item data-hidden>
          <Logo />
        </div>
        <span data-menu-item data-hidden>
          about
        </span>
        <span data-menu-item data-hidden>
          contact
        </span>
      </div>

      <h1 className="hero__title">
        <span data-hidden data-title-first>
          Ultra
        </span>
        <span data-hero-line className="hero__line"></span>
        <span data-hidden data-title-last>
          agency
        </span>
      </h1>

      <div className="hero__image">
        <div data-image-overlay className="hero__imageOverlay"></div>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
