
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {

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

    return (
        <nav className="flex w-full md:w-[95%] mx-auto flex-col justify-between  rounded-[10px] py-[20px] md:p-0">
            <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
                {/* Logo */}
                <div className="md:flex pt-3 hidden justify-start">
                    <Image src="/logo.png" alt="Logo" width={120} height={120} />
                </div>
                <button onClick={handleDropDown}>

                    <div className="md:hidden flex pt-3 justify-start">
                        <Image src="/menu.svg" alt="Logo" width={35} height={35} className="mb-2" />
                    </div>
                </button>
                
                {/* Title */}
                <div className="flex flex-col md:w-full font-logo text-xl md:text-5xl text-center items-center justify-center ">
                    <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
                </div>
                {/* Icons */}
                <div className="flex md:gap-6 gap-2 items-center h-full my-auto md:pt-3">
                <Link href="/user"><Image src="/profile3.png" alt="Logo" width={30} height={30} /></Link>
                    <Link href="/cart"> <Image src="/cart.png" alt="Logo" width={30} height={30} /></Link>
                   
                </div>
            </div>

            <div className="hidden md:flex w-full text-2xl font-extralight   items-center text-center justify-center gap-8  pb-5">
                <Link href='/' className="group relative inline-block hover:cursor-pointer">
                    <span className="text-black py-2">Home</span>
                    <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                </Link>
                <Link href='/#aboutUs' className="group relative inline-block hover:cursor-pointer">
                    <span className="text-black py-2">About Us</span>
                    <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                </Link>
                <Link href='/' className="group relative inline-block hover:cursor-pointer">
                    <span className="text-black py-2">Shop</span>
                    <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                </Link>
                <Link href='/#collections' className="group relative inline-block hover:cursor-pointer">
                    <span className="text-black py-2">Collection</span>
                    <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                </Link>
                <Link href='/#contactUs' className="group relative inline-block hover:cursor-pointer">
                    <span className="text-black py-2">Contact Us</span>
                    <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
                </Link>
            </div>
            <div
                    className="overflow-hidden md:hidden transition-all delay-600 bg-slate-100"
                    style={{ height: dropDown === "none" ? "0px" : "150px" }}
                >
                    <div
                        className="w-full  flex-col flex-end mt-5  "
                        id="navbar-default"
                    >
                        <div className="flex flex-col justify-end w-full">
                            <a href="/">Home</a>
                            <a href="/">Schedule</a>
                            <a href="/committees">Committees</a>
                            <a href="/">Events</a>
                        </div>
                    </div>
                </div>
        </nav>
    )
}
