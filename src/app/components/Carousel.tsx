"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// Install Swiper modules
SwiperCore.use([Autoplay]);

function Carousel() {
  const images: string[] = ["Item (1).jpeg", "Item (2).jpeg", "Item (3).jpeg"];
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-full w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide className="h-full w-full" key={index}>
          <Image
            alt=""
            src={`/items/${src}`}
            width={1080}
            height={1080}
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
