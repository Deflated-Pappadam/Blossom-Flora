"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Item() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col">
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
      <div className="w-full h-full flex mx-10  justify-start">
        <div className="w-[50%] h-full flex justify-center items-center mx-auto my-auto  overflow-hidden">
          <div>
            <Image
              src="/Item01.jpg"
              alt="Item01"
              width={1080}
              height={900}
              className="flex md:w-[800px] justify-center h-full object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-full justify-center overflow-hidden">
          <div className="w-[70%]">
            <div className="text-xl font-light">Flowers</div>
            <div className="text-4xl font-text">Item Flowers 01</div>
            <div className="text-xl font-light mt-5">
              A soft, warm hoodie from South America thats perfect for keeping
              you cozy. A soft, warm hoodie from South America thats perfect for
              keeping you cozy. A soft, warm hoodie from South America thats
              perfect for keeping you cozy. A soft, warm hoodie from South
              America thats perfect for keeping you cozy.
            </div> 
            <div className="flex flex-col py-5 font-light">
              <div className="text-3xl  py-2">Quantity</div>

              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  title="test"
                  type="number"
                  className="w-16 px-4 py-2 border text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-3xl text-gray-800 my-5">€36.50</div>
            <div className="group w-[60%] h-[60px] bg-black rounded-md hover:border-[1px] border-black hover:bg-white transition-all">
              <div className="flex w-full h-full justify-center items-center text-white group-hover:text-black ">
                Book Now
              </div>
            </div>

            <div className="group w-[60%] h-[60px] bg-black rounded-md hover:border-[1px] border-black hover:bg-white transition-all my-5">
              <div className="flex w-full h-full justify-center items-center text-white group-hover:text-black ">
                Add to Cart
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
