"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { User, signOut } from "firebase/auth";
import { auth, getUser } from "../../../firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [dropDown, setDropDown] = useState("none");

  const handleDropDown = () => {
    if (dropDown === "flex") {
      setDropDown("none");
    } else {
      setDropDown("flex");
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropDown("flex");
    }, 700);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    return getUser((user) => {
      setUser(user);
    });
  });

  return (
    <nav className="flex h-full w-full flex-col ">
      <div className="font-poppin mb-1 hidden  w-full  justify-start text-lg md:flex">
        <div className="poppins-light mx-auto w-[90%] rounded-b-lg border-b-2 bg-[#2d2d2d] p-1 text-center text-md text-white">
          Home delivery available only for nearby locations , please order
          within a two day notice
        </div>
      </div>
      <div
        className="delay-600 fixed top-0 z-50 min-h-screen min-w-full overflow-hidden bg-slate-100 transition-all duration-500 md:hidden"
        style={{
          width: dropDown === "none" ? "0px" : "150px",
          left: dropDown === "none" ? "-100%" : "0",
        }}
      >
        <div className="mt-5 flex w-full flex-col" id="navbar-default">
          <div
            className="flex items-end justify-end px-5 text-4xl"
            onClick={handleDropDown}
          >
            <RxCross2 />
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <a href="/" className="p-7">
              HOME
            </a>
            <a href="/" className="p-7">
              ABOUT US
            </a>
            <a href="/collections" className="p-7">
              COLLECTION
            </a>
            <a href="/" className="p-7">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col justify-between px-10 py-[20px] md:w-[95%]  md:p-0 md:px-20 ">
        <div className="flex justify-between">
          <div className="w-full">
            {/* Logo */}
            <div className="hidden justify-start pt-3 md:flex">
              <Image src="/logo.png" alt="Logo" width={120} height={120} />
            </div>
            <button aria-label="hamburger menu" onClick={handleDropDown}>
              <div className="flex justify-start pt-3 md:hidden">
                <GiHamburgerMenu />
              </div>
            </button>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center justify-center font-logo text-xl font-bold">
            <h1 className="break-words text-center font-logo text-md md:text-2xl lg:text-4xl">
              Blossom Flora
            </h1>
          </div>
          <div className="flex w-full justify-end">
            {/* Icons */}
            {user ? (
              // if user exist...add a logo to signout button
              <div className="my-auto flex h-full items-center gap-2 md:gap-6 md:pt-3">
                <Link href="/user">
                  <Image
                    src="/profile.png"
                    alt="user dashboard"
                    width={30}
                    height={30}
                  />
                </Link>
                {/* <Link href="/cart">
                  <Image src="/cart.png" alt="cart" width={30} height={30} />
                </Link> */}
                <button onClick={handleSignOut}>
                  <Image
                    src="/logout.png"
                    alt="signout"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            ) : (
              //if user doesnt exist...change logo of icons according to the route
              <div className="my-auto flex h-full items-center gap-2 md:gap-6 md:pt-3">
                <Link href="/login">
                  <Image src="/login.png" alt="login" width={30} height={30} />
                </Link>
                <Link href="/signup">
                  <Image
                    src="/adduser.png"
                    alt="signup"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden w-full items-center justify-center gap-8   p-5 text-center text-xl font-extralight  md:flex">
          <Link
            href="/"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="py-2 text-black">HOME</span>
            <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/#aboutUs"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="py-2 text-black">ABOUT</span>
            <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/collections"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="py-2 text-black">COLLECTION</span>
            <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contactUs"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="py-2 text-black">CONTACT US</span>
            <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all group-hover:w-full "></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
