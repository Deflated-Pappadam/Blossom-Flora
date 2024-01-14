"use client";

import {useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, signOut } from "firebase/auth";
import { auth, getUser } from "../../firebase";

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

  const  handleSignOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    return getUser((user) => {
      setUser(user);
    })
  })

  return (
    <nav className="flex w-full h-full">
      <div
        className="overflow-hidden md:hidden transition-all delay-600 bg-slate-100 min-h-screen min-w-full"
        style={{
          width: dropDown === "none" ? "0px" : "150px",
          display: dropDown === "none" ? "none" : "flex",
        }}
      >
        <div className="flex w-full  flex-col  mt-5  " id="navbar-default">
          <div
            className="text-4xl justify-end items-end flex px-5"
            onClick={handleDropDown}
          >
            X
          </div>
          <div className="flex flex-col justify-center  items-start w-full h-full text-5xl  ">
            <a href="/" className="p-7 hover:text-slate-700">
              HOME
            </a>
            <a href="/" className="p-7">
              ABOUT US
            </a>
            <a href="/committees" className="p-7">
              SHOP
            </a>
            <a href="/" className="p-7">
              COLLECTION
            </a>
            <a href="/" className="p-7">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-[95%] mx-auto flex-col justify-between  rounded-[10px] py-[20px] md:p-0">
        <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
          {/* Logo */}
          <div className="md:flex pt-3 hidden justify-start">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          <button onClick={handleDropDown}>
            <div className="md:hidden flex pt-3 justify-start">
              <Image
                src="/menu.svg"
                alt="Logo"
                width={35}
                height={35}
                className="mb-2"
              />
            </div>
          </button>

          {/* Title */}
          <div className="flex flex-col md:w-full font-logo text-xl md:text-5xl text-center items-center justify-center ">
            <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
          </div>
          {/* Icons */}
          {user ? (
            // if user exist...add a logo to signout button
            <div className="flex md:gap-6 gap-2 items-center h-full my-auto md:pt-3">
              <Link href="/user">
                <Image src="/profile3.png" alt="user dashboard" width={30} height={30} />
              </Link>
              <Link href="/cart">
                <Image src="/cart.png" alt="cart" width={30} height={30} />
              </Link>
              <button onClick={handleSignOut}>
                <Image src="/logout.png" alt="signout" width={25} height={25}/>
              </button>
            </div>
          ) : (
            //if user doesnt exist...change logo of icons according to the route
            <div className="flex md:gap-6 gap-2 items-center h-full my-auto md:pt-3">
              <Link href="/login">
                <Image src="/login.png" alt="login" width={30} height={30} />
              </Link>
              <Link href="/signup">
                <Image src="/add-user.png" alt="signup" width={30} height={30} />
              </Link>
            </div>
          )}
        </div>

        <div className="hidden md:flex w-full text-xl font-extralight   items-center text-center justify-center gap-8  p-5">
          <Link
            href="/"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="text-black py-2">HOME</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </Link>
          <Link
            href="/"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="text-black py-2">ABOUT US</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </Link>
          <Link
            href="/collections"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="text-black py-2">SHOP</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </Link>
          <Link
            href="/#collectionSection"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="text-black py-2">COLLECTION</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </Link>
          <Link
            href="/"
            className="group relative inline-block hover:cursor-pointer"
          >
            <span className="text-black py-2">CONTACT US</span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
