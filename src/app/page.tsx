import BSBox from "@/app/components/BSBox";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import ThumbMob from "@/app/components/ThumbMob";
import Thumbnails from "@/app/components/Thumbnails";
import HomeCollections from "@/app/components/HomeCollections";
import Carousal from "./components/Carousal";
function Page() {
  return (
    <>
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

      <section id="hero" className="realtive flex w-full flex-col ">
        {/* <div className="flex w-full items-center justify-center absolute main md:text-[1400%] text-[3rem] text-[#2d2d2d] uppercase p-10 md:pt-[10]">
        <span className="block md:inline">    Blossom<span className="main-thick">Flora</span></span>
        </div> */}
        <div className="flex w-full flex-col overflow-hidden md:flex-row">
          <div className="md:order-0 order-1  flex items-center justify-end bg-[#ebf1fa] p-10 md:w-[50%]">
            <div className="flex flex-col pt-10 text-xl leading-none md:text-2xl">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <button className="my-5 h-fit w-fit bg-[#2d2d2d] p-2 px-4 text-base text-white ">
                COLLECTIONS
              </button>
            </div>
          </div>
          <div className="order-0 w-full overflow-hidden md:order-1 md:h-full md:max-w-[50%] ">
            <div className="h-full w-full">
              <Carousal />
            </div>
          </div>
        </div>
      </section>

      <section
        id="bestseller"
        className="flex flex-col items-center bg-[#fafafa]"
      >
        <div className="w-full max-w-7xl justify-center gap-8 p-2">
          <h2 className="p-5 font-caslon font-medium md:p-10">Best Sellers</h2>
          <section className="flex h-full w-full items-center justify-start gap-6 overflow-x-scroll py-4 md:py-6">
            <BSBox
              ImageUrl="/items/I (5).jpeg"
              name="Premium Car Deck."
              price={10}
              id="1"
            />
            <BSBox
              ImageUrl="/items/I (2).jpeg"
              name="Holy communion - decorated candle."
              price={10}
              id="1"
            />
            <BSBox
              ImageUrl="/items/I (3).jpeg"
              name="Artifical Bouquet."
              price={10}
              id="1"
            />
            <BSBox
              ImageUrl="/items/I (4).jpeg"
              name="Red rose, dried Gixo. Bouqet"
              price={10}
              id="1"
            />
            <BSBox
              ImageUrl="/items/I (6).jpeg"
              name="Artifical Bouquet"
              price={10}
              id="1"
            />
          </section>
        </div>
      </section>
      <section id="aboutUs" className="mt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
          <div className="hidden h-full w-[50%] items-center justify-center p-10 md:flex ">
            <Thumbnails
              url1="/items/I (5).jpeg"
              url2="/items/I (4).jpeg"
              url3="/items/I (3).jpeg"
            />
          </div>
          <div className="flex items-center justify-center p-2 md:hidden ">
            <ThumbMob
              url1="/items/I (5).jpeg"
              url2="/items/I (4).jpeg"
              url3="/items/I (3).jpeg"
            />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-caslon text-black">About Us</h2>
            <div className="px-5 text-[0.9rem] font-light md:text-base">
              Flowers are a special way to show someone you love and appreciate
              them. You can visit Blossom Flora to select flowers of your choice
              which can be arranged by us in an appealing way. We have a wide
              variety of options to make sure that you can find something
              appropriate for the occasion for which you need them.
              <br />
              <br />
              We also provide instructions to customers on how to take care of
              flowers and plants.
            </div>
          </div>
        </div>
      </section>
      <section id="collectionSection">
        <div className="mx-auto mt-10 flex max-w-7xl  flex-col items-center">
          <h2 className="font-caslon  text-black">Collections</h2>
          <div className="flex flex-wrap justify-center gap-10 ">
            <HomeCollections url="/items/I (5).jpeg" name="Premium Car Deck." />
            <HomeCollections
              url="/items/I (4).jpeg"
              name="Red rose, dried Gixo. Bouqet"
            />
            <HomeCollections url="/items/I (3).jpeg" name="Artifical Bouquet" />
            <HomeCollections
              url="/items/I (2).jpeg"
              name="Holy communion - decorated candle."
            />
            <HomeCollections url="/items/I (1).jpeg" name="Cyprus Car Deck." />
            <HomeCollections url="/items/I (6).jpeg" name="Artifical Bouquet" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
