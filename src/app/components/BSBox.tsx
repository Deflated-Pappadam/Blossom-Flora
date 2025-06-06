import Image from "next/image";
import React from "react";

type ItemProps = {
  ImageUrl: string;
  name: string;
  price: number;
  id: string;
  ItemId: string;
};

function BSBox({ ImageUrl, name, price, id }: ItemProps) {
  return (
    <a href={`/item/${id}`} className="group relative bg-white md:min-w-[150px] min-w-[250px]">
      {/* Product Image */}
      <div className="mb-4 aspect-square overflow-hidden bg-gray-50">
        <Image
          loading="lazy"
          src={ImageUrl}
          alt={name}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2 text-center">
        <h3 className="text-sm font-light uppercase tracking-wide text-gray-900">
          {name}
        </h3>

        <div className="text-xs uppercase tracking-wider text-gray-500">
          In Stock
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3">
          <a
            href={`/item/${id}`}
            className="flex-1 bg-gray-900 px-3 py-2 text-xs uppercase tracking-wide text-black transition-colors hover:bg-gray-800"
          >
            View
          </a>
          <a
            className="flex-1 border border-gray-900 px-3 py-2 text-center text-xs uppercase tracking-wide text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            href={`https://wa.me/7592092057?text=${encodeURIComponent(`Is ${name} available?`)}`}
          >
            Book
          </a>
        </div>
      </div>
    </a>
  );
}

export default BSBox;
