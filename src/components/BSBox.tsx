import Image from "next/image";
import React from "react";

function BSBox() {
  return (
    <div className="md:w-[380px] w-[300px] md:h-[600px] bg-white rounded-lg shrink-0 p-5">
      <div className="pathway-extreme text-2xl p-1 py-5">
        Crimson & Ivory Deck
      </div>
      <Image src="/items/I (5).jpg" alt="" height={1080} width={1080} className="w-[400px] md:h-[400px] h-[300px] object-cover items-center "/>
      <div className="w-full flex justify-between p-2 py-5">
      <div className=" poppins-light text-xl">Price </div>
      <div>$ 10/piece</div>
      </div>
    </div>
  );
}

export default BSBox;
