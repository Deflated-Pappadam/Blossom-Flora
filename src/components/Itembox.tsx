import React from "react";
import Image from "next/image";

type itemProps = {
  url: string;
  name: string;
  description: string;
};

function Itembox(props: itemProps) {
  return (
    <div className="group flex flex-col w-full h-full mx-auto justify-center items-center">
      <div className=" w-[300px] h-[300px]  overflow-hidden">
        <Image
          src={props.url}
          alt="Logo"
          width={1080}
          height={900}
          className="object-contain md:w-[300px]  group-hover:scale-150 transition-all duration-500 overflow-hidden"
        />
        
      </div>
      <div className=" bg-slate-50 md:w-[300px] w-[150px]   md:min-w-[300px] h-full ">
          <div className="md:text-3xl text-lg text-center pathway-extreme transition-all ">
            {props.name}
          </div>
          <div className="md:text-xl text-center  poppins-light transition-all ">
            {props.description}
          </div>
        </div>
    </div>
  );
}

export default Itembox;
