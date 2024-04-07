"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Options } from "@splidejs/splide";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

type ThumbnailProps = {
  url1: string;
  url2: string;
  url3: string;
};

function Thumbnails(props: ThumbnailProps): ReactNode {
  const mainRef = useRef<Splide | null>(null);
  const mainRefMob = useRef<Splide | null>(null);
  const thumbsRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
    if (mainRefMob.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRefMob.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const slides: Slide[] = [
    { src: props.url1, alt: "Slide 1" },
    { src: props.url2, alt: "Slide 2" },
    { src: props.url3, alt: "Slide 3" },
  ];

  const mainOptions: Options = {
    type: "loop",
    label: "thumbnails carousal",
    autoplay: true,
    interval: 3000,
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "30rem",
    width: "40rem",
    arrows: false,
  };

  const thumbsOptions: Options = {
    rewind: true,
    gap: "1rem",
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  return (
    <div className="wrapper">
      <Splide options={mainOptions} ref={mainRef} className="flex">
        {slides.map((slide) => (
          <SplideSlide key={slide.src}>
            <Image
              loading="lazy"
              width={500}
              height={500}
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full overflow-hidden object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>

      <Splide options={thumbsOptions} ref={thumbsRef} className="mt-5">
        {slides.map((slide) => (
          <SplideSlide key={slide.src}>
            <Image
              loading="lazy"
              width={300}
              height={300}
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full overflow-hidden object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Thumbnails;
