"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

function Carousal() {
  return (
    <div>
      <Splide
        options={{
          type: "fade",
          rewind:true,
          autoplay: true,
          interval: 2000,
          arrows: false,
          lazyLoad: true,
          speed:1000,
          rewindSpeed:1000
        }}
      >
        <SplideSlide>
          <Image src="/carousal (1).png" alt="Logo" width={1600} height={900} className='w-full h-[100%]  object-contain overflow-hidden' />
        </SplideSlide>
        <SplideSlide>
          <Image src="/carousal (2).png" alt="Logo" fill />
        </SplideSlide>
        <SplideSlide>
          <Image src="/carousal (1).png" alt="Logo" fill />
        </SplideSlide>
        <SplideSlide>
          <Image src="/carousal (2).png" alt="Logo" fill />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousal;
