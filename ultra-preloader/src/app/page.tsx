"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "./components/loader";
import Hero from "./components/hero";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<TimelineMax | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
};

export default Home;
