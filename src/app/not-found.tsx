"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex flex-col w-full  min-h-screen justify-between items-center bg-[#fdfdfd] overflow-hidden pathway-extreme">
      <Navbar />

      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="w-1 h-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>

      <div className="absolute top-0 bottom-0 left-0 right-0  flex w-full h-full justify-center items-center z-10 pointer-events-none">
        <div className="flex flex-col justify-center items-center w-fit h-fit p-5 bg-[#2d2d2d]  text-white poppins-regular text-2xl">
          <div className="p-5"> OOOPS. PAGE NOT FOUND.</div>
          <Link
            href={"/"}
            className="bg-white text-black px-4 py-1 m-2 text-xl hover:scale-110 transition-all pointer-events-auto"
          >
            HEAD FOR HOME
          </Link>
        </div>
      </div>

      <div>.</div>
    </div>
  );
}
