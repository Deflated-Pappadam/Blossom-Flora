import Image from "next/image";
import React from "react";

type CollectionProps = {
  url: string;
  name: string;
};

function Collection(props: CollectionProps) {
  return (
    <div>
      <div className="group group relative flex h-[150px] min-h-[150px] w-[150px] min-w-[150px] overflow-hidden md:h-[300px] md:min-h-[300px] md:w-[300px]  md:min-w-[300px] ">
        <Image
          width={1080}
          height={1080}
          src={props.url}
          alt=""
          className="h-full w-full  object-cover transition-all duration-500 group-hover:scale-150 group-hover:blur-[6px]"
        />
        <div className="absolute top-[45%] flex h-full w-full justify-center px-[15%] text-center transition-all duration-500 md:px-[5%]">
          <p className="font-caslon text-lg text-white opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
