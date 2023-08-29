import React from "react";
import Image from "next/image";

type itemProps = {
  url: string;
  name: string;
  description: string;
};

function Itembox(props: itemProps) {
  return (
    <div className="group flex flex-col w-full h-full mx-auto">
      <div className="z-0 md:w-[300px] w-[150px]   md:min-w-[300px]  overflow-hidden">
        <Image
          src={props.url}
          alt="Logo"
          width={1080}
          height={900}
          className="object-cover md:w-[300px]  group-hover:scale-150 transition-all duration-500 overflow-hidden"
        />
        
      </div>
      <div className="z-10 bg-slate-50 md:w-[300px] w-[150px]   md:min-w-[300px] h-full ">
          <div className="md:text-3xl text-xl text-center font-text transition-all ">
            {props.name}
          </div>
          <div className="md:text-xl text-center  font-light transition-all ">
            {props.description}
          </div>
        </div>
    </div>
  );
}

export default Itembox;
