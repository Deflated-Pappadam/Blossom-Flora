"use client";
import BSBox from "@/components/BSBox";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

function Page() {
  const [cartCount, setCartCount] = useState(0);
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);

  return (
    <main className="bg-[#f5f2ef] w-full h-full min-h-screen">
      <nav className="w-full flex justify-between items-center min-h-[5%] mx-auto uppercase  md:px-[6%] p-3 border-b border-black b-1 text-lg poppins-light">
        <div className="md:flex hidden gap-6 ">
          <div>Home</div>
          <div>Collection</div>
        </div>
        <div className="md:hidden flex min-w-[100px]">
          <Image
            src="/menu.svg"
            alt="Logo"
            width={35}
            height={35}
            className="mb-2"
          />
        </div>
        <div className="flex items-center justify-center w-fit flex-row  md:gap-2">
          <Image src="/Logo-black.png" alt="Logo" width={70} height={70} />
          <div className="md:flex hidden  w-full items-center justify-center main text-2xl text-[#2d2d2d] uppercase ">
            BlossomFlora
          </div>
        </div>
        <div className="md:flex hidden  gap-6">
          <div>Account</div>
          <div>Cart({cartCount})</div>
        </div>
        <div className="flex md:hidden min-w-[100px] items-center">
          <Link href="/user">
            <Image
              src="/profile3.png"
              alt="user dashboard"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/cart" className="flex items-center">
            <Image
              src="/cart.png"
              alt="cart"
              width={25}
              height={25}
              className=""
            />
            <div className="p-1">({cartCount})</div>
          </Link>
        </div>
      </nav>
      <section id="hero" className="realtive flex flex-col w-full ">
        <div className="flex w-full items-center justify-center absolute main md:text-[1400%] text-[3rem] text-[#2d2d2d] uppercase p-10 md:pt-[10]">
        <span className="block md:inline">    Blossom<span className="main-thick">Flora</span></span>
        </div>
        <div className="w-full flex md:flex-row flex-col md:max-h-[90vh] overflow-hidden">
          <div className="flex justify-end  items-end md:w-[50%] bg-[#deccc8] md:order-0 order-1">
            <div className="flex flex-col md:text-4xl text-2xl poppins-regular md:p-[50px] p-5 pt-10 md:pb-[100px]">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <button className="w-fit h-fit px-4 p-2 bg-[#2d2d2d] text-lg text-white my-10 ">
                COLLECTIONS
              </button>
            </div>
          </div>
          <div className="md:max-w-[50%] overflow-hidden md:order-1 order-0 md:h-full w-full h-[300px]">
            <Image
              src="/items/I (4).jpg"
              alt="Logo"
              width={1080}
              height={1080}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="bestseller"
        className="flex flex-col  items-center min-h-screen bg-[#aeb5b4]"
      >
        <div className="text-[5rem] pathway-extreme p-10">Best Sellers</div>
        <div className="md:w-[80%] w-full gap-8 justify-center">
          <motion.section
            className="flex w-full overflow-x-scroll  justify-start items-center gap-6 py-6 " style={{ overflowX: 'scroll' }}
          >
          
              <BSBox />
              <BSBox />
              <BSBox />
              <BSBox />
              <BSBox />
             
    
          </motion.section>
        </div>
      </section>
    </main>
  );
}

export default Page;
