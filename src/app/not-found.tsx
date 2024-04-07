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
    <div className="pathway-extreme relative flex min-h-screen  w-full flex-col items-center justify-between overflow-hidden bg-[#fdfdfd]">
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>
      <Marquee loop={0} autoFill={true} direction="right" className="w-full">
        <div className="h-1 w-1 bg-black"></div>{" "}
        <div className="p-6 px-[50px]">404 ERROR</div>
      </Marquee>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0  top-0 z-10 flex h-full w-full items-center justify-center">
        <div className="poppins-regular flex h-fit w-fit flex-col items-center justify-center bg-[#2d2d2d]  p-5 text-2xl text-white">
          <div className="p-5"> OOOPS. PAGE NOT FOUND.</div>
          <Link
            href={"/"}
            className="pointer-events-auto m-2 bg-white px-4 py-1 text-xl text-black transition-all hover:scale-110"
          >
            HEAD FOR HOME
          </Link>
        </div>
      </div>

      <div>.</div>
    </div>
  );
}
