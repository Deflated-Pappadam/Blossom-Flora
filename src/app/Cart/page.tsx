import Carousal from "@/components/Carousal";
import Itembox from "@/components/Itembox";
import Image from "next/image";
import Thumbnails from "@/components/Thumbnails";
import ThumbMob from "@/components/ThumbMob";
import Collections from "@/components/Collections";

import React from "react";

export default function Cart() {
  return (
    <main className="flex w-full h-full min-h-full flex-col bg-slate-50">
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

      <nav className="flex w-full md:w-[95%] mx-auto flex-col justify-between  rounded-[10px] py-[20px] md:p-0">
        <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
          {/* Logo */}
          <div className="md:flex pt-3 hidden justify-start">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          {/* Title */}
          <div className="flex flex-col md:w-full font-logo text-xl md:text-5xl text-center items-center justify-center ">
            <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
          </div>
          {/* Icons */}
          <div className="flex md:gap-6 gap-2 items-center h-full my-auto md:pt-3">
            <Image src="/search.svg" alt="Logo" width={30} height={30} />
            <Image src="/cart.png" alt="Logo" width={30} height={30} />
          </div>
        </div>

        <div className="hidden md:flex w-full text-2xl font-extralight   items-center text-center justify-center gap-8  pb-5">
          <span className="group relative inline-block hover:cursor-pointer">
            <span className="text-black py-2">Home</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block hover:cursor-pointer">
            <span className="text-black py-2">About Us</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block hover:cursor-pointer">
            <span className="text-black py-2">Shop</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block hover:cursor-pointer">
            <span className="text-black py-2">Collection</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block hover:cursor-pointer">
            <span className="text-black py-2">Contact Us</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
        </div>
      </nav>

      <section id="cart" className="flex flex-col w-full">
        <div className="flex  w-full justify-center items-center text-[50px] font-text">Cart</div>
        <div className="flex w-full justify-between p-10 ">
            <div className="flex  w-[45%] bg-black">gap</div>
            <div className="flex w-[45%] bg-blue-500">
                <div className="w-[70%] mx-auto flex justify-between text-2xl font-caslon">
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
