"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ThumbnailProps = {
  url1: string;
  url2: string;
  url3: string;
};

function Thumbnails({ url1, url2, url3 }: ThumbnailProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const slides = [
    { src: url1, alt: "Slide 1" },
    { src: url2, alt: "Slide 2" },
    { src: url3, alt: "Slide 3" },
  ];

  return (
    <div className="space-y-4">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="aspect-square w-full max-w-lg rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={300}
              height={400}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress={true}
        className="max-w-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={150}
              height={100}
              className="aspect-[3/2] w-full rounded object-cover opacity-60 transition-opacity hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Thumbnails;