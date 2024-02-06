import Image from "next/image";
import React from "react";

type ItemProps = {
  ImageUrl: string;
  name: string;
  price: number;
  id: string
}


function BSBox({ImageUrl, name, price, id}: ItemProps) {
  return (
    <div className="md:w-[300px] w-[300px] md:h-[500px] bg-white rounded-lg shrink-0 p-5">
      <div className="pathway-extreme text-2xl p-1 py-5 min-h-[100px]">
      {name}
      </div>
      <Image src={ImageUrl} alt="" height={1080} width={1080} className="w-[300px] md:h-[300px] h-[200px] object-cover items-center "/>
      <div className="w-full flex justify-between p-2 py-5">
      <div className=" poppins-light text-xl">Price </div>
      <div>$ {price}/piece</div>
      </div>
    </div>
  );
}

export default BSBox;
