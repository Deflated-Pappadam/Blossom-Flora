import React from "react";
import Image from "next/image";
import CollectionItem from "@/components/CollectionItem";

function Collections() {
  const checkBox = "mr-5  sm:w-[20px] sm:h-[20px]";
  return (
    <div className="w-full">
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

          <div className="hidden md:flex w-full text-2xl font-extralight items-center text-center justify-center gap-8  pb-5">
            <span className="group relative inline-block ">
              <span className="text-black py-2">Home</span>
              <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
            </span>
            <span className="group relative inline-block ">
              <span className="text-black py-2">About Us</span>
              <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
            </span>
            <span className="group relative inline-block ">
              <span className="text-black py-2">Shop</span>
              <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
            </span>
            <span className="group relative inline-block ">
              <span className="text-black py-2">Collection</span>
              <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
            </span>
            <span className="group relative inline-block ">
              <span className="text-black py-2">Contact Us</span>
              <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
            </span>
          </div>
        </nav>
        <section className="pt-2 flex max-[1200px]:flex-col max-[1200px]:items-center bg-white relative">
          <form className="min-[1200px]:pl-10 min-[1200px]:pr-2 w-[clamp(250px,375px,90%)]">
            <input type="search" placeholder="Search" className="my-6 w-full border-2 border-black md:py-3 py-2 rounded-lg px-2"/>
            <label htmlFor="filter" className="py-3 md:text-xl">
              Collections
            </label>
            <ul id="filter" className="ml-2 gap-3 max-[1200px]:flex">
              <li className="flex items-center mt-3">
                <input
                  id="input1"
                  type="checkbox"
                  className={checkBox}
                />
                <label htmlFor="input1" className="max-sm:text-sm">Flower</label>
              </li>
              <li className="flex items-center mt-3">
                <input id="input2" type="checkbox" className={checkBox} />
                <label htmlFor="input2" className="max-sm:text-sm">Flower</label>
              </li>
              <li className="flex items-center mt-3">
                <input id="input3" type="checkbox" className={checkBox} />
                <label htmlFor="input3" className="max-sm:text-sm">Flower</label>
              </li>
            </ul>
          </form>
          <div className="w-full mt-5 grid gap-[2.5em] md:grid-cols-[repeat(auto-fill,400px)] grid-cols-[repeat(auto-fill,250px)] justify-center">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Collections;
