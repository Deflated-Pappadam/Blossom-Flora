"use client";
import BSBox from "@/components/BSBox";
import Navbar from "@/components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import ThumbMob from "@/components/ThumbMob";
import Thumbnails from "@/components/Thumbnails";
import HomeCollections from "@/components/HomeCollections";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
function Page() {
  const [cartCount, setCartCount] = useState(0);
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);

  return (
    <main className="flex flex-col bg-[#fdfdfd] w-full h-full min-h-screen overflow-x-hidden justify-center">
      {/* <nav className="w-full flex justify-between items-center min-h-[5%] mx-auto uppercase  md:px-[6%] p-3 border-b border-black b-1 text-lg poppins-light">
        <div className="md:flex hidden gap-6 ">
          <div>Home</div>
          <div>Collection</div>
        </div>
        <div className="md:hidden flex min-w-[100px]">
          <Image
            src="/menu.svg"
            alt="Logo"
            width={35}
            height={35}
            className="mb-2"
          />
        </div>
        <div className="flex items-center justify-center w-fit flex-row  md:gap-2">
          <Image src="/Logo-black.png" alt="Logo" width={70} height={70} />
          <div className="md:flex hidden  w-full items-center justify-center main text-2xl text-[#2d2d2d] uppercase ">
            BlossomFlora
          </div>
        </div>
        <div className="md:flex hidden  gap-6">
          <div>Account</div>
          <div>Cart({cartCount})</div>
        </div>
        <div className="flex md:hidden min-w-[100px] items-center">
          <Link href="/user">
            <Image
              src="/profile3.png"
              alt="user dashboard"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/cart" className="flex items-center">
            <Image
              src="/cart.png"
              alt="cart"
              width={25}
              height={25}
              className=""
            />
            <div className="p-1">({cartCount})</div>
          </Link>
        </div>
      </nav> */}
      <div className="w-full font-light text-lg  justify-start  hidden md:flex mb-1">
        <div className="w-[90%] mx-auto border-b-2 bg-[#2d2d2d] rounded-b-lg text-white text-md poppins-light p-1 text-center">
          Home delivery available only for nearby locations , please order with
          a two day notice
        </div>
      </div>

      <Navbar />
      <section id="hero" className="realtive flex flex-col w-full ">
        {/* <div className="flex w-full items-center justify-center absolute main md:text-[1400%] text-[3rem] text-[#2d2d2d] uppercase p-10 md:pt-[10]">
        <span className="block md:inline">    Blossom<span className="main-thick">Flora</span></span>
        </div> */}
        <div className="w-full flex md:flex-row flex-col md:max-h-[80vh] overflow-hidden">
          <div className="flex justify-end  items-center md:w-[50%] bg-[#ebf1fa] md:order-0 order-1 p-10">
            <div className="flex flex-col md:text-[3.5rem] text-2xl poppins-regular leading-none pt-10">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <button className="w-fit h-fit px-4 p-2 bg-[#2d2d2d] text-lg text-white my-5 ">
                COLLECTIONS
              </button>
            </div>
          </div>
          <div className="md:max-w-[50%] overflow-hidden md:order-1 order-0 md:h-full w-full ">
            <div className="w-full h-full">
              <Splide
                options={{
                  type: "fade",
                  rewind: true,
                  autoplay: true,
                  interval: 2000,
                  arrows: false,
                  lazyLoad: true,
                  speed: 1000,
                  rewindSpeed: 1000,
                }}
              >
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh]">
                    <Image
                      src="/items/I (3).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh]">
                    <Image
                      src="/items/I (4).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh] ">
                    <Image
                      src="/items/I (6).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bestseller"
        className="flex flex-col  items-center  bg-[#fafafa]"
      >
        <div className="md:w-[80%] w-full gap-8 justify-center p-2">
         
            <div className="md:text-[5rem] text-[3rem] pathway-extreme md:p-10 p-5">
              Best Sellers
            </div>
            <FadeUp>
            <motion.section className="flex w-full overflow-x-scroll h-fit justify-start items-center gap-6 md:py-6 py-4">
              <BSBox
                ImageUrl="/items/I (5).jpg"
                name="Premium Car Deck."
                price={10}
                id="1"
              />
              <BSBox
                ImageUrl="/items/I (2).jpg"
                name="Holy communion - decorated candle."
                price={10}
                id="1"
              />
              <BSBox
                ImageUrl="/items/I (3).jpg"
                name="Artifical Bouquet."
                price={10}
                id="1"
              />
              <BSBox
                ImageUrl="/items/I (4).jpg"
                name="Red rose, dried Gixo. Bouqet"
                price={10}
                id="1"
              />
              <BSBox
                ImageUrl="/items/I (6).jpg"
                name="Artifical Bouquet"
                price={10}
                id="1"
              />
            </motion.section>
          </FadeUp>
        </div>
      </section>
      <section id="aboutUs" className="mt-10 flex flex-col md:flex-row ">
       
          <div className="md:flex hidden justify-center w-[50%] h-full items-center p-10 ">
            <FadeUp> <Thumbnails
              url1="/items/I (5).jpg"
              url2="/items/I (4).jpg"
              url3="/items/I (3).jpg"
            /></FadeUp>
           
          </div>
          <div className="md:hidden flex justify-center items-center p-2 ">
            <ThumbMob
              url1="/items/I (5).jpg"
              url2="/items/I (4).jpg"
              url3="/items/I (3).jpg"
            />
          </div>

          
        <div className="flex flex-col items-center md:w-[50%]">
          <div className="md:my-[60px] text-black md:text-5xl text-3xl pathway-extreme ">
            About Us
          </div>
          <FadeUp className="w-full h-full">
          <div className=" text-lg md:text-2xl font-light items-center w-[90%] md:w-[80%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            <br />
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br />
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          </FadeUp>
        </div>
       
      </section>
      <section id="collectionSection">
        <div className="mt-[80px] text-center text-black text-2xl md:text-5xl pathway-extreme">
          Collections
        </div>
        <FadeUp> <div className="flex md:w-[75%] mx-auto p-5 justify-center gap-10  md:overflow-hidden overflow-scroll flex-wrap">
          <HomeCollections url="/items/I (5).jpg" name="Premium Car Deck." />
          <HomeCollections url="/items/I (4).jpg" name="Red rose, dried Gixo. Bouqet" />
          <HomeCollections url="/items/I (3).jpg" name="Artifical Bouquet" />
          <HomeCollections url="/items/I (2).jpg" name="Holy communion - decorated candle." />
          <HomeCollections url="/items/I (1).jpg" name="  Cypress Car Dexk." />
          <HomeCollections url="/items/I (6).jpg" name="Artifical Bouquet" />
        </div></FadeUp>
       
      </section>
      <Footer />
    </main>
  );
}

export default Page;
