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
          <Image src="/carosal (1).png" alt="Logo" placeholder="blur" blurDataURL= "/carousal (1).png"  width={1600} height={900} className='w-full h-full  object-contain overflow-hidden ' />
        </SplideSlide>
       
        <SplideSlide>
          <Image src="/carosal (3).png" alt="Logo" placeholder="blur" blurDataURL= "/carousal (3).png" width={1600} height={900} className='w-full h-full  object-contain ' />
        </SplideSlide>
        <SplideSlide>
          <Image src="/carosal (4).png" alt="Logo" placeholder="blur" blurDataURL= "/carousal (4).png" width={1600} height={900} className='w-full h-full  object-contain ' />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousal;
