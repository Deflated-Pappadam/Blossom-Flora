import Image from "next/image";
import React from "react";

type ItemProps = {
  ImageUrl: string;
  name: string;
  price: number;
  id: string;
};

function BSBox({ ImageUrl, name, price, id }: ItemProps) {
  return (
    <div className="group relative flex min-h-[500px] w-[300px] shrink-0 flex-col justify-between rounded-lg bg-white p-5">
      <Image
        src={ImageUrl}
        alt=""
        height={1080}
        width={1080}
        className="h-[200px] w-[300px] items-center  object-contain md:min-h-[300px]  "
      />
      <h4 className="font-caslon p-1 py-5 text-center">{name}</h4>
      <div>
        <div className="flex w-full justify-between p-2 py-5">
          <p>Price </p>
          <p>$ {price}/piece</p>
        </div>
        <div className="flex justify-center">
          <button className="flex w-full cursor-pointer justify-center rounded-md bg-[#2d2d2d] p-2 text-white ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default BSBox;
