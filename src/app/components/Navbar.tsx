"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
// import { User, signOut } from "firebase/auth";
// import { auth, getUser } from "../../../firebase";

export default function Navbar() {
  // const [user, setUser] = useState<User | null>(null);
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  // const handleSignOut = () => {
  //   signOut(auth);
  // };

  // useEffect(() => {
  //   return getUser((user) => {
  //     setUser(user);
  //   });
  // });

  return (
    <>
      {/* Top Banner */}
      <div className="hidden md:block bg-black text-white text-center py-2">
        <div className="text-xs tracking-wider uppercase">
          Home delivery available only for nearby locations - Please order within two days notice
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left Menu - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
              >
                Home
              </Link>
              <Link 
                href="/#aboutUs" 
                className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
              >
                About
              </Link>
              <Link 
                href="/collections" 
                className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
              >
                Collections
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleDropDown}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <div className="w-full h-0.5 bg-black transition-all"></div>
                <div className="w-full h-0.5 bg-black transition-all"></div>
                <div className="w-full h-0.5 bg-black transition-all"></div>
              </div>
            </button>

            {/* Center Logo */}
            <div className="md:pr-0 pr-4 md:hidden block">
              <Link href="/" className="flex items-center">
                <div className="hidden md:block mr-3">
                  <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </div>
                <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-black uppercase">
                  Blossom Flora
                </h1>
              </Link>
            </div>

             <div className="md:block hidden absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center">
                <div className="hidden md:block mr-3">
                  <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </div>
                <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-black uppercase">
                  Blossom Flora
                </h1>
              </Link>
            </div>

            {/* Right Menu - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="#contactUs" 
                className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
              >
                Contact
              </Link>
              
              {/* Authentication Section - Commented Out */}
              {/* {user ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/user"
                    className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
                  >
                    Account
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/login"
                    className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup"
                    className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors uppercase"
                  >
                    Sign Up
                  </Link>
                </div>
              )} */}
            </div>

            {/* Mobile Icons - Commented Out */}
            {/* <div className="md:hidden flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/user">
                    <Image
                      src="/profile.png"
                      alt="Account"
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                  <button onClick={handleSignOut}>
                    <Image
                      src="/logout.png"
                      alt="Sign out"
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Image
                      src="/login.png"
                      alt="Login"
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                  <Link href="/signup">
                    <Image
                      src="/adduser.png"
                      alt="Sign up"
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </>
              )}
            </div> */}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40
          ${dropDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <div className={`
            fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
            ${dropDown ? 'translate-x-0' : '-translate-x-full'}
          `}>
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg font-light tracking-wider uppercase">Menu</h2>
              <button onClick={handleDropDown} className="p-2">
                <RxCross2 className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col pt-8">
              <Link 
                href="/" 
                className="px-6 py-4 text-sm tracking-wider text-gray-800 hover:text-black hover:bg-gray-50 transition-colors uppercase border-b border-gray-50"
                onClick={() => setDropDown(false)}
              >
                Home
              </Link>
              <Link 
                href="/#aboutUs" 
                className="px-6 py-4 text-sm tracking-wider text-gray-800 hover:text-black hover:bg-gray-50 transition-colors uppercase border-b border-gray-50"
                onClick={() => setDropDown(false)}
              >
                About Us
              </Link>
              <Link 
                href="/collections" 
                className="px-6 py-4 text-sm tracking-wider text-gray-800 hover:text-black hover:bg-gray-50 transition-colors uppercase border-b border-gray-50"
                onClick={() => setDropDown(false)}
              >
                Collections
              </Link>
              <Link 
                href="#contactUs" 
                className="px-6 py-4 text-sm tracking-wider text-gray-800 hover:text-black hover:bg-gray-50 transition-colors uppercase border-b border-gray-50"
                onClick={() => setDropDown(false)}
              >
                Contact Us
              </Link>

              {/* Mobile Auth Section - Commented Out */}
              {/* <div className="mt-8 px-6 py-4 bg-gray-50">
                {user ? (
                  <div className="space-y-3">
                    <Link 
                      href="/user"
                      className="block text-sm tracking-wider text-gray-800 hover:text-black transition-colors uppercase"
                      onClick={() => setDropDown(false)}
                    >
                      My Account
                    </Link>
                    <button 
                      onClick={() => {
                        handleSignOut();
                        setDropDown(false);
                      }}
                      className="block text-sm tracking-wider text-gray-800 hover:text-black transition-colors uppercase"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link 
                      href="/login"
                      className="block text-sm tracking-wider text-gray-800 hover:text-black transition-colors uppercase"
                      onClick={() => setDropDown(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      href="/signup"
                      className="block text-sm tracking-wider text-gray-800 hover:text-black transition-colors uppercase"
                      onClick={() => setDropDown(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}