"use client"

import ShowcaseCard from "@/components/showcase-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ShowcasePage = () => {
  return (
    <section className=" w-full py-20 flex items-center justify-center bg-black h-screen">
      <div className=" w-full relative group">
        <div className="absolute top-0 bottom-0 left-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-l from-black to-transparent" />

        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="px-3 md:px-0">
            <CarouselItem className=" basis-[90%] md:basis-1/4">
              <ShowcaseCard color="#FB3F00" icon="/assets/showcase-icon-1.png" image="/assets/showcase-1.png" video="/videos/showcase-1.mp4" title="Lovi" link="www.lovi.com" />
            </CarouselItem>
            <CarouselItem className=" basis-[90%] md:basis-1/4">
              <ShowcaseCard color="#1500FF" icon="/assets/showcase-icon-2.png" image="/assets/showcase-2.png" video="/videos/showcase-2.mp4" title="Lovi" link="www.lovi.com" />
            </CarouselItem>
            <CarouselItem className=" basis-[90%] md:basis-1/4">
              <ShowcaseCard color="#85C25D" icon="/assets/showcase-icon-3.png" image="/assets/showcase-3.png" video="/videos/showcase-3.mp4" title="Lovi" link="www.lovi.com" />
            </CarouselItem>
            <CarouselItem className=" basis-[90%] md:basis-1/4">
              <ShowcaseCard color="#FF8E1C" icon="/assets/showcase-icon-2.png" image="/assets/showcase-4.png" title="Lovi" link="www.lovi.com" />
            </CarouselItem>
            <CarouselItem className=" basis-[90%] md:basis-1/4">
              <ShowcaseCard color="#4A4A2F" icon="/assets/showcase-icon-1.png" image="/assets/showcase-5.png" title="Lovi" link="www.lovi.com" />
            </CarouselItem>
          </CarouselContent>
          <div className=" opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in pointer-events-none">
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ShowcasePage;