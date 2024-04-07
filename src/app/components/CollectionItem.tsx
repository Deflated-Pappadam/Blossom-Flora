import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

type ItemProps = {
  ImageUrl: string;
  name: string;
  desc: string;
  price: number;
  id: string;
};

export default function CollectionItem({
  ImageUrl,
  name,
  desc,
  price,
  id,
}: ItemProps) {
  var shortDesc = desc.length > 50 ? desc.substring(0, 50) + "..." : desc;
  return (
    <a
      href={`/item/${id}`}
      className="relative flex h-[400px] w-[300px] flex-col items-center justify-between overflow-hidden rounded-md border text-center"
    >
      <Image
        src={ImageUrl}
        alt={"Product Image"}
        width={200}
        height={300}
        className="h-[200px] w-[200px] object-cover p-5 md:h-[250px] md:w-[250px]"
      />
      <div>
        <h1 className="py-2 font-caslon text-md md:text-md">{name}</h1>
        <p className="max-h-[100px] text-ellipsis px-2 py-2 text-sm">
          {shortDesc}
        </p>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-full border p-2">₹{price}</div>
        <a
          href={`https://wa.me/7592092057?text=${encodeURI(`send me ${name} pweas`)}`}
          className="flex w-full items-center justify-center gap-2 border p-2 transition-colors duration-500 hover:bg-black hover:text-white"
        >
          <BsCart4 /> ORDER
        </a>
      </div>
    </a>
  );
}
