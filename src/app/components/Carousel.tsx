"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

function Carousel() {
  return (
    <Splide
      options={{
        label: "landing page carousel",
        type: "fade",
        role: "home carousel",
        rewind: true,
        autoplay: true,
        pagination: false,
        interval: 2000,
        arrows: false,
        lazyLoad: true,
        speed: 1000,
        rewindSpeed: 1000,
      }}
    >
      <SplideSlide>
        <div className="flex h-[40vh] justify-center md:h-[80vh]">
          <Image
            src="/items/I (3).jpeg"
            priority
            alt="item 1"
            width={300}
            height={300}
            quality={80}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex h-[40vh] justify-center md:h-[80vh]">
          <Image
            src="/items/I (4).jpeg"
            priority
            alt="item 2"
            width={300}
            height={300}
            quality={80}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex h-[40vh] justify-center md:h-[80vh]">
          <Image
            src="/items/I (6).jpeg"
            priority
            alt="item 3"
            width={300}
            height={300}
            quality={80}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Carousel;
