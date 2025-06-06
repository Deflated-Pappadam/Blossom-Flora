"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

type ThumbnailProps = {
  url1: string;
  url2: string;
  url3: string;
};

export default function ThumbMob({ url1, url2, url3 }: ThumbnailProps) {
  const slides = [
    { src: url1, alt: "Slide 1" },
    { src: url2, alt: "Slide 2" },
    { src: url3, alt: "Slide 3" },
  ];

  return (
    <div className="w-full max-w-sm">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="aspect-square w-full rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}