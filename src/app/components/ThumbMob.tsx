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

export default function ThumbMob(props: ThumbnailProps): ReactNode {
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
    label: "thumb mobile carousal",
    type: "loop",
    autoplay: true,
    interval: 3000,
    perPage: 1,
    perMove: 1,
    gap: "0.5rem",
    pagination: false,
    arrows: false,
    padding: "0rem",
  };

  return (
    <div className="wrapper mx-auto">
      <Splide options={mainOptions} ref={mainRef} className="flex ">
        {slides.map((slide) => (
          <SplideSlide key={slide.src}>
            <Image
              loading="lazy"
              width={300}
              height={300}
              src={slide.src}
              alt={slide.alt}
              className="overflow-hidden object-cover  transition-all duration-500 group-hover:scale-150 md:w-[300px]"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
